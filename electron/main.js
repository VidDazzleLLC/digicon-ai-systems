const { app, BrowserWindow, ipcMain, Tray, Menu, globalShortcut, Notification } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const { autoUpdater } = require('electron-updater');
const http = require('http');
const fs = require('fs');

let mainWindow;
let nextServer;
let tray = null;
let selfHealingAgent;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false, // Don't show until ready to prevent flashing
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Standard for this basic integration
    },
    title: 'Digicon AI Systems',
  });

  checkServer('http://localhost:3000', () => {
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.show();
  });

  mainWindow.on('close', (event) => {
    // Instead of quitting, hide to tray so background agent keeps running
    if (!app.isQuiting) {
      event.preventDefault();
      mainWindow.hide();
    }
    return false;
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function createTray() {
  const iconPath = path.join(__dirname, '..', 'public', 'favicon.ico');
  if (fs.existsSync(iconPath)) {
      tray = new Tray(iconPath);
  } else {
      // Fallback if no icon
      tray = new Tray(path.join(__dirname, 'icon.png')); // We will ignore if it fails
  }

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show Dashboard', click: () => { mainWindow.show(); } },
    { type: 'separator' },
    { label: 'Quit Digicon', click: () => {
        app.isQuiting = true;
        app.quit();
      }
    }
  ]);

  if(tray) {
      tray.setToolTip('Digicon AI Systems Agent');
      tray.setContextMenu(contextMenu);
      tray.on('click', () => {
          mainWindow.show();
      });
  }
}

function startNextJs() {
  if (nextServer) {
    console.log('Killing existing Next.js server before restart...');
    nextServer.kill();
  }

  const isDev = !app.isPackaged;

  if (isDev) {
    nextServer = spawn('npm', ['run', 'dev'], {
      cwd: path.join(__dirname, '..'),
      shell: true,
    });
  } else {
    // We use process.execPath to use the bundled Node.js environment
    nextServer = spawn(process.execPath, ['server.js'], {
      cwd: path.join(__dirname, '..', '.next', 'standalone'),
      env: { ...process.env, PORT: '3000', ELECTRON_RUN_AS_NODE: '1' }
    });
  }

  nextServer.stdout.on('data', (data) => {
    console.log(`Next.js stdout: ${data}`);
  });

  nextServer.stderr.on('data', (data) => {
    console.error(`Next.js stderr: ${data}`);
  });

  nextServer.on('error', (err) => {
    console.error(`Failed to start Next.js process: ${err.message}`);
  });

  nextServer.on('close', (code) => {
      console.log(`Next.js process exited with code ${code}`);
      if (code !== 0 && code !== null && selfHealingAgent) {
          selfHealingAgent.handleFailure();
      }
  });
}

global.restartNextJs = startNextJs;

function checkServer(url, callback) {
  let retries = 30;
  const interval = setInterval(() => {
    http.get(url, (res) => {
      if (res.statusCode === 200) {
        clearInterval(interval);
        callback();
      }
    }).on('error', () => {
      retries--;
      if (retries <= 0) {
        clearInterval(interval);
        console.error('Next.js server failed to start.');
      }
    });
  }, 1000);
}

app.on('ready', () => {
  // 1. Auto-Launch Configuration
  app.setLoginItemSettings({
    openAtLogin: true,
    openAsHidden: true, // Start in background tray
    path: app.getPath('exe')
  });

  // 2. Setup Auto Updater
  autoUpdater.checkForUpdatesAndNotify();

  startNextJs();
  createWindow();

  try {
      createTray();
  } catch(e) {} // Ignore if icon missing for demo

  // Register Global Shortcut
  globalShortcut.register('CommandOrControl+Shift+Space', () => {
    if (mainWindow) {
        if (mainWindow.isVisible()) {
            mainWindow.hide();
        } else {
            mainWindow.show();
        }
    }
  });

  // Initialize background generic modules
  const licenseModule = require('./license.js');
  licenseModule(ipcMain);
  require('./reporting.js')(ipcMain);

  // 4. Periodic License Verification
  setInterval(async () => {
     try {
         const res = await ipcMain.handlers['license-check']();
         if (!res.valid) {
             console.error('Periodic License Check Failed. Disabling core functions.');
             // Disable UI or shutdown the Next server
             if (nextServer) nextServer.kill();
             if (mainWindow) mainWindow.loadFile(path.join(__dirname, 'license-error.html'));
         }
     } catch (e) {}
  }, 1000 * 60 * 60); // Verify every hour

  // Start autonomous features
  try {
      // 3. Expose Native Notifications to Agents
      global.sendNotification = (title, body) => {
          if (Notification.isSupported()) {
              new Notification({ title, body }).show();
          }
      };

      selfHealingAgent = require('../lib/agent-core/self-healing.js');
      global.mainWindow = mainWindow;
      require('../lib/agent-core/self-improving.js');
      require('../lib/agent-core/llm-router.js');
  } catch(e) {
      console.error('Failed to start autonomous agents:', e);
  }
});

app.on('window-all-closed', () => {
  // We keep the app running in the background because it's an agent!
});

app.on('quit', () => {
  if (nextServer) {
    nextServer.kill();
  }
});

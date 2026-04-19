const { machineIdSync } = require('node-machine-id');
const jwt = require('jsonwebtoken');
const si = require('systeminformation');
const fs = require('fs');
const path = require('path');
const { app } = require('electron');

const LICENSE_SECRET = process.env.LICENSE_SECRET || 'fallback_secret_for_local_demo';
const LICENSE_PATH = path.join(app.getPath('userData'), 'license.jwt');

class LicenseManager {
  constructor() {
    this.machineId = machineIdSync();
  }

  async getHardwareFingerprint() {
    try {
        const baseboard = await si.baseboard();
        const cpu = await si.cpu();
        const osInfo = await si.osInfo();

        const isVM = osInfo.virtual || false;

        return {
            machineId: this.machineId,
            boardSerial: baseboard.serial,
            cpuBrand: cpu.brand,
            isVM
        };
    } catch (e) {
        return { machineId: this.machineId, isVM: false };
    }
  }

  async verifyLicense() {
      if (!fs.existsSync(LICENSE_PATH)) {
          return { valid: false, error: 'No license file found.' };
      }

      try {
          const token = fs.readFileSync(LICENSE_PATH, 'utf8');
          const decoded = jwt.verify(token, LICENSE_SECRET);

          const currentFingerprint = await this.getHardwareFingerprint();

          if (decoded.machineId !== currentFingerprint.machineId) {
              return { valid: false, error: 'Hardware mismatch. License locked to another computer.' };
          }

          if (currentFingerprint.isVM && !decoded.allowVM) {
               console.warn('[License] Warning: Running in a Virtual Machine. This may be restricted.');
          }

          return { valid: true, expiresAt: decoded.exp };
      } catch (err) {
          return { valid: false, error: 'Invalid or expired license token.' };
      }
  }

  async saveLicense(token) {
      fs.writeFileSync(LICENSE_PATH, token);
      return await this.verifyLicense();
  }
}

const licenseManager = new LicenseManager();

module.exports = function(ipcMain) {
    ipcMain.handle('license-check', async (event, args) => {
        return await licenseManager.verifyLicense();
    });

    ipcMain.handle('license-save', async (event, token) => {
        return await licenseManager.saveLicense(token);
    });

    ipcMain.handle('license-fingerprint', async (event) => {
        return await licenseManager.getHardwareFingerprint();
    });
};

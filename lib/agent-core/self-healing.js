const cron = require('node-cron');
const axios = require('axios');

class SelfHealingAgent {
  constructor() {
    this.failureCount = 0;
    this.maxRetries = 3;
    this.isDegraded = false;
    this.healthCheckUrl = 'http://localhost:3000/api/health';

    cron.schedule('0 * * * *', () => {
      this.monitorHealth();
    });
  }

  async monitorHealth() {
    console.log('[Self-Healing] Running scheduled health check...');
    try {
      const response = await axios.get(this.healthCheckUrl, { timeout: 5000 });
      if (response.status === 200) {
        console.log('[Self-Healing] System healthy.');
        this.failureCount = 0;
        this.isDegraded = false;
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    } catch (error) {
      console.error('[Self-Healing] Health check failed:', error.message);
      this.handleFailure();
    }
  }

  handleFailure() {
    this.failureCount++;
    console.log(`[Self-Healing] Failure count: ${this.failureCount}`);

    if (this.failureCount >= this.maxRetries) {
      if (!this.isDegraded) {
        console.log('[Self-Healing] Maximum retries reached. Entering degraded mode.');
        this.isDegraded = true;
        this.alertUser('System has entered degraded mode due to repeated failures.');
      }
    } else {
      console.log('[Self-Healing] Attempting to auto-restart modules with exponential backoff...');
      const backoffDelay = Math.pow(2, this.failureCount) * 1000;
      setTimeout(() => this.restartModules(), backoffDelay);
    }
  }

  restartModules() {
     console.log('[Self-Healing] Restarting core modules...');
     if (global.restartNextJs) {
         global.restartNextJs();
     }
  }

  alertUser(message) {
      console.warn(`[ALERT] ${message}`);

      // Try sending a native OS notification first
      if (global.sendNotification) {
          global.sendNotification('Digicon System Alert', message);
      }

      if (global.mainWindow) {
          global.mainWindow.webContents.send('system-alert', { message, type: 'error' });
      }
  }
}

module.exports = new SelfHealingAgent();

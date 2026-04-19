const fs = require('fs');
const path = require('path');
const { app } = require('electron');

module.exports = function(ipcMain) {
    ipcMain.handle('report-generate', async (event, format) => {
        try {
            const metricsPath = path.join(app.getPath('userData'), 'performance-metrics.json');
            let data = [];
            if (fs.existsSync(metricsPath)) {
                data = JSON.parse(fs.readFileSync(metricsPath, 'utf8'));
            }

            const reportData = {
                generatedAt: new Date().toISOString(),
                totalTasks: data.length,
                successRate: data.length > 0 ? data.filter(d => d.success).length / data.length : 0,
                recentMetrics: data.slice(-50)
            };

            const downloadsPath = app.getPath('downloads');

            if (format === 'csv') {
                let csv = 'timestamp,taskName,durationMs,success,outputQualityScore\n';
                reportData.recentMetrics.forEach(row => {
                    csv += `${row.timestamp},${row.taskName},${row.durationMs},${row.success},${row.outputQualityScore}\n`;
                });

                const csvPath = path.join(downloadsPath, `Digicon_Report_${Date.now()}.csv`);
                fs.writeFileSync(csvPath, csv);
                return { success: true, filePath: csvPath, type: 'csv' };
            }

            // Default JSON
            const jsonPath = path.join(downloadsPath, `Digicon_Report_${Date.now()}.json`);
            fs.writeFileSync(jsonPath, JSON.stringify(reportData, null, 2));
            return { success: true, filePath: jsonPath, type: 'json', data: reportData };

        } catch (error) {
            console.error('[Reporting] Failed to generate report:', error);
            return { success: false, error: error.message };
        }
    });
};

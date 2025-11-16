'use client';

/**
 * Payroll Automation Dashboard
 * Real-time monitoring of API key usage, corrections, and logs
 * Uses SWR for automatic real-time updates
 */

import { useState, useEffect } from 'react';
import useSWR from 'swr';

// Fetcher function for SWR
const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function AutomationDashboard() {
  const [apiKey, setApiKey] = useState('');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    // Load API key from localStorage
    const savedKey = localStorage.getItem('payroll_api_key');
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);
  
  // Fetch dashboard data with SWR (auto-refresh every 5 seconds)
  const { data, error, isLoading } = useSWR(
    apiKey ? `/api/automation/dashboard/data?apiKey=${apiKey}` : null,
    fetcher,
    { refreshInterval: 5000 } // Refresh every 5 seconds
  );
  
  const handleApiKeySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const key = formData.get('apiKey') as string;
    setApiKey(key);
    localStorage.setItem('payroll_api_key', key);
  };
  
  const handleLogout = () => {
    setApiKey('');
    localStorage.removeItem('payroll_api_key');
  };
  
  if (!mounted) {
    return null; // Avoid hydration mismatch
  }
  
  // API key input screen
  if (!apiKey) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Payroll Automation
            </h1>
            <p className="text-gray-600">
              Enter your API key to view your dashboard
            </p>
          </div>
          
          <form onSubmit={handleApiKeySubmit} className="space-y-4">
            <div>
              <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-2">
                API Key
              </label>
              <input
                type="text"
                name="apiKey"
                id="apiKey"
                placeholder="digi_XXXXXXXXXXXXXXXX"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Access Dashboard
            </button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            Your API key is stored locally and never transmitted to third parties
          </p>
        </div>
      </div>
    );
  }
  
  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }
  
  // Error state
  if (error || !data?.success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="text-red-600 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Authentication Failed
          </h2>
          <p className="text-gray-600 mb-6">
            Invalid or revoked API key. Please check your credentials.
          </p>
          <button
            onClick={handleLogout}
            className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  
  const dashboardData = data.data;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Payroll Automation Dashboard
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                {dashboardData.apiKey.companyName} • {dashboardData.apiKey.customerEmail}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Requests Today */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Requests Today</h3>
              <span className="text-2xl">📊</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {dashboardData.usage.requestsToday}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              of {dashboardData.usage.requestsPerDay} ({dashboardData.usage.percentUsed}%)
            </p>
            <div className="mt-3 bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all"
                style={{ width: `${dashboardData.usage.percentUsed}%` }}
              ></div>
            </div>
          </div>
          
          {/* Total Corrections */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Total Corrections</h3>
              <span className="text-2xl">✅</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {dashboardData.statistics.totalCorrections}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {dashboardData.statistics.successRate}% success rate
            </p>
          </div>
          
          {/* Issues Found */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Issues Found</h3>
              <span className="text-2xl">🔍</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {dashboardData.statistics.totalIssuesFound}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              AI-detected errors
            </p>
          </div>
          
          {/* Avg Processing Time */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Avg Response Time</h3>
              <span className="text-2xl">⚡</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {(dashboardData.statistics.avgProcessingTime / 1000).toFixed(2)}s
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Processing time
            </p>
          </div>
        </div>
        
        {/* Recent Corrections */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Corrections</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Issues Found
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Processing Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tokens
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dashboardData.recentCorrections.map((correction: any) => (
                  <tr key={correction.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(correction.createdAt).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        correction.status === 'COMPLETED' 
                          ? 'bg-green-100 text-green-800' 
                          : correction.status === 'FAILED'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {correction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {correction.correctionCount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {correction.processingTime ? `${(correction.processingTime / 1000).toFixed(2)}s` : 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {correction.aiTokensUsed || 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Recent Activity Logs */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Activity Log</h2>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {dashboardData.recentLogs.map((log: any) => (
                <div key={log.id} className="flex items-start space-x-3 text-sm">
                  <span className={`mt-1 ${log.success ? 'text-green-500' : 'text-red-500'}`}>
                    {log.success ? '✓' : '✗'}
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">{log.eventType}</p>
                    <p className="text-gray-500 text-xs">
                      {new Date(log.createdAt).toLocaleString()}
                      {log.responseTime && ` • ${log.responseTime}ms`}
                    </p>
                    {log.errorMsg && (
                      <p className="text-red-600 text-xs mt-1">{log.errorMsg}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      {/* Auto-refresh indicator */}
      <div className="fixed bottom-4 right-4 bg-white rounded-full shadow-lg px-4 py-2 text-xs text-gray-600">
        🔄 Auto-refreshing every 5s
      </div>
    </div>
  );
}

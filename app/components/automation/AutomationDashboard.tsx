'use client';

/**
 * Reusable Dashboard Component
 * Used by all 6 automation systems
 */

import { useEffect, useState } from 'react';

interface DashboardProps {
  systemType: 'payroll' | 'hris' | 'erp' | 'crm' | 'compliance' | 'ai_infrastructure';
  systemName: string;
  companyId: string;
}

export default function AutomationDashboard({ systemType, systemName, companyId }: DashboardProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDashboardData();
  }, [companyId]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/automation/${systemType}/dashboard/data?companyId=${companyId}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data');
      }

      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h2 className="text-red-800 font-semibold mb-2">Error</h2>
          <p className="text-red-600">{error}</p>
          <button
            onClick={fetchDashboardData}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const stats = data?.stats || {};
  const corrections = data?.corrections || [];
  const apiKeys = data?.apiKeys || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {systemName} Automation Dashboard
          </h1>
          <p className="text-gray-600">
            AI-powered corrections and insights for your {systemName.toLowerCase()} system
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Total Corrections</h3>
            <p className="text-3xl font-bold text-gray-900">{stats.total || 0}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Pending Review</h3>
            <p className="text-3xl font-bold text-yellow-600">{stats.pending || 0}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Approved</h3>
            <p className="text-3xl font-bold text-green-600">{stats.approved || 0}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Estimated Savings</h3>
            <p className="text-3xl font-bold text-blue-600">
              ${(stats.totalSavings || 0).toLocaleString()}
            </p>
          </div>
        </div>

        {/* API Keys Section */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">API Keys</h2>
          </div>
          <div className="p-6">
            {apiKeys.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No API keys found</p>
            ) : (
              <div className="space-y-3">
                {apiKeys.map((key: any) => (
                  <div key={key.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{key.name}</p>
                      <p className="text-sm text-gray-500">{key.keyPrefix}...</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">
                        {key.dailyUsage} / {key.dailyLimit} calls today
                      </p>
                      <p className={`text-xs ${key.active ? 'text-green-600' : 'text-red-600'}`}>
                        {key.active ? 'Active' : 'Inactive'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Recent Corrections */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Corrections</h2>
          </div>
          <div className="overflow-x-auto">
            {corrections.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No corrections yet</p>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Record ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Issues Found
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Severity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Confidence
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Created
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {corrections.map((correction: any) => (
                    <tr key={correction.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {correction.recordId}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {correction.issuesFound.length} issue(s)
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          correction.severity === 'critical' ? 'bg-red-100 text-red-800' :
                          correction.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                          correction.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {correction.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {(correction.confidence * 100).toFixed(0)}%
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          correction.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                          correction.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
                          correction.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {correction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(correction.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

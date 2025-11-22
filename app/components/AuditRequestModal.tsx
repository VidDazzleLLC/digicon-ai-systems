'use client';

import { useState } from 'react';

interface AuditRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuditRequestModal({ isOpen, onClose }: AuditRequestModalProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    personalName: '',
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch('/api/audit/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyName: formData.companyName,
          contactName: formData.personalName,
          email: formData.email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to request portal link');
      }

      setSuccess(true);
      setFormData({
        companyName: '',
        personalName: '',
        email: '',
      });

      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDialogOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
      setError(null);
      setSuccess(false);
      setFormData({
        companyName: '',
        personalName: '',
        email: '',
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={() => handleDialogOpenChange(false)}>
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4 p-6" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-semibold mb-2">Get Started with Your Payroll Audit</h2>
        <p className="text-sm text-gray-600 mb-4">Enter your information and we'll send you a secure portal link.</p>
        
        {success ? (
          <div className="flex flex-col items-center justify-center py-6 space-y-4">
            <div className="text-5xl">✅</div>
            <div className="text-center space-y-2">
              <h3 className="font-semibold text-lg">Portal Link Sent!</h3>
              <p className="text-sm text-gray-600">Check your email for the secure portal link.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company Name *
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Your company name"
                required
                disabled={isLoading}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="personalName" className="block text-sm font-medium text-gray-700">
                Your Name *
              </label>
              <input
                id="personalName"
                name="personalName"
                type="text"
                value={formData.personalName}
                onChange={handleChange}
                placeholder="Your full name"
                required
                disabled={isLoading}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                disabled={isLoading}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>

            {error && (
              <div className="flex gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
                <span className="text-2xl flex-shrink-0">⚠️</span>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Portal Link'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface AuditRequest {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  status: string;
}

export default function PortalPage() {
  const params = useParams();
  const [request, setRequest] = useState<AuditRequest | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const id = (params as { id?: string | string[] })?.id as string;

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const res = await fetch(`/api/audit/portal/${id}`);
        if (!res.ok) {
          throw new Error('Failed to load audit request');
        }
        const data = await res.json();
        setRequest(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchRequest();
    } else {
      setLoading(false);
      setError('No portal id provided');
    }
  }, [id]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/audit/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          auditRequestId: id,
          companyName: request?.companyName,
          customerEmail: request?.email,
        }),
      });
      const data = await res.json();
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async () => {
    
    if (!file || !id) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('companyName', request?.companyName);
            formData.append('email', request?.email);

      const res = await fetch('/api/audit/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Upload failed');
      }

      await res.json();
      alert('File uploaded successfully!');
      setFile(null);
      // Refresh request status
      const refreshRes = await fetch(`/api/audit/portal/${id}`);
      if (refreshRes.ok) {
        const data = await refreshRes.json();
        setRequest(data);
      }
    } catch (err) {
      alert(`Upload failed: ${(err as Error).message}`);
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading your portal...</p>
        </div>
      </div>
    );
  }

  if (error || !request) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-700 mb-6">{error || 'Audit request not found'}</p>
          <a href="/" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Return Home
          </a>
        </div>
      </div>
    );
  }

  // Payment verification - show payment UI if not paid
  // Check paidAt instead of status, since status changes to processing/completed after payment
  const hasPaid = request.status === 'paid' || request.status === 'processing' || request.status === 'report_ready' || request.status === 'completed';

  if (!hasPaid) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 p-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">Payroll Audit Portal</h1>
            <p className="text-gray-600 mb-8">Request ID: <span className="font-mono text-gray-900">{request.id}</span></p>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Required</h2>
              <p className="text-sm text-gray-600 mb-6">
                Complete payment to access the audit portal and upload your payroll files.
              </p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-gray-900">$249.00 USD</p>
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  {loading ? 'Processing...' : 'Pay Now to Start Audit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Paid: show upload portal
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Payroll Audit Portal</h1>
          <p className="text-gray-600 mb-8">Request ID: <span className="font-mono text-gray-900">{request.id}</span></p>

          <div className="border-l-4 border-green-500 pl-4 py-2 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Payment Confirmed</h2>
            <p className="text-sm text-gray-600">
              Thank you for your payment! Upload your payroll files below to begin the audit.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Payroll Data</h2>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                  disabled={uploading}
                />
                <p className="text-xs text-gray-500 mt-2">CSV, XLS, XLSX or PDF (Max 10MB)</p>
              </div>

              {file && (
                <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-900">{file.name}</p>
                    <p className="text-sm text-gray-600">{(file.size / 1024).toFixed(2)} KB</p>
                  </div>
                  <button
                    onClick={() => setFile(null)}
                    className="text-red-600 hover:text-red-800 font-semibold"
                    disabled={uploading}
                  >
                    Remove
                  </button>
                </div>
              )}

              <button
                onClick={handleUpload}
                disabled={!file || uploading}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                {uploading ? 'Uploading...' : 'Upload File'}
              </button>
            </div>
          </div>

          {/* Support Info */}
          <div className="bg-gray-50 p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-sm text-gray-700 mb-3">
              Our team will analyze your payroll data and contact you within 24 hours with results.
            </p>
            <p className="text-sm text-gray-600">
              Questions? Contact us at <span className="font-semibold">support@digicon.app</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

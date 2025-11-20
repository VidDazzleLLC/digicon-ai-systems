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

  const id = params.id as string;

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
    }
  }, [id]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file || !id) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('requestId', id);

      const res = await fetch('/api/audit/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Upload failed');
      }

      const result = await res.json();
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Payroll Audit Portal</h1>
          <p className="text-gray-600 mb-8">Request ID: <span className="font-mono text-gray-900">{request.id}</span></p>

          <div className="space-y-6">
            {/* Request Details */}
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Request Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Company Name</p>
                  <p className="text-lg font-semibold text-gray-900">{request.companyName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Contact Name</p>
                  <p className="text-lg font-semibold text-gray-900">{request.contactName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-lg font-semibold text-gray-900">{request.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <p className="text-lg font-semibold">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      request.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : request.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* File Upload Section */}
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
            <div className="bg-gray-50 p-4 rounded-lg">
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
    </div>
  );
}

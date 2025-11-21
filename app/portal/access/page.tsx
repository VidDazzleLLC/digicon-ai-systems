'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function PortalAccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const token = searchParams.get('token');
        
        if (!token) {
          setError('Invalid portal link - no token provided.');
          setIsLoading(false);
          return;
        }

        // Verify token with backend
        const response = await fetch('/api/audit/verify-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });

        if (!response.ok) {
          const data = await response.json();
          setError(data.error || 'Invalid or expired portal link.');
          setIsLoading(false);
          return;
        }

        // Token is valid, redirect to checkout
        const data = await response.json();
        router.push(`/checkout?requestId=${data.requestId}`);
      } catch (err) {
        setError('An error occurred while validating your portal link.');
        setIsLoading(false);
      }
    };

    validateToken();
  }, [searchParams, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
          <p className="mt-4 text-gray-700">Validating your portal link...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h2 className="text-red-800 font-bold text-lg mb-2">Portal Link Invalid</h2>
          <p className="text-red-700 mb-4">{error}</p>
          <p className="text-red-600 text-sm mb-4">
            Portal links expire after 48 hours. Please request a new one by visiting the homepage.
          </p>
          <a
            href="/"
            className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Request New Link
          </a>
        </div>
      </div>
    );
  }

  return null;
}

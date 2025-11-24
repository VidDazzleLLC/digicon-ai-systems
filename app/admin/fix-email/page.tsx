'use client';

import { useState } from 'react';

export default function FixEmailPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const auditRequestId = 'cm1dd0h08mhml4t4ju4wsjlxp8';
  const newEmail = 'connect@viddazzle.com';

  const handleFixEmail = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/admin/fix-email-resend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          auditRequestId,
          newEmail,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to fix email and resend');
      } else {
        setResult(data);
      }
    } catch (err: any) {
      setError(err.message || 'Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '50px auto',
      padding: '30px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ color: '#FF6B35', marginBottom: '10px' }}>
        🔧 Admin: Fix Email & Resend Report
      </h1>

      <div style={{
        backgroundColor: '#fff3cd',
        padding: '15px',
        borderRadius: '6px',
        marginBottom: '20px',
        border: '1px solid #ffc107'
      }}>
        <p style={{ margin: '5px 0', fontSize: '14px' }}>
          <strong>Audit Request ID:</strong> {auditRequestId}
        </p>
        <p style={{ margin: '5px 0', fontSize: '14px' }}>
          <strong>Old Email:</strong> connect@1ddazzle.com
        </p>
        <p style={{ margin: '5px 0', fontSize: '14px' }}>
          <strong>New Email:</strong> {newEmail}
        </p>
      </div>

      <button
        onClick={handleFixEmail}
        disabled={loading}
        style={{
          backgroundColor: loading ? '#ccc' : '#FF6B35',
          color: 'white',
          padding: '12px 24px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '6px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
          width: '100%',
          marginBottom: '20px'
        }}
      >
        {loading ? '⏳ Processing...' : '🚀 Fix Email & Resend Report'}
      </button>

      {error && (
        <div style={{
          backgroundColor: '#f8d7da',
          color: '#721c24',
          padding: '15px',
          borderRadius: '6px',
          marginBottom: '20px',
          border: '1px solid #f5c6cb'
        }}>
          <strong>❌ Error:</strong> {error}
        </div>
      )}

      {result && (
        <div style={{
          backgroundColor: result.success ? '#d4edda' : '#f8d7da',
          color: result.success ? '#155724' : '#721c24',
          padding: '20px',
          borderRadius: '6px',
          border: result.success ? '1px solid #c3e6cb' : '1px solid #f5c6cb'
        }}>
          <h3 style={{ marginTop: 0 }}>
            {result.success ? '✅ Success!' : '❌ Failed'}
          </h3>

          {result.message && (
            <p style={{ fontSize: '14px', marginBottom: '15px' }}>
              {result.message}
            </p>
          )}

          {result.success && (
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              padding: '15px',
              borderRadius: '6px',
              fontSize: '14px'
            }}>
              <p style={{ margin: '5px 0' }}>
                <strong>Email Updated:</strong> {result.emailUpdated ? '✅ Yes' : '❌ No'}
              </p>
              <p style={{ margin: '5px 0' }}>
                <strong>Report Resent:</strong> {result.reportResent ? '✅ Yes' : '❌ No'}
              </p>
              {result.reportId && (
                <p style={{ margin: '5px 0' }}>
                  <strong>Report ID:</strong> {result.reportId}
                </p>
              )}
              {result.newEmail && (
                <p style={{ margin: '5px 0' }}>
                  <strong>Sent To:</strong> {result.newEmail}
                </p>
              )}
            </div>
          )}

          <details style={{ marginTop: '15px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
              📋 Full Response
            </summary>
            <pre style={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              padding: '10px',
              borderRadius: '4px',
              overflow: 'auto',
              fontSize: '12px',
              marginTop: '10px'
            }}>
              {JSON.stringify(result, null, 2)}
            </pre>
          </details>
        </div>
      )}

      <div style={{
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#e7f3ff',
        borderRadius: '6px',
        border: '1px solid #b3d9ff',
        fontSize: '14px'
      }}>
        <h4 style={{ marginTop: 0, color: '#004085' }}>ℹ️ What This Does:</h4>
        <ol style={{ margin: '10px 0', paddingLeft: '20px' }}>
          <li>Updates the email address in the database</li>
          <li>Retrieves the existing audit report</li>
          <li>Resends the report to the corrected email</li>
          <li>Updates the delivery status</li>
        </ol>
      </div>

      <div style={{
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#666'
      }}>
        <p>🔒 Admin Access Only</p>
      </div>
    </div>
  );
}

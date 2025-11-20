'use client';
import React, { useState } from 'react';
import ChatbotWidget from './components/ChatbotWidget';

type FormData = {
  companyName: string;
  email: string;
  file: File | null;
};

const DEFAULT_COMPANY_NAME = 'Not Provided';

export default function Home() {
  const [showAuditForm, setShowAuditForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({ companyName: '', email: '', file: null });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.file || !formData.email) {
      setError('Please upload a file and provide your email');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      // Build FormData object
      const uploadData = new FormData();
      uploadData.append('file', formData.file);
      uploadData.append('email', formData.email);
      uploadData.append('companyName', formData.companyName || DEFAULT_COMPANY_NAME);
      
      // POST to upload endpoint
      const response = await fetch('/api/audit/upload', {
        method: 'POST',
        body: uploadData, // multipart/form-data, no Content-Type header needed
      });
      
      const result = await response.json();
      
      if (!response.ok || !result.success) {
        throw new Error(result.error || result.message || 'Upload failed');
      }
      
      // Check for checkoutUrl in response
      if (result.checkoutUrl) {
        // Redirect to Stripe checkout
        // Note: We don't reset loading state here because redirect will navigate away
        window.location.assign(result.checkoutUrl);
      } else {
        setIsLoading(false);
        throw new Error('No checkout URL returned from server');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to upload file. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
<nav className="fixed top-0 w-full bg-black border-b border-gray-800 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-orange-500">Digicon AI Systems</h1>
        <div className="flex items-center gap-6">
          <a href="/why-digicon" className="text-gray-400 hover:text-white transition">Why Digicon</a>
<button onClick={() => setShowAuditForm(true)} className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded-lg font-semibold transition">            Get Audit
          </button>
        </div>
      </div>
    </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-extrabold mb-6">
            AI-Powered <span className="text-orange-500">Payroll Audit</span>
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
            Uncover hidden savings in minutes. Our AI finds overpayments, errors, and compliance risks in your payroll data.
          </p>

          {/* Black Friday Pricing Card */}
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500 rounded-3xl p-12 max-w-4xl mx-auto mb-16">
            <div className="inline-block bg-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
              🔥 BLACK FRIDAY SPECIAL
            </div>
            <h3 className="text-5xl font-extrabold mb-4">Payroll Audit (One Quarter)</h3>
            <div className="mb-8">
              <p className="text-2xl text-gray-500 line-through mb-2">Regular: $2,400</p>
              <p className="text-6xl font-bold text-orange-500">Only $249</p>
              <p className="text-xl text-green-400 mt-2">Save $2,151 (89% OFF)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-black/50 border border-orange-500/30 rounded-xl p-6">
                <p className="text-5xl font-bold text-orange-500">15-35%</p>
                <p className="text-gray-400 mt-2">Average Savings</p>
              </div>
              <div className="bg-black/50 border border-orange-500/30 rounded-xl p-6">
                <p className="text-5xl font-bold text-orange-500">9 sec</p>
                <p className="text-gray-400 mt-2">Analysis Time</p>
              </div>
              <div className="bg-black/50 border border-orange-500/30 rounded-xl p-6">
                <p className="text-5xl font-bold text-orange-500">100%</p>
                <p className="text-gray-400 mt-2">Secure & Private</p>
              </div>
            </div>

           
            
              <button onClick={() => setShowAuditForm(true)}
              className="bg-orange-500 hover:bg-orange-600 text-black px-16 py-5 rounded-xl text-2xl font-bold transition-all hover:scale-105"
            >
              Claim Your $249 Audit →
            </button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-bold mb-6">What We Analyze</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">✓</span>
                  <span>Overpayments & duplicates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">✓</span>
                  <span>Payroll calculation errors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">✓</span>
                  <span>Tax withholding issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">✓</span>
                  <span>Compliance risks</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-bold mb-6">Enterprise Security</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">🔒</span>
                  <span>AES-256-GCM encryption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">🔑</span>
                  <span>Single-use access codes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">⏰</span>
                  <span>90-day auto-expiration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">📊</span>
                  <span>SOC 2 Type II compliant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Form Modal */}
      {showAuditForm ? (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-gray-900 border-2 border-orange-500 rounded-2xl p-10 max-w-md w-full">
                <h3 className="text-3xl font-bold mb-6 text-center">Upload Your Payroll File</h3>
                <p className="text-gray-400 mb-8 text-center">Complete payment to receive your audit report</p>
                <div className="space-y-4">
                  {error && <p className="text-red-400 text-sm">{error}</p>}
                  
                  {/* File Upload */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Payroll File <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="file"
                      accept=".csv,.xlsx,.xls,.pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        setFormData({ ...formData, file });
                        setError(''); // Clear any previous error when selecting a new file
                      }}
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-black hover:file:bg-orange-600"
                      disabled={isLoading}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {formData.file ? `Selected: ${formData.file.name}` : 'Accepted: CSV, Excel, PDF'}
                    </p>
                  </div>
                  
                  {/* Company Name */}
                  <input
                    type="text"
                    placeholder="Company Name (optional)"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-black border border-gray-700 rounded-lg px-6 py-4 focus:border-orange-500 focus:outline-none"
                    disabled={isLoading}
                  />
                  
                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black border border-gray-700 rounded-lg px-6 py-4 focus:border-orange-500 focus:outline-none"
                    required
                    disabled={isLoading}
                  />
                 
                  
                    <button type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Uploading & Processing...' : 'Upload & Pay $249'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowAuditForm(false);
                      setError('');
                      setFormData({ companyName: '', email: '', file: null });
                    }}
                    className="w-full text-gray-400 hover:text-white transition"
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="bg-gray-900 border-2 border-orange-500 rounded-2xl p-10 max-w-md w-full text-center space-y-4">
              <h3 className="text-2xl font-bold mb-4">Success!</h3>
              <p className="text-gray-300 mb-6">
                Thank you for your request. We're sending a secure private portal link to your email. You'll use this link to upload your payroll data securely.
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setShowAuditForm(false);
                }}
                className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-3 rounded-lg font-semibold"
              >
                Close
              </button>
            </div>
          )}
        </div>
      ) : null}

      {/* Our Audit Services */}
      <div className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Audit Services</h2>
          <p className="text-xl text-gray-400 text-center mb-16">Comprehensive payroll analysis covering all critical areas</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Audit 1 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:border-orange-500 transition">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold">Overpayments & Duplicates</h3>
              </div>
              <p className="text-gray-400">Identify duplicate payments, overpayments, and wage errors that drain company resources</p>
            </div>

            {/* Audit 2 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:border-orange-500 transition">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold">Payroll Calculation Errors</h3>
              </div>
              <p className="text-gray-400">Detect incorrect calculations in gross pay, deductions, taxes, and net pay processing</p>
            </div>

            {/* Audit 3 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:border-orange-500 transition">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold">Compliance & Reporting</h3>
              </div>
              <p className="text-gray-400">Ensure payroll reporting and tax compliance to reduce regulatory risk</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Digicon AI Systems. All rights reserved.
          <div className="mt-4 space-x-6 text-sm">
    <a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
    <a href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</a>
  </div>
      </footer>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
}

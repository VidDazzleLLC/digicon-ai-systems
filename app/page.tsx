'use client';

import React, { useState } from 'react';
import { AuditRequestModal } from './components/AuditRequestModal';
import ChatbotWidget from './components/ChatbotWidget';

export default function Home() {
  const [showAuditModal, setShowAuditModal] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black border-b border-gray-800 z-50">
        <div className="flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-orange-500">Digicon AI Systems</h1>
          <div className="flex items-center gap-6">
            <a href="/why-digicon" className="text-gray-400 hover:text-white transition">
              Why Digicon
            </a>
            <button
              onClick={() => setShowAuditModal(true)}
              className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded-lg font-semibold transition"
            >
              Claim Your $249 Audit
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

            <button
              onClick={() => setShowAuditModal(true)}
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

      {/* Audit Modal */}
      <AuditRequestModal isOpen={showAuditModal} onClose={() => setShowAuditModal(false)} />

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
          <a href="/privacy" className="text-gray-400 hover:text-white transition">
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-400 hover:text-white transition">
            Terms & Conditions
          </a>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
}

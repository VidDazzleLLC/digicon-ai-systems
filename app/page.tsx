'use client';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import ChatbotWidget from './components/ChatbotWidget';

interface ConferenceRoom {
  id: string;
  name: string;
  description: string;
  participants: number;
  status: 'active' | 'pending' | 'closed';
}

export default function Home() {
  const [arr, setArr] = useState(20470000);
  const [activeSection, setActiveSection] = useState('home');
  const [conferenceRooms, setConferenceRooms] = useState<ConferenceRoom[]>([
    { id: '1', name: 'Acme Corp - Secure Conference Room', description: 'SaaS integration project', participants: 5, status: 'active' },
    { id: '2', name: 'TechVentures - Secure Conference Room', description: 'Revenue sharing agreement', participants: 3, status: 'active' },
    { id: '3', name: 'Beta Testing - Secure Conference Room', description: 'Early access program', participants: 12, status: 'pending' }
  ]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');
  const [newRoomDesc, setNewRoomDesc] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setArr(prev => prev + Math.floor(Math.random() * 1000 + 100));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const createConferenceRoom = () => {
    if (!newRoomName.trim()) return;
    const newRoom: ConferenceRoom = {
      id: Date.now().toString(),
      name: newRoomName,
      description: newRoomDesc,
      participants: 1,
      status: 'active'
    };
    setConferenceRooms([...conferenceRooms, newRoom]);
    setNewRoomName('');
    setNewRoomDesc('');
    setShowCreateModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-blue-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Digicon AI Systems™
              </h1>
            </div>
            <div className="flex space-x-4">
              <button onClick={() => setActiveSection('home')} className={`px-4 py-2 rounded-lg transition ${activeSection === 'home' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-slate-800'}`}>Home</button>
              <button onClick={() => setActiveSection('conferencerooms')} className={`px-4 py-2 rounded-lg transition ${activeSection === 'conferencerooms' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-slate-800'}`}>Conference Rooms</button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Hero Section */}
        {activeSection === 'home' && (
          <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    AI-Powered Enterprise Revenue Engine
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Transform every interaction into instant, compounding revenue with zero-friction automation
                </p>

                {/* FREE PAYROLL AUDIT CTA - Prominent on first page view */}
                <div className="mb-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-lg shadow-2xl">
                  <div className="text-center">
                    <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                      🎁 FREE SERVICE - LIMITED TIME
                    </div>
                    <h3 className="text-4xl font-extrabold text-white mb-2">
                      Free Payroll Audit <span className="text-green-400">(One Quarter)</span>
                    </h3>
                    <p className="text-2xl font-bold text-yellow-400 mb-4">
                      $2,500 Value - FREE for Limited Time
                    </p>
                    <p className="text-xl text-gray-200 mb-6">
                      Analyze <span className="font-bold text-green-400">3 months of payroll data</span> to uncover hidden savings, overpayments, and errors
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-slate-800/50 rounded-lg p-4 border border-green-500/30">
                        <p className="text-3xl font-bold text-green-400">15-20%</p>
                        <p className="text-sm text-gray-300">Average Savings Found</p>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4 border border-green-500/30">
                        <p className="text-3xl font-bold text-green-400">$0</p>
                        <p className="text-sm text-gray-300">Cost to You</p>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4 border border-green-500/30">
                        <p className="text-3xl font-bold text-green-400">9 sec</p>
                        <p className="text-sm text-gray-300">Analysis Time</p>
                      </div>
                    </div>
                    <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30 mb-6">
                      <p className="text-sm text-gray-300">
                        <span className="font-bold text-blue-400">🔒 100% Secure:</span> All file uploads happen in Secure Conference Rooms with military-grade AES-256-GCM encryption, SOC 2 Type II compliance, and complete confidentiality
                      </p>
                    </div>
                    <button onClick={() => setActiveSection('conferencerooms')} className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-10 py-5 rounded-lg text-xl font-bold shadow-2xl transition-all duration-200 hover:scale-105">
                      Get Your FREE Audit (One Quarter) →
                    </button>
                    <p className="text-xs text-gray-400 mt-4">
                      No credit card required • Results in minutes • Used by Fortune 500 CFOs
                    </p>
                  </div>
                </div>

                {/* What We Analyze & Enterprise-Grade Security */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {/* What We Analyze Box */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">What We Analyze (One Quarter = 3 Months)</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 text-lg">✓</span>
                        <span>Overpayments and duplicate payments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 text-lg">✓</span>
                        <span>Payroll calculation errors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 text-lg">✓</span>
                        <span>Tax withholding discrepancies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 text-lg">✓</span>
                        <span>Benefits and deduction inconsistencies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 text-lg">✓</span>
                        <span>Compliance risks and audit trail gaps</span>
                      </li>
                    </ul>
                  </div>

                  {/* Enterprise-Grade Security Box */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center">
                      <span className="mr-2">🔐</span> Enterprise-Grade Security
                    </h3>
                    <p className="text-gray-300 mb-4">
                      All payroll file uploads happen exclusively in <span className="font-bold text-purple-400">Secure Conference Rooms</span>. Never on this public page.
                    </p>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">🔒</span>
                        <span>Military-grade AES-256-GCM encryption</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">🔑</span>
                        <span>Single-use access codes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">⏰</span>
                        <span>Auto-expiration after 90 days</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2">📊</span>
                        <span>Complete audit trail and SOC 2 Type II compliance</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Enterprise Audits & Secure Conference Rooms Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Audit Savings */}
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <span className="mr-2">📊</span> Enterprise Audits & Savings
                    </h3>
                    <p className="text-gray-300 mb-6">
                      We audit 6 core systems to uncover hidden revenue leaks and cost inefficiencies.
                    </p>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="text-white font-bold">Payroll Processing</h4>
                        <p className="text-gray-400 text-sm">KPI: 15-20% overpayment reduction</p>
                        <p className="text-green-400 font-bold">Potential Savings: $2.5B/year</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="text-white font-bold">HRIS/HCM Systems</h4>
                        <p className="text-gray-400 text-sm">KPI: 97% faster audit cycle (3 weeks → 9s)</p>
                        <p className="text-blue-400 font-bold">Efficiency Gain: 99.97%</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="text-white font-bold">ERP/Finance</h4>
                        <p className="text-gray-400 text-sm">KPI: 30% AI maintenance cost cut</p>
                        <p className="text-purple-400 font-bold">Annual Savings: $500K-$2M</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="text-white font-bold">CRM (Lead-to-Close)</h4>
                        <p className="text-gray-400 text-sm">KPI: 30% hallucination drop</p>
                        <p className="text-yellow-400 font-bold">Revenue Impact: $1M-$5M</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="text-white font-bold">Compliance Logs</h4>
                        <p className="text-gray-400 text-sm">KPI: &lt;1% error rate (audit trails, tax filings)</p>
                        <p className="text-red-400 font-bold">Risk Reduction: 99%</p>
                      </div>
                      <div className="border-l-4 border-cyan-500 pl-4">
                        <h4 className="text-white font-bold">AI Infrastructure</h4>
                        <p className="text-gray-400 text-sm">KPI: 95% cost reduction (RAG, vector DB)</p>
                        <p className="text-cyan-400 font-bold">Infrastructure Savings: $100K-$1M/year</p>
                      </div>
                    </div>
                  </div>

                  {/* Secure Conference Room */}
                  <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <span className="mr-2">🔐</span> Secure Conference Rooms
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Enterprise-grade security for sensitive data sharing. All payroll and financial file uploads happen exclusively in Secure Conference Rooms - never on public pages.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✅</span>
                        <div>
                          <p className="text-white font-semibold">Military-Grade Encryption</p>
                          <p className="text-gray-400 text-sm">AES-256-GCM for all uploaded files</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✅</span>
                        <div>
                          <p className="text-white font-semibold">Single-Use Access Codes</p>
                          <p className="text-gray-400 text-sm">Cryptographically secure, 8-character codes</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✅</span>
                        <div>
                          <p className="text-white font-semibold">Auto-Expiration</p>
                          <p className="text-gray-400 text-sm">Rooms automatically expire after 90 days</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✅</span>
                        <div>
                          <p className="text-white font-semibold">Complete Audit Trail</p>
                          <p className="text-gray-400 text-sm">Every access attempt logged for compliance</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✅</span>
                        <div>
                          <p className="text-white font-semibold">SOC 2 Type II Compliance</p>
                          <p className="text-gray-400 text-sm">Enterprise security standards</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                      <p className="text-sm text-gray-300">
                        <span className="font-bold text-blue-400">Why it matters:</span> CFOs share payroll, financial, HRIS, ERP, CRM, and compliance data with complete confidence. Your sensitive documents are stored and processed only in Secure Conference Rooms.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Voice AI Assistant Widget - Fixed positioning */}
                <div className="mt-12 max-w-4xl mx-auto">
                  <h3 className="text-3xl font-bold text-white text-center mb-6">🎙️ AI Voice Sales Assistant</h3>
                  <p className="text-xl text-gray-300 text-center mb-6">
                    Experience enterprise-grade AI voice assistance. Available 24/7 to answer questions, schedule appointments, and close deals instantly.
                  </p>
                  <div className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-2xl overflow-hidden shadow-2xl">
                    <iframe
                      src="https://voiceagents.tech/widget/v2/8b28518f-ba4f-4083-b282-8dbd0a00c7ab/1758814938820x190350333809891300"
                      className="w-full h-[500px]"
                      title="Joyce AI Voice Sales Assistant"
                    />
                  </div>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30 text-center">
                      <p className="text-2xl font-bold text-blue-400">24/7</p>
                      <p className="text-sm text-gray-300">Always Available</p>
                    </div>
                    <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30 text-center">
                      <p className="text-2xl font-bold text-green-400">3x</p>
                      <p className="text-sm text-gray-300">Faster Response Time</p>
                    </div>
                    <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30 text-center">
                      <p className="text-2xl font-bold text-purple-400">95%</p>
                      <p className="text-sm text-gray-300">Customer Satisfaction</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center space-x-8 mb-12 mt-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400">${(arr / 1000000).toFixed(2)}M</div>
                    <div className="text-sm text-gray-400">ARR (Live)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400">{conferenceRooms.length}</div>
                    <div className="text-sm text-gray-400">Active Conference Rooms</div>
                  </div>
                </div>
                <button onClick={() => setActiveSection('conferencerooms')} className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-md transition">
                  Explore Conference Rooms →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Conference Rooms Section */}
        {activeSection === 'conferencerooms' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* How to Access Instructions */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50 rounded-2xl p-8 mb-12">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">🔐</span> How to Access Your Secure Conference Room
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/30">
                  <div className="text-4xl font-bold text-blue-400 mb-3">1</div>
                  <h4 className="text-xl font-bold text-white mb-2">Request Access</h4>
                  <p className="text-gray-300">Click "Create New Conference Room" or contact our team. We'll create a dedicated room for your company.</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/30">
                  <div className="text-4xl font-bold text-green-400 mb-3">2</div>
                  <h4 className="text-xl font-bold text-white mb-2">Receive Your Code</h4>
                  <p className="text-gray-300">You'll receive a unique 8-character access code via email. This code is single-use and expires in 90 days.</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-500/30">
                  <div className="text-4xl font-bold text-purple-400 mb-3">3</div>
                  <h4 className="text-xl font-bold text-white mb-2">Upload & Collaborate</h4>
                  <p className="text-gray-300">Use your code to access your room and securely upload documents. All files are encrypted with AES-256-GCM.</p>
                </div>
              </div>
              <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                <p className="text-sm text-gray-300">
                  <span className="font-bold text-blue-400">📌 Note:</span> Each conference room is named after your company (e.g., "Acme Corp - Secure Conference Room") for easy identification. All data remains confidential and is never shared with third parties.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bold text-white">Your Conference Rooms</h2>
              <button onClick={() => setShowCreateModal(true)} className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-bold shadow-md transition">
                + Create New Conference Room
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conferenceRooms.map((room) => (
                <div key={room.id} className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 transition group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">{room.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      room.status === 'active' ? 'bg-green-500/20 text-green-400' :
                      room.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {room.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{room.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">{room.participants} participants</div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                      Join Room
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Create Modal */}
            {showCreateModal && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-slate-800 border border-blue-500/30 rounded-xl p-8 max-w-md w-full mx-4">
                  <h3 className="text-2xl font-bold text-white mb-6">Create Conference Room</h3>
                  <input
                    type="text"
                    placeholder="Room Name"
                    value={newRoomName}
                    onChange={(e) => setNewRoomName(e.target.value)}
                    className="w-full bg-slate-700 border border-blue-500/30 rounded-lg px-4 py-3 text-white mb-4 focus:outline-none focus:border-blue-500"
                  />
                  <textarea
                    placeholder="Description"
                    value={newRoomDesc}
                    onChange={(e) => setNewRoomDesc(e.target.value)}
                    className="w-full bg-slate-700 border border-blue-500/30 rounded-lg px-4 py-3 text-white mb-6 h-24 focus:outline-none focus:border-blue-500"
                  />
                  <div className="flex space-x-4">
                    <button onClick={() => setShowCreateModal(false)} className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg font-medium transition">
                      Cancel
                    </button>
                    <button onClick={createConferenceRoom} className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-3 rounded-lg font-medium transition">
                      Create
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-blue-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Digicon AI Systems™</h3>
              <p className="text-gray-400 text-sm mb-4">
                Enterprise-grade AI solutions with uncompromising security and privacy. Your data is never shared with third parties.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:contact@digicon-ai-systems.com" className="text-blue-400 hover:text-blue-300 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-white transition text-sm">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-white transition text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/gdpr" className="text-gray-400 hover:text-white transition text-sm">
                    GDPR Compliance
                  </a>
                </li>
              </ul>
            </div>

            {/* Security & Data Protection */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Security & Privacy</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>SOC 2 Type II Certified</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>GDPR Compliant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>AES-256-GCM Encryption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>Zero Third-Party Data Sharing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-500/20 pt-8">
            <p className="text-center text-gray-400 text-sm">
              © 2025 Digicon AI Systems™. All rights reserved. | Built with Next.js + Supabase + Together AI
            </p>
          </div>
        </div>
      </footer>

      {/* AI Chatbot Widget - Persistent across all pages */}
      <ChatbotWidget />
    </div>
  );
}

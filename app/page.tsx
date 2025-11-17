'use client';
import React, { useState, useEffect } from 'react';
import ChatbotWidget from './components/ChatbotWidget';

interface ConferenceRoom {
  id: string;
  name: string;
  description: string;
  participants: number;
  status: 'active' | 'pending' | 'closed';
  cfoEmail?: string;
  expiresAt?: string;
  accessCodeSent?: boolean;
}

interface VerifyResponse {
  success?: boolean;
  error?: string;
  conferenceRoom?: {
    id: string;
    companyName: string;
    status: string;
    expiresAt?: string;
    message?: string;
    cfoName?: string;
  };
}

export default function Home(): JSX.Element {
  const [arr, setArr] = useState<number>(20470000);
  const [activeSection, setActiveSection] = useState<'home' | 'conferencerooms'>('home');
  const [conferenceRooms, setConferenceRooms] = useState<ConferenceRoom[]>([
    { id: '1', name: 'Acme Corp - Secure Conference Room', description: 'SaaS integration project', participants: 5, status: 'active' },
    { id: '2', name: 'TechVentures - Secure Conference Room', description: 'Revenue sharing agreement', participants: 3, status: 'active' },
    { id: '3', name: 'Beta Testing - Secure Conference Room', description: 'Early access program', participants: 12, status: 'pending' }
  ]);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [newRoomName, setNewRoomName] = useState<string>('');
  const [newRoomDesc, setNewRoomDesc] = useState<string>('');
  const [newRoomEmail, setNewRoomEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');

  // Code entry / verification states
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [showCodeModal, setShowCodeModal] = useState<boolean>(false);
  const [accessCodeInput, setAccessCodeInput] = useState<string>('');
  const [accessCodeError, setAccessCodeError] = useState<string>('');
  const [verifyingCode, setVerifyingCode] = useState<boolean>(false);
  const [verifiedRoomDetails, setVerifiedRoomDetails] = useState<VerifyResponse['conferenceRoom'] | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setArr(prev => prev + Math.floor(Math.random() * 1000 + 100));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Email validation (simple but practical)
  function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.trim().toLowerCase());
  }

  // Create conference room via backend which generates & emails the code
  const createConferenceRoom = async (): Promise<void> => {
    setSuccessMessage('');
    setEmailError('');

    if (!newRoomName.trim()) {
      setEmailError('Please enter a room name.');
      return;
    }

    if (!newRoomEmail.trim()) {
      setEmailError('Please enter an email address.');
      return;
    }

    if (!validateEmail(newRoomEmail)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setCreateLoading(true);

    try {
      const payload = {
        companyName: newRoomName.trim(),
        companyEmail: newRoomEmail.trim(),
        cfoEmail: newRoomEmail.trim(),
        cfoName: '',
        notes: newRoomDesc.trim()
      };

      const res = await fetch('/api/dealroom/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok || data?.error) {
        const errMsg = data?.error || data?.details || 'Failed to create conference room. Please try again.';
        setEmailError(errMsg);
        return;
      }

      const returned = data.conferenceRoom;

      const addedRoom: ConferenceRoom = {
        id: returned?.id || Date.now().toString(),
        name: returned?.companyName || newRoomName.trim(),
        description: newRoomDesc.trim(),
        participants: 1,
        status: returned?.status || 'active',
        cfoEmail: returned?.cfoEmail,
        expiresAt: returned?.expiresAt,
        accessCodeSent: returned?.accessCodeSent
      };

      setConferenceRooms(prev => [addedRoom, ...prev]);

      // Clear form
      setNewRoomName('');
      setNewRoomDesc('');
      setNewRoomEmail('');
      setShowCreateModal(false);

      // Open code entry modal for new room so user can enter code they received
      setSelectedRoomId(addedRoom.id);
      setShowCodeModal(true);

      setSuccessMessage(`Secure conference room created. An 8-character access code was sent to ${addedRoom.cfoEmail}. Please check your inbox (and spam folder). Enter the code to access the room.`);
    } catch (error) {
      console.error('Create room error:', error);
      setEmailError('Failed to create conference room. Please try again later.');
    } finally {
      setCreateLoading(false);
    }
  };

  // When user clicks "Join Room", open the code modal for that room
  const onJoinRoomClick = (roomId: string) => {
    setSelectedRoomId(roomId);
    setAccessCodeInput('');
    setAccessCodeError('');
    setVerifiedRoomDetails(null);
    setShowCodeModal(true);
  };

  // Verify access code against backend
  const verifyAccessCode = async (): Promise<void> => {
    setAccessCodeError('');
    setVerifiedRoomDetails(null);

    if (!selectedRoomId) {
      setAccessCodeError('No conference room selected.');
      return;
    }

    const code = accessCodeInput.trim();

    if (code.length !== 8) {
      setAccessCodeError('Access code must be 8 characters.');
      return;
    }

    setVerifyingCode(true);

    try {
      const payload = {
        conferenceRoomId: selectedRoomId,
        accessCode: code
      };

      const res = await fetch('/api/dealroom/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data: VerifyResponse = await res.json();

      if (!res.ok || data?.error) {
        // Show the error message returned from backend if available
        const msg = data?.error || 'Invalid or expired code. Please check and try again.';
        setAccessCodeError(msg);
        return;
      }

      if (data.success && data.conferenceRoom) {
        // Access granted: show room details and close modal
        setVerifiedRoomDetails(data.conferenceRoom);
        setShowCodeModal(false);
        setAccessCodeInput('');
        setSelectedRoomId(null);
        // Optional: mark room in UI as active / accessed
        setConferenceRooms(prev => prev.map(r => r.id === data.conferenceRoom!.id ? ({ ...r, status: data.conferenceRoom!.status as ConferenceRoom['status'] }) : r));
      } else {
        setAccessCodeError('Invalid or expired code. Please check and try again.');
      }
    } catch (error) {
      console.error('Verify code error:', error);
      setAccessCodeError('Failed to verify access code. Please try again later.');
    } finally {
      setVerifyingCode(false);
    }
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
              <button
                onClick={() => setActiveSection('home')}
                className={`px-4 py-2 rounded-lg transition ${activeSection === 'home' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-slate-800'}`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveSection('conferencerooms')}
                className={`px-4 py-2 rounded-lg transition ${activeSection === 'conferencerooms' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-slate-800'}`}
              >
                Conference Rooms
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* ... the rest of the home content remains unchanged ... */}
        {activeSection === 'conferencerooms' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* How to Access Instructions */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-500/50 rounded-2xl p-8 mb-12">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center"><span className="mr-3">🔐</span> How to Access Your Secure Conference Room</h3>
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
                <p className="text-sm text-gray-300"><strong className="text-blue-400">📌 Note:</strong> Each conference room is named after your company (e.g., "Acme Corp - Secure Conference Room") for easy identification.</p>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bold text-white">Your Conference Rooms</h2>
              <button onClick={() => setShowCreateModal(true)} className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold">
                Create New Conference Room
              </button>
            </div>

            {/* Success message area */}
            {successMessage && (
              <div className="mb-6 bg-green-700/20 border border-green-500/30 rounded-lg p-4 text-green-200">
                {successMessage}
              </div>
            )}

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
                    <button onClick={() => onJoinRoomClick(room.id)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">Join Room</button>
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
                  <input
                    type="email"
                    placeholder="Your email (we'll send the access code here)"
                    value={newRoomEmail}
                    onChange={(e) => {
                      setNewRoomEmail(e.target.value);
                      if (emailError) setEmailError('');
                    }}
                    className={`w-full bg-slate-700 border ${emailError ? 'border-red-400' : 'border-blue-500/30'} rounded-lg px-4 py-3 text-white mb-4 focus:outline-none focus:border-blue-500`}
                  />
                  {emailError && <div className="text-red-400 text-sm mb-3">{emailError}</div>}
                  <textarea
                    placeholder="Description"
                    value={newRoomDesc}
                    onChange={(e) => setNewRoomDesc(e.target.value)}
                    className="w-full bg-slate-700 border border-blue-500/30 rounded-lg px-4 py-3 text-white mb-6 h-24 focus:outline-none focus:border-blue-500"
                  />
                  <div className="flex space-x-4">
                    <button onClick={() => { setShowCreateModal(false); setEmailError(''); }} className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg font-medium transition">Cancel</button>
                    <button
                      onClick={createConferenceRoom}
                      disabled={createLoading}
                      className={`flex-1 ${createLoading ? 'opacity-70 cursor-wait' : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'} text-white px-4 py-3 rounded-lg font-medium transition`}
                    >
                      {createLoading ? 'Creating...' : 'Create'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Code Entry Modal */}
            {showCodeModal && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-60">
                <div className="bg-slate-800 border border-blue-500/30 rounded-xl p-8 max-w-md w-full mx-4">
                  <h3 className="text-2xl font-bold text-white mb-4">Enter Access Code</h3>
                  <p className="text-sm text-gray-300 mb-4">Please enter the 8-character access code sent to your email to access this conference room.</p>
                  <input
                    type="text"
                    placeholder="8-character access code (e.g. ABCD1234)"
                    value={accessCodeInput}
                    onChange={(e) => {
                      setAccessCodeInput(e.target.value.toUpperCase());
                      if (accessCodeError) setAccessCodeError('');
                    }}
                    maxLength={8}
                    className={`w-full bg-slate-700 border ${accessCodeError ? 'border-red-400' : 'border-blue-500/30'} rounded-lg px-4 py-3 text-white mb-3 focus:outline-none focus:border-blue-500`}
                  />
                  {accessCodeError && <div className="text-red-400 text-sm mb-3">{accessCodeError}</div>}
                  <div className="flex space-x-4">
                    <button onClick={() => { setShowCodeModal(false); setAccessCodeError(''); setAccessCodeInput(''); setSelectedRoomId(null); }} className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg font-medium transition">Cancel</button>
                    <button
                      onClick={verifyAccessCode}
                      disabled={verifyingCode}
                      className={`flex-1 ${verifyingCode ? 'opacity-70 cursor-wait' : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'} text-white px-4 py-3 rounded-lg font-medium transition`}
                    >
                      {verifyingCode ? 'Verifying...' : 'Enter Code'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Verified Room Details (shown after successful code entry) */}
            {verifiedRoomDetails && (
              <div className="mt-6 bg-slate-800/40 border border-green-500/30 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Access Granted</h3>
                <p className="text-gray-300 mb-2">{verifiedRoomDetails.message}</p>
                <div className="text-sm text-gray-300">
                  <p><strong>Room ID:</strong> {verifiedRoomDetails.id}</p>
                  <p><strong>Company:</strong> {verifiedRoomDetails.companyName}</p>
                  <p><strong>Status:</strong> {verifiedRoomDetails.status}</p>
                  {verifiedRoomDetails.expiresAt && <p><strong>Expires:</strong> {new Date(verifiedRoomDetails.expiresAt).toLocaleString()}</p>}
                  {verifiedRoomDetails.cfoName && <p><strong>Contact:</strong> {verifiedRoomDetails.cfoName}</p>}
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
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Digicon AI Systems™</h3>
              <p className="text-gray-400 text-sm mb-4">Enterprise-grade AI solutions with uncompromising security and privacy. Your data is never shared with third parties.</p>
              <div className="flex space-x-4">
                <a href="mailto:contact@digicon-ai-systems.com" className="text-blue-400 hover:text-blue-300 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/terms" className="text-gray-400 hover:text-white transition text-sm">Terms of Service</a></li>
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition text-sm">Privacy Policy</a></li>
                <li><a href="/gdpr" className="text-gray-400 hover:text-white transition text-sm">GDPR Compliance</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Security & Privacy</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start"><span className="text-green-400 mr-2">✓</span><span>SOC 2 Type II Certified</span></li>
                <li className="flex items-start"><span className="text-green-400 mr-2">✓</span><span>GDPR Compliant</span></li>
                <li className="flex items-start"><span className="text-green-400 mr-2">✓</span><span>AES-256-GCM Encryption</span></li>
                <li className="flex items-start"><span className="text-green-400 mr-2">✓</span><span>Zero Third-Party Data Sharing</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-500/20 pt-8">
            <p className="text-center text-gray-400 text-sm">© 2025 Digicon AI Systems™. All rights reserved. | Built with Next.js + Supabase + Together AI</p>
          </div>
        </div>
      </footer>

      {/* AI Chatbot Widget - Persistent across all pages */}
      <ChatbotWidget />
    </div>
  );
}

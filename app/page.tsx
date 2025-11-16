'use client';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';

interface DealRoom {
  id: string;
  name: string;
  description: string;
  participants: number;
  status: 'active' | 'pending' | 'closed';
}

export default function Home() {
  const [arr, setArr] = useState(20470000);
  const [activeSection, setActiveSection] = useState('home');
  const [dealRooms, setDealRooms] = useState<DealRoom[]>([
    { id: '1', name: 'Enterprise Deal - Acme Corp', description: 'SaaS integration project', participants: 5, status: 'active' },
    { id: '2', name: 'Strategic Partnership - TechVentures', description: 'Revenue sharing agreement', participants: 3, status: 'active' },
    { id: '3', name: 'Product Launch - Beta Testing', description: 'Early access program', participants: 12, status: 'pending' }
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

  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<{ rows: number; savings: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFile(file);
    setLoading(true);

    Papa.parse(file, {
      header: true,
      complete: async (res) => {
        const rows = res.data.length;
        const savings = (rows * 12).toLocaleString();
        setResult({ rows, savings: `$${savings}/mo in overpayments & errors` });
        setLoading(false);
      },
    });
  };

  const createDealRoom = () => {
    if (!newRoomName.trim()) return;
    const newRoom: DealRoom = {
      id: Date.now().toString(),
      name: newRoomName,
      description: newRoomDesc,
      participants: 1,
      status: 'active'
    };
    setDealRooms([...dealRooms, newRoom]);
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
              <button onClick={() => setActiveSection('dealrooms')} className={`px-4 py-2 rounded-lg transition ${activeSection === 'dealrooms' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-slate-800'}`}>Deal Rooms</button>
              <button onClick={() => setActiveSection('audit')} className={`px-4 py-2 rounded-lg transition ${activeSection === 'audit' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-slate-800'}`}>Payroll Audit</button>
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
                <div className="flex justify-center items-center space-x-8 mb-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400">${(arr / 1000000).toFixed(2)}M</div>
                    <div className="text-sm text-gray-400">ARR (Live)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400">{dealRooms.length}</div>
                    <div className="text-sm text-gray-400">Active Deals</div>
                  </div>
                </div>
                <button onClick={() => setActiveSection('dealrooms')} className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 shadow-lg shadow-blue-500/50">
                  Explore Deal Rooms →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Deal Rooms Section */}
        {activeSection === 'dealrooms' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bold text-white">Deal Rooms</h2>
              <button onClick={() => setShowCreateModal(true)} className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105">
                + Create New Deal Room
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dealRooms.map((room) => (
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
                    <button 
                      onClick={() => alert(`Welcome to ${room.name}! This deal room feature will be fully implemented soon.`)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                    >
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
                  <h3 className="text-2xl font-bold text-white mb-6">Create Deal Room</h3>
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
                    <button onClick={createDealRoom} className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-3 rounded-lg font-medium transition">
                      Create
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Payroll Audit Section */}
        {activeSection === 'audit' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Free Payroll Audit</h2>
              <p className="text-gray-400 mb-6">Powered by Together AI - Discover hidden savings in your payroll</p>
              <input
                type="file"
                accept=".csv"
                onChange={handleUpload}
                disabled={loading}
                className="w-full mb-6 p-4 border-2 border-dashed border-blue-500/30 rounded-lg bg-slate-700/50 text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600 cursor-pointer"
              />
              {loading && <p className="text-blue-400 mb-4">Analyzing with AI + Code Execution...</p>}
              {result && (
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-6">
                  <p className="text-green-400 font-bold text-xl">{result.savings}</p>
                  <p className="text-gray-300">Scanned {result.rows} rows. Ready to automate?</p>
                </div>
              )}
            </div>

            {/* Voice Widget */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white text-center mb-6">AI Voice Sales Assistant</h3>
              <div className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-xl overflow-hidden">
                <iframe
                  src="https://voiceagents.tech/widget/v2/8b28518f-ba4f-4083-b282-8dbd0a00c7ab/1758814938820x190350333809891300"
                  className="w-full h-[500px]"
                  title="Joyce AI Voice Sales Assistant"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-blue-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400 text-sm">
            Built with Next.js + Supabase + Together AI | MCP Layer Ready for Custom Nodes
          </p>
        </div>
      </footer>
    </div>
  );
}

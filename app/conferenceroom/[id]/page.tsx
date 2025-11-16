'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: Date;
}

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  uploadedAt: Date;
  type: string;
}

export default function ConferenceRoomPortal() {
  const params = useParams();
  const roomId = params.id as string;
  
  const [companyName, setCompanyName] = useState('');
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState('');

  useEffect(() => {
    // In production, verify access and load room data
    // For now, use mock data
    setCompanyName('Acme Corp');
    setLoading(false);
  }, [roomId]);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles || selectedFiles.length === 0) return;

    setUploading(true);
    setUploadError('');
    setUploadSuccess('');

    try {
      const formData = new FormData();
      Array.from(selectedFiles).forEach((file) => {
        formData.append('files', file);
      });
      formData.append('conferenceRoomId', roomId);

      const response = await fetch('/api/dealroom/upload', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      // Add uploaded files to list
      const newFiles: UploadedFile[] = Array.from(selectedFiles).map((file) => ({
        id: Date.now().toString() + Math.random(),
        name: file.name,
        size: file.size,
        uploadedAt: new Date(),
        type: file.type
      }));
      
      setFiles([...files, ...newFiles]);
      setUploadSuccess(`Successfully uploaded ${selectedFiles.length} file(s)`);
      
      // Clear success message after 3 seconds
      setTimeout(() => setUploadSuccess(''), 3000);
      
      // Reset file input
      event.target.value = '';
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      sender: 'You',
      text: newMessage,
      timestamp: new Date()
    };

    setMessages([...messages, message]);
    setNewMessage('');

    // In production, send via WebSocket or API
    // For now, simulate system response
    setTimeout(() => {
      const systemMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'System',
        text: 'Message received. A Digicon team member will respond shortly.',
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, systemMessage]);
    }, 1000);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  const getFileIcon = (type: string): string => {
    if (type.includes('pdf')) return '📄';
    if (type.includes('excel') || type.includes('spreadsheet')) return '📊';
    if (type.includes('word') || type.includes('document')) return '📝';
    if (type.includes('image')) return '🖼️';
    if (type.includes('csv')) return '📈';
    return '📎';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-blue-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Digicon AI Systems™
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">🔒 Secure Conference Room</span>
              <a href="/" className="text-gray-400 hover:text-white transition">
                Exit
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Header */}
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-2">
              You're in {companyName} - Secure Conference Room
            </h2>
            <p className="text-gray-300">
              Upload your sensitive documents and collaborate securely with our team
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* File Upload Section */}
            <div className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2">📁</span> File Upload
              </h3>
              <p className="text-gray-300 mb-6">
                Upload PDF, Excel, CSV, Word, or Image files. All files are encrypted with AES-256-GCM.
              </p>

              {uploadError && (
                <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-4">
                  {uploadError}
                </div>
              )}

              {uploadSuccess && (
                <div className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg mb-4">
                  {uploadSuccess}
                </div>
              )}

              <div className="mb-6">
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-blue-500/30 border-dashed rounded-lg cursor-pointer bg-slate-700/30 hover:bg-slate-700/50 transition">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-12 h-12 mb-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="mb-2 text-sm text-gray-300">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-400">PDF, Excel, CSV, Word, Images (up to 50MB each)</p>
                  </div>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".pdf,.xlsx,.xls,.csv,.doc,.docx,.png,.jpg,.jpeg,.gif"
                    disabled={uploading}
                  />
                </label>
              </div>

              {uploading && (
                <div className="text-center text-blue-400 mb-4">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-400 border-t-transparent"></div>
                  <p className="mt-2">Uploading files...</p>
                </div>
              )}

              {/* Uploaded Files List */}
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-white mb-2">Uploaded Files ({files.length})</h4>
                {files.length === 0 ? (
                  <p className="text-gray-400 text-sm">No files uploaded yet</p>
                ) : (
                  files.map((file) => (
                    <div key={file.id} className="bg-slate-700/50 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{getFileIcon(file.type)}</span>
                        <div>
                          <p className="text-white font-medium">{file.name}</p>
                          <p className="text-gray-400 text-xs">
                            {formatFileSize(file.size)} • {file.uploadedAt.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Chat/Collaboration Section */}
            <div className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-xl p-6 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2">💬</span> Chat & Collaboration
              </h3>
              <p className="text-gray-300 mb-4">
                Communicate with our team in real-time
              </p>

              {/* Messages */}
              <div className="flex-1 bg-slate-900/50 rounded-lg p-4 mb-4 min-h-[300px] max-h-[400px] overflow-y-auto space-y-3">
                {messages.length === 0 ? (
                  <p className="text-gray-400 text-center mt-8">No messages yet. Start a conversation!</p>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-3 rounded-lg ${
                        message.sender === 'You'
                          ? 'bg-blue-500/20 ml-8'
                          : 'bg-slate-700/50 mr-8'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold text-white">{message.sender}</span>
                        <span className="text-xs text-gray-400">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-gray-200">{message.text}</p>
                    </div>
                  ))
                )}
              </div>

              {/* Message Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      sendMessage();
                    }
                  }}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-700 border border-blue-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition"
                >
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-6">
            <h4 className="text-xl font-bold text-white mb-3 flex items-center">
              <span className="mr-2">🔐</span> Security & Privacy
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div>
                <p className="font-semibold text-purple-400 mb-1">End-to-End Encryption</p>
                <p>All files encrypted with AES-256-GCM</p>
              </div>
              <div>
                <p className="font-semibold text-blue-400 mb-1">SOC 2 Type II Compliant</p>
                <p>Enterprise-grade security standards</p>
              </div>
              <div>
                <p className="font-semibold text-green-400 mb-1">Auto-Expiration</p>
                <p>Room expires in 90 days for security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

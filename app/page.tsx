// Build fix: Ensure API route is available - v1.2
'use client';
import { useState } from 'react';
import ChatbotWidget from './components/ChatbotWidget';

export default function Home() {
  const [showAuditForm, setShowAuditForm] = useState(false);
    const [formData, setFormData] = useState({ companyName: '', contactName: '', email: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');
    const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          if (!formData.companyName || !formData.contactName || !formData.email) {
                  setError('Please fill in all fields');
                  return;
                }
          setIsLoading(true);
          setError('');
          try {
                  const response = await fetch('/api/audit/request', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(formData),
                          });
                  if (!response.ok) throw new Error('Submission failed');
                  setIsSuccess(true);
                  setFormData({ companyName: '', contactName: '', email: '' });
                } catch (err) {
                  setError('Failed to submit. Please try again.');
                } finally {
                  setIsLoading(false);
                }
        };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-orange-500">{"Digicon AI Systems"}</h1>
            <button 
              onClick={() => setShowAuditForm(true)} 
              className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded-lg font-semibold transition"
            >
              {"Get Audit"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-extrabold mb-6">
            {"AI-Powered "}<span className="text-orange-500">{"Payroll Audit"}</span>
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
            {"Uncover hidden savings in minutes. Our AI finds overpayments, errors, and compliance risks in your payroll data."}
          </p>

          {/* Black Friday Pricing Card */}
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500 rounded-3xl p-12 max-w-4xl mx-auto mb-16">
            <div className="inline-block bg-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
              {"🔥 BLACK FRIDAY SPECIAL"}
            </div>
            <h3 className="text-5xl font-extrabold mb-4">{"Payroll Audit (One Quarter)"}</h3>
            <div className="mb-8">
              <p className="text-2xl text-gray-500 line-through mb-2">{"Regular: $2,400"}</p>
              <p className="text-6xl font-bold text-orange-500">{"Only $249"}</p>
              <p className="text-xl text-green-400 mt-2">{"Save $2,151 (89% OFF)"}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-black/50 border border-orange-500/30 rounded-xl p-6">
                <p className="text-5xl font-bold text-orange-500">{"15-35%"}</p>
                <p className="text-gray-400 mt-2">{"Average Savings"}</p>
              </div>
              <div className="bg-black/50 border border-orange-500/30 rounded-xl p-6">
                <p className="text-5xl font-bold text-orange-500">{"9 sec"}</p>
                <p className="text-gray-400 mt-2">{"Analysis Time"}</p>
              </div>
              <div className="bg-black/50 border border-orange-500/30 rounded-xl p-6">
                <p className="text-5xl font-bold text-orange-500">{"100%"}</p>
                <p className="text-gray-400 mt-2">{"Secure & Private"}</p>
              </div>
            </div>

            <button 
              onClick={() => setShowAuditForm(true)}
              className="bg-orange-500 hover:bg-orange-600 text-black px-16 py-5 rounded-xl text-2xl font-bold transition-all hover:scale-105"
            >
              {"Claim Your $249 Audit →"}
            </button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-bold mb-6">{"What We Analyze"}</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">{"✓"}</span>
                  {"Overpayments & duplicates"}
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">{"✓"}</span>
                  {"Payroll calculation errors"}
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">{"✓"}</span>
                  {"Tax withholding issues"}
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">{"✓"}</span>
                  {"Compliance risks"}
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-bold mb-6">{"Enterprise Security"}</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">{"🔒"}</span>
                  {"AES-256-GCM encryption"}
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">{"🔑"}</span>
                  {"Single-use access codes"}
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">{"⏰"}</span>
                  {"90-day auto-expiration"}
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">{"📊"}</span>
                  {"SOC 2 Type II compliant"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Form Modal */}
      {showAuditForm && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6">
           {!isSuccess ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          
          <div className="bg-gray-900 border-2 border-orange-500 rounded-2xl p-10 max-w-md w-full">
            <h3 className="text-3xl font-bold mb-6 text-center">{"Request Your Audit"}</h3>
            <p className="text-gray-400 mb-8 text-center">{"We'll contact you in 24 hours"}</p>
            <div className="space-y-4">
              <input type="text" placeholder="Company Name" className="w-full bg-black border border-gray-700 rounded-lg px-6 py-4 focus:border-orange-500 focus:outline-none"/>
              <input type="text" placeholder="Your Name" className="w-full bg-black border border-gray-700 rounded-lg px-6 py-4 focus:border-orange-500 focus:outline-none"/>
              <input type="email" placeholder="Email Address" className="w-full bg-black border border-gray-700 rounded-lg px-6 py-4 focus:border-orange-500 focus:outline-none"/>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-black py-4 rounded-lg font-bold text-lg transition">{"Submit Request"}</button>
              <button onClick={() => setShowAuditForm(false)} className="w-full text-gray-400 hover:text-white transition">{"Cancel"}</button>
                            </form>
                        ) : (
                          <div className="text-center space-y-4">
                                            <h3 className="text-2xl font-bold mb-4">Success!</h3>
                                            <p className="text-gray-300 mb-6">Thank you for your request. We're sending a secure private portal link to your email. You'll use this link to upload your documents and receive your personalized audit report. We'll contact you in 24 hours.</p>
                                            <button onClick={() => { setIsSuccess(false); setShowAuditForm(false); }} className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-3 rounded-lg font-semibold transition">Close</button>
                                          </div>
                        )}
            
            </div>
          </div>
        </div>
      )}

          
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
              <h3 className="text-xl font-bold">Tax Withholding Issues</h3>
            </div>
            <p className="text-gray-400">Verify federal, state, and local tax compliance and identify withholding discrepancies</p>
          </div>

          {/* Audit 4 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:border-orange-500 transition">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold">Benefits Compliance</h3>
            </div>
            <p className="text-gray-400">Ensure proper handling of benefits deductions, 401k contributions, and insurance premiums</p>
          </div>

          {/* Audit 5 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:border-orange-500 transition">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="text-xl font-bold">Timecard & Attendance</h3>
            </div>
            <p className="text-gray-400">Validate hour tracking, overtime calculations, and paid time off (PTO) accuracy</p>
          </div>

          {/* Audit 6 */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:border-orange-500 transition">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">6</span>
              </div>
              <h3 className="text-xl font-bold">Regulatory Compliance</h3>
            </div>
            <p className="text-gray-400">Ensure adherence to DOL, IRS, and state labor laws, including wage and hour regulations</p>
          </div>
        </div>
      </div>
    </div>
      {/* Footer */}
<footer className="border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500">© 2025 Digicon AI Systems. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-gray-400 hover:text-orange-500 transition">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-orange-500 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
      <ChatbotWidget />
    </div>
  );
}

'use client';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (sessionId) {
      // In a production app, verify the session with Stripe here
      setIsVerified(true);
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-blue-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Digicon AI Systems™
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/20 border-4 border-green-500">
              <svg
                className="w-12 h-12 text-green-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Welcome to Digicon AI Systems!
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Your automation systems are being set up. We'll have you up and running in no time.
          </p>

          {/* Session ID Display */}
          {sessionId && (
            <div className="mb-12 bg-slate-800/50 border border-blue-500/30 rounded-xl p-6">
              <div className="text-sm text-gray-400 mb-2">Order Confirmation</div>
              <div className="text-xs text-gray-500 font-mono break-all">{sessionId}</div>
            </div>
          )}

          {/* Next Steps */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6">
                <div className="text-4xl mb-4">1️⃣</div>
                <h3 className="text-xl font-bold text-white mb-2">Email Confirmation</h3>
                <p className="text-gray-400">
                  You'll receive a detailed confirmation email with your order summary and next steps.
                </p>
              </div>
              <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6">
                <div className="text-4xl mb-4">2️⃣</div>
                <h3 className="text-xl font-bold text-white mb-2">Onboarding Call</h3>
                <p className="text-gray-400">
                  Our team will reach out within 24 hours to schedule your onboarding session.
                </p>
              </div>
              <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6">
                <div className="text-4xl mb-4">3️⃣</div>
                <h3 className="text-xl font-bold text-white mb-2">System Setup</h3>
                <p className="text-gray-400">
                  We'll configure your systems and have them operational within 2-5 business days.
                </p>
              </div>
            </div>
          </div>

          {/* What You Get */}
          <div className="mb-12 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-lg border-2 border-blue-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="text-green-400 text-xl">✓</div>
                <div>
                  <div className="text-white font-semibold">Complete System Integration</div>
                  <div className="text-sm text-gray-400">
                    Full implementation of your selected automation systems
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-400 text-xl">✓</div>
                <div>
                  <div className="text-white font-semibold">Hybrid LLM Infrastructure</div>
                  <div className="text-sm text-gray-400">
                    Claude Sonnet 4 + Llama 4 Maverick with DeepSeek-V3 fallback
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-400 text-xl">✓</div>
                <div>
                  <div className="text-white font-semibold">24/7 Priority Support</div>
                  <div className="text-sm text-gray-400">
                    Dedicated support team available around the clock
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-400 text-xl">✓</div>
                <div>
                  <div className="text-white font-semibold">Monthly Performance Reports</div>
                  <div className="text-sm text-gray-400">
                    Detailed KPI tracking and ROI analysis
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-400 text-xl">✓</div>
                <div>
                  <div className="text-white font-semibold">Training & Documentation</div>
                  <div className="text-sm text-gray-400">
                    Comprehensive training for your team
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-green-400 text-xl">✓</div>
                <div>
                  <div className="text-white font-semibold">Secure Conference Rooms</div>
                  <div className="text-sm text-gray-400">
                    Military-grade encryption for all sensitive data
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Support Information */}
          <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:support@digicon-ai-systems.com" className="text-blue-400 hover:text-blue-300">
                  support@digicon-ai-systems.com
                </a>
              </div>
              <div>
                <span className="font-semibold">Phone:</span>{' '}
                <a href="tel:+1-800-DIGICON" className="text-blue-400 hover:text-blue-300">
                  +1 (800) DIGICON
                </a>
              </div>
              <div className="text-sm text-gray-400 mt-4">
                Our support team typically responds within 2 hours during business hours.
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-bold transition-all duration-200 hover:scale-[1.02]"
            >
              Return to Home
            </a>
            <a
              href="mailto:support@digicon-ai-systems.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border-2 border-slate-700 rounded-lg font-bold transition-all duration-200"
            >
              Contact Support
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>AES-256 Encryption</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✓</span>
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Digicon AI Systems™. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}

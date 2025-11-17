'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type SystemType = 'payroll' | 'hris' | 'erp' | 'crm' | 'compliance' | 'ai_infrastructure';
type CompanySize = 'small' | 'midmarket' | 'enterprise';

interface SystemInfo {
  id: SystemType;
  name: string;
  description: string;
  setupPrice: number;
  icon: string;
  color: string;
}

const SYSTEMS: SystemInfo[] = [
  {
    id: 'payroll',
    name: 'Payroll Processing',
    description: '15-20% overpayment reduction',
    setupPrice: 7500,
    icon: '💰',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'hris',
    name: 'HRIS/HCM',
    description: '97% faster audit cycle',
    setupPrice: 6500,
    icon: '👥',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'erp',
    name: 'ERP/Finance',
    description: '30% AI cost reduction',
    setupPrice: 8500,
    icon: '📊',
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 'crm',
    name: 'CRM Lead-to-Close',
    description: '30% hallucination drop',
    setupPrice: 5500,
    icon: '🎯',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    id: 'compliance',
    name: 'Compliance & Audit',
    description: '<1% error rate',
    setupPrice: 9500,
    icon: '🔒',
    color: 'from-red-500 to-rose-600',
  },
  {
    id: 'ai_infrastructure',
    name: 'AI Infrastructure',
    description: '95% cost reduction',
    setupPrice: 10000,
    icon: '🤖',
    color: 'from-indigo-500 to-violet-600',
  },
];

const MONTHLY_PRICING: Record<CompanySize, { price: number; label: string; range: string }> = {
  small: { price: 500, label: 'Small Business', range: '0-50 employees' },
  midmarket: { price: 1200, label: 'Mid-Market', range: '51-500 employees' },
  enterprise: { price: 2500, label: 'Enterprise', range: '500+ employees' },
};

const BUNDLE_DISCOUNTS: Record<number, number> = {
  1: 0,
  2: 0.1,
  3: 0.2,
  4: 0.2,
  5: 0.3,
  6: 0.3,
};

export default function PricingPage() {
  const [selectedSystems, setSelectedSystems] = useState<Set<SystemType>>(new Set());
  const [companySize, setCompanySize] = useState<CompanySize>('small');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const toggleSystem = (systemId: SystemType) => {
    const newSelected = new Set(selectedSystems);
    if (newSelected.has(systemId)) {
      newSelected.delete(systemId);
    } else {
      newSelected.add(systemId);
    }
    setSelectedSystems(newSelected);
  };

  // Calculate pricing
  const selectedCount = selectedSystems.size;
  const discount = BUNDLE_DISCOUNTS[selectedCount] || 0;
  const setupTotal = Array.from(selectedSystems).reduce(
    (sum, id) => sum + (SYSTEMS.find((s) => s.id === id)?.setupPrice || 0),
    0
  );
  const discountedSetup = setupTotal * (1 - discount);
  const savingsAmount = setupTotal - discountedSetup;
  const monthlyPerSystem = MONTHLY_PRICING[companySize].price;
  const monthlyTotal = selectedCount * monthlyPerSystem;
  const annualRecurring = monthlyTotal * 12;
  const firstYearTotal = discountedSetup + annualRecurring;

  const handleCheckout = async () => {
    if (selectedSystems.size === 0) {
      setError('Please select at least one system');
      return;
    }

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/checkout/automation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systems: Array.from(selectedSystems),
          companySize,
          email,
        }),
      });

      const data = await response.json();

      if (data.success && data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Failed to create checkout session');
      }
    } catch (err: any) {
      setError('Network error. Please try again.');
      console.error('Checkout error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-blue-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Digicon AI Systems™
            </a>
            <div className="flex space-x-4">
              <a href="/" className="px-4 py-2 text-gray-300 hover:bg-slate-800 rounded-lg transition">
                Home
              </a>
              <a href="/pricing" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Pricing
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Choose Your Automation Systems
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the systems you want to automate. The more you choose, the more you save with our bundle discounts.
            </p>
            <div className="mt-6 inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/50 rounded-full px-6 py-3">
              <span className="text-2xl">🎉</span>
              <span className="text-green-400 font-bold">Used by Fortune 500 CTOs</span>
            </div>
          </div>

          {/* System Selector Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {SYSTEMS.map((system) => {
              const isSelected = selectedSystems.has(system.id);
              return (
                <motion.div
                  key={system.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleSystem(system.id)}
                  className={`relative cursor-pointer rounded-2xl p-6 border-2 transition-all ${
                    isSelected
                      ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20'
                      : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                  }`}
                >
                  {/* Checkbox */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                        isSelected
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-slate-600 bg-slate-700'
                      }`}
                    >
                      {isSelected && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4">{system.icon}</div>

                  {/* System Name */}
                  <h3 className="text-xl font-bold text-white mb-2">{system.name}</h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4">{system.description}</p>

                  {/* Setup Price */}
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-white">
                      ${(system.setupPrice / 1000).toFixed(1)}K
                    </span>
                    <span className="text-sm text-gray-400">setup</span>
                  </div>

                  {/* LLM Badge */}
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <div className="text-xs text-gray-400">
                      {['payroll', 'compliance', 'ai_infrastructure'].includes(system.id) ? (
                        <span className="inline-flex items-center space-x-1">
                          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                          <span>Claude Sonnet 4 (High Accuracy)</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          <span>Llama 4 Maverick (High Volume)</span>
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Company Size Selector */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white text-center mb-6">Company Size</h2>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              {(Object.entries(MONTHLY_PRICING) as [CompanySize, typeof MONTHLY_PRICING[CompanySize]][]).map(
                ([size, info]) => (
                  <button
                    key={size}
                    onClick={() => setCompanySize(size)}
                    className={`flex-1 max-w-xs px-6 py-4 rounded-xl border-2 transition-all ${
                      companySize === size
                        ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20'
                        : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                    }`}
                  >
                    <div className="text-lg font-bold text-white mb-1">{info.label}</div>
                    <div className="text-sm text-gray-400 mb-2">{info.range}</div>
                    <div className="text-xl font-bold text-blue-400">
                      ${info.price}/mo
                      <span className="text-sm text-gray-400"> per system</span>
                    </div>
                  </button>
                )
              )}
            </div>
          </div>

          {/* Price Calculator */}
          <AnimatePresence>
            {selectedCount > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-lg border-2 border-blue-500/30 rounded-2xl p-8 shadow-2xl">
                  <h2 className="text-3xl font-bold text-white text-center mb-2">Your Investment</h2>

                  {/* Bundle Discount Badge */}
                  {discount > 0 && (
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/50 rounded-full px-6 py-2">
                        <span className="text-2xl">🎉</span>
                        <span className="text-green-400 font-bold text-lg">
                          {selectedCount} Systems Selected - Save {(discount * 100).toFixed(0)}%!
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Pricing Breakdown */}
                  <div className="space-y-4 mb-6">
                    {/* Setup Fees */}
                    <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                      <div>
                        <div className="text-white font-semibold">Setup Fees (One-Time)</div>
                        {discount > 0 && (
                          <div className="text-sm text-gray-400 line-through">
                            ${setupTotal.toLocaleString()}
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">
                          ${discountedSetup.toLocaleString()}
                        </div>
                        {discount > 0 && (
                          <div className="text-sm text-green-400 font-semibold">
                            Save ${savingsAmount.toLocaleString()}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Monthly Recurring */}
                    <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                      <div>
                        <div className="text-white font-semibold">Monthly Recurring</div>
                        <div className="text-sm text-gray-400">
                          {selectedCount} system{selectedCount > 1 ? 's' : ''} × $
                          {monthlyPerSystem.toLocaleString()}/mo
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-white">
                        ${monthlyTotal.toLocaleString()}/mo
                      </div>
                    </div>

                    {/* Annual Recurring */}
                    <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                      <div className="text-white font-semibold">Annual Recurring</div>
                      <div className="text-2xl font-bold text-white">
                        ${annualRecurring.toLocaleString()}/yr
                      </div>
                    </div>

                    {/* Total Year 1 */}
                    <div className="flex justify-between items-center pt-2">
                      <div className="text-xl font-bold text-white">Total Year 1</div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        ${firstYearTotal.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    disabled={isLoading || selectedCount === 0}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-slate-700 disabled:to-slate-700 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg transition-all duration-200 hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center space-x-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Processing...</span>
                      </span>
                    ) : (
                      'Get Started with Stripe →'
                    )}
                  </button>

                  {/* Trust Signals */}
                  <div className="mt-6 text-center text-sm text-gray-400">
                    <div className="flex items-center justify-center space-x-4">
                      <span>🔒 Secure Checkout</span>
                      <span>•</span>
                      <span>💳 Powered by Stripe</span>
                      <span>•</span>
                      <span>✅ Money-back Guarantee</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Empty State */}
          {selectedCount === 0 && (
            <div className="max-w-2xl mx-auto text-center py-12">
              <div className="text-6xl mb-4">👆</div>
              <h3 className="text-2xl font-bold text-white mb-2">Select Your Systems</h3>
              <p className="text-gray-400">
                Choose one or more automation systems above to see your personalized pricing
              </p>
            </div>
          )}

          {/* Features Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-400">
                9-second audit cycle vs 3-week manual process
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">AI-Powered</h3>
              <p className="text-sm text-gray-400">
                Hybrid LLM strategy: Claude Sonnet 4 + Llama 4 Maverick
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-white mb-2">Massive Savings</h3>
              <p className="text-sm text-gray-400">
                15-20% cost reduction across all systems
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-blue-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Digicon AI Systems™. All rights reserved. | SOC 2 Type II Certified
          </p>
        </div>
      </footer>
    </div>
  );
}

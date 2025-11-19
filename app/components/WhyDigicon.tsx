'use client';

export default function WhyDigicon() {
  const reasons = [
    {
      number: '1',
      title: 'Speed and Efficiency',
      description: 'Analysis completes in just 9 seconds, enabling rapid identification of payroll issues that could take traditional auditors hours or days to discover.'
    },
    {
      number: '2',
      title: 'Significant Financial Savings',
      description: 'Delivers 15-35% average savings to clients, making the audit ROI-positive immediately. One-quarter audit service available for only $249 (regularly $2,400).'
    },
    {
      number: '3',
      title: 'Comprehensive Audit Coverage',
      description: 'Detects four critical problem areas: overpayments & duplicates, payroll calculation errors, tax withholding issues, and compliance risks.'
    },
    {
      number: '4',
      title: 'AI-Powered Technology',
      description: 'Uses artificial intelligence to find errors that human auditors might miss, providing more thorough analysis at scale.'
    },
    {
      number: '5',
      title: 'Enterprise-Grade Security',
      description: 'Implements AES-256-GCM encryption (military-grade), single-use access codes, 90-day auto-expiration, and SOC 2 Type II compliance certification.'
    },
    {
      number: '6',
      title: 'Privacy & Data Protection',
      description: 'Guarantees 100% secure and private analysis with automatic data expiration after 90 days.'
    },
    {
      number: '7',
      title: 'Risk Mitigation',
      description: 'Reduces regulatory and compliance risks by identifying tax withholding issues and ensuring proper payroll reporting.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Why Choose <span className="text-orange-500">Digicon AI Systems</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Seven compelling reasons why companies choose Digicon for their payroll audit needs
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-orange-500 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">{reason.number}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">{reason.title}</h2>
                  <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-10 inline-block">
            <p className="text-xl font-semibold mb-4">Ready to discover your payroll savings?</p>
            <button className="bg-black hover:bg-gray-800 text-orange-500 px-10 py-3 rounded-lg font-bold transition">
              Start Your Audit Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

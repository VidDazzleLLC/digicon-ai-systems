'use client';

export default function GDPRCompliance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-blue-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Digicon AI Systems™
              </h1>
            </a>
            <a href="/" className="text-gray-300 hover:text-white transition px-4 py-2 rounded-lg hover:bg-slate-800">
              ← Back to Home
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/50 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">GDPR Compliance</h1>
            <p className="text-gray-400 mb-8">General Data Protection Regulation - Full Compliance Statement</p>

            <div className="space-y-8 text-gray-300">
              <section>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-6">
                  <h2 className="text-2xl font-bold text-white mb-3">🇪🇺 Full GDPR Compliance</h2>
                  <p className="mb-2">
                    Digicon AI Systems™ is fully compliant with the General Data Protection Regulation (EU) 2016/679. We respect and protect the data rights of all EU citizens and residents.
                  </p>
                  <p className="font-bold text-green-400">
                    Your data is NEVER shared with third parties and is protected with enterprise-grade security.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Lawful Basis for Processing</h2>
                <p className="mb-4">We process personal data under the following lawful bases:</p>
                <div className="space-y-3">
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-bold text-white mb-2">✓ Consent</h4>
                    <p className="text-sm">When you create a Conference Room or submit information, you provide explicit consent for us to process your data to deliver our services.</p>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-bold text-white mb-2">✓ Contract Performance</h4>
                    <p className="text-sm">Processing necessary to provide the services you've requested (payroll audits, secure file sharing, etc.).</p>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-bold text-white mb-2">✓ Legitimate Interests</h4>
                    <p className="text-sm">Security monitoring, fraud prevention, and service improvement, balanced against your rights and freedoms.</p>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-bold text-white mb-2">✓ Legal Obligation</h4>
                    <p className="text-sm">Compliance with applicable laws, such as tax regulations and data breach notification requirements.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Your GDPR Rights</h2>
                <p className="mb-4">Under GDPR, you have the following rights regarding your personal data:</p>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-bold text-white">Right to Access (Article 15)</h4>
                    <p className="text-sm">Request a copy of all personal data we hold about you. We provide this free of charge within 30 days.</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-4">
                    <h4 className="font-bold text-white">Right to Rectification (Article 16)</h4>
                    <p className="text-sm">Request correction of inaccurate or incomplete personal data.</p>
                  </div>
                  <div className="border-l-4 border-red-400 pl-4">
                    <h4 className="font-bold text-white">Right to Erasure / "Right to be Forgotten" (Article 17)</h4>
                    <p className="text-sm">Request deletion of your personal data when there's no compelling reason for continued processing.</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h4 className="font-bold text-white">Right to Restriction of Processing (Article 18)</h4>
                    <p className="text-sm">Request that we limit how we use your data in certain circumstances.</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="font-bold text-white">Right to Data Portability (Article 20)</h4>
                    <p className="text-sm">Receive your data in a structured, machine-readable format and transmit it to another controller.</p>
                  </div>
                  <div className="border-l-4 border-cyan-400 pl-4">
                    <h4 className="font-bold text-white">Right to Object (Article 21)</h4>
                    <p className="text-sm">Object to processing based on legitimate interests or for direct marketing purposes.</p>
                  </div>
                  <div className="border-l-4 border-pink-400 pl-4">
                    <h4 className="font-bold text-white">Rights Related to Automated Decision-Making (Article 22)</h4>
                    <p className="text-sm">Not be subject to decisions based solely on automated processing, including profiling, which produces legal effects.</p>
                  </div>
                </div>
                <div className="mt-6 bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                  <p className="text-sm">
                    <strong>To exercise any of these rights:</strong> Email <a href="mailto:gdpr@digicon-ai-systems.com" className="text-blue-400 hover:underline">gdpr@digicon-ai-systems.com</a> with your request. We respond within 30 days.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Data Protection Measures</h2>
                <p className="mb-4">We implement technical and organizational measures to ensure GDPR compliance:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-bold text-white mb-2">🔐 Encryption</h4>
                    <p className="text-sm">AES-256-GCM for data at rest, TLS 1.3 for data in transit</p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-bold text-white mb-2">🔑 Access Controls</h4>
                    <p className="text-sm">Role-based access, MFA, single-use codes</p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-bold text-white mb-2">📊 Audit Logging</h4>
                    <p className="text-sm">Complete audit trail of all data access</p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-bold text-white mb-2">⏰ Data Minimization</h4>
                    <p className="text-sm">Collect only essential data, auto-delete after 90 days</p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-bold text-white mb-2">🛡️ Privacy by Design</h4>
                    <p className="text-sm">Privacy embedded in all system architecture</p>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-bold text-white mb-2">🔒 Data Pseudonymization</h4>
                    <p className="text-sm">Internal IDs used instead of direct identifiers</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. International Data Transfers</h2>
                <p className="mb-4">
                  When transferring data outside the EU/EEA, we ensure adequate safeguards:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                  <li>Transfers only to countries with adequacy decisions</li>
                  <li>Additional security measures for transfers to third countries</li>
                  <li>Regular assessment of data protection standards</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Breach Notification</h2>
                <p className="mb-4">
                  In the unlikely event of a data breach:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We notify the relevant supervisory authority within 72 hours</li>
                  <li>Affected individuals are notified without undue delay if high risk to rights and freedoms</li>
                  <li>We document all breaches and remediation actions</li>
                  <li>We conduct post-incident reviews to prevent future breaches</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Data Protection Officer (DPO)</h2>
                <div className="bg-blue-500/10 rounded-lg p-6 border border-blue-500/30">
                  <p className="mb-4">
                    While not legally required to appoint a DPO, we have designated a Data Protection Officer to ensure GDPR compliance:
                  </p>
                  <p className="font-semibold text-white">Data Protection Officer</p>
                  <p>Email: <a href="mailto:dpo@digicon-ai-systems.com" className="text-blue-400 hover:underline">dpo@digicon-ai-systems.com</a></p>
                  <p>Phone: (555) 123-4567</p>
                  <p className="mt-2 text-sm text-gray-400">Available Monday-Friday, 9 AM - 5 PM CET</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Processors</h2>
                <p className="mb-4">
                  We work with carefully selected third-party processors who are GDPR-compliant:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All processors have signed Data Processing Agreements (DPAs)</li>
                  <li>Regular audits of processor security and compliance</li>
                  <li>Processors are contractually bound to GDPR requirements</li>
                  <li>We ensure processors implement appropriate technical and organizational measures</li>
                </ul>
                <p className="mt-4 font-bold text-yellow-400">
                  Important: Your sensitive business data (payroll, financial documents) is encrypted on our servers and NEVER shared with any third-party processor.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Cookie Policy & Consent</h2>
                <p className="mb-4">
                  We use only essential cookies required for service functionality. No tracking or advertising cookies are used. You can manage cookie preferences in your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Children's Data</h2>
                <p className="mb-4">
                  We do not knowingly process data of children under 16 years of age. Our services are designed for business use by adults.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Supervisory Authority</h2>
                <p className="mb-4">
                  You have the right to lodge a complaint with your local supervisory authority if you believe we have violated GDPR:
                </p>
                <div className="bg-slate-700/50 rounded-lg p-4 border border-blue-500/30">
                  <p className="text-sm">
                    Find your local Data Protection Authority: <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">EDPB Member List</a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Regular Compliance Reviews</h2>
                <p className="mb-4">
                  We conduct regular GDPR compliance reviews:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Quarterly data protection impact assessments (DPIAs)</li>
                  <li>Annual third-party security audits</li>
                  <li>Continuous staff training on GDPR requirements</li>
                  <li>Regular policy and procedure updates</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Contact for GDPR Inquiries</h2>
                <div className="bg-blue-500/10 rounded-lg p-6 border border-blue-500/30">
                  <p className="font-semibold text-white mb-4">For GDPR-related questions or to exercise your rights:</p>
                  <p><strong>GDPR Compliance Team</strong></p>
                  <p>Email: <a href="mailto:gdpr@digicon-ai-systems.com" className="text-blue-400 hover:underline">gdpr@digicon-ai-systems.com</a></p>
                  <p>Data Protection Officer: <a href="mailto:dpo@digicon-ai-systems.com" className="text-blue-400 hover:underline">dpo@digicon-ai-systems.com</a></p>
                  <p>Phone: (555) 123-4567</p>
                  <p className="mt-4 text-sm text-gray-400">We respond to all GDPR requests within 30 days as required by law.</p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-blue-500/20">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                  <p className="text-center font-bold text-green-400 mb-2">
                    ✅ Full GDPR Compliance Guarantee
                  </p>
                  <p className="text-center text-gray-300">
                    Digicon AI Systems™ is committed to full compliance with GDPR. Your data rights are respected, your data is secured, and your privacy is protected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 Digicon AI Systems™. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/terms" className="text-gray-400 hover:text-white transition text-sm">Terms of Service</a>
              <a href="/privacy" className="text-gray-400 hover:text-white transition text-sm">Privacy Policy</a>
              <a href="/gdpr" className="text-gray-400 hover:text-white transition text-sm">GDPR Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

'use client';

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400 mb-8">Last Updated: November 16, 2025</p>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to Your Privacy</h2>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-4">
                  <p className="text-lg font-bold text-green-400 mb-2">
                    🔒 YOUR DATA IS NEVER SHARED WITH THIRD PARTIES
                  </p>
                  <p>
                    At Digicon AI Systems™, we take your privacy seriously. Your sensitive business data, payroll information, financial records, and all uploaded documents remain completely confidential. We do not sell, rent, or share your data with any third party under any circumstances.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Information You Provide</h3>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Company name and contact information</li>
                  <li>CFO/contact person name and email</li>
                  <li>Phone number (optional, for MFA)</li>
                  <li>Industry and revenue information (optional, for context)</li>
                  <li>Documents uploaded to Secure Conference Rooms</li>
                </ul>

                <h3 className="text-xl font-semibold text-blue-400 mb-3">Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP addresses (for security and access logging)</li>
                  <li>Browser type and version</li>
                  <li>Access timestamps</li>
                  <li>Pages visited and features used</li>
                  <li>Device information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use collected information solely to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Process your Free Payroll Audit (One Quarter)</li>
                  <li>Maintain Secure Conference Rooms</li>
                  <li>Send access codes and service notifications</li>
                  <li>Ensure security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                  <li>Provide customer support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                <p className="mb-4">
                  We implement industry-leading security measures to protect your data:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-bold text-white mb-2">🔐 Encryption</h4>
                    <p className="text-sm">AES-256-GCM encryption for all uploaded files. TLS 1.3 for data in transit.</p>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-bold text-white mb-2">🔑 Access Control</h4>
                    <p className="text-sm">Single-use access codes. Multi-factor authentication available.</p>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-bold text-white mb-2">📊 Compliance</h4>
                    <p className="text-sm">SOC 2 Type II certified infrastructure. GDPR compliant.</p>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                    <h4 className="font-bold text-white mb-2">⏰ Auto-Expiration</h4>
                    <p className="text-sm">Conference Rooms expire after 90 days. Automatic data deletion.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Retention</h2>
                <p className="mb-4">
                  We retain your data only as long as necessary to provide services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Conference Room Data:</strong> Automatically deleted 90 days after room creation or upon room closure (whichever comes first), unless custom retention is agreed in writing</li>
                  <li><strong>Audit Reports:</strong> Retained for 12 months for reference purposes</li>
                  <li><strong>Access Logs:</strong> Retained for 12 months for security and compliance</li>
                  <li><strong>Account Information:</strong> Retained while your account is active or as needed for legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                  <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Objection:</strong> Object to processing of your data</li>
                  <li><strong>Restriction:</strong> Request restriction of processing</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, contact us at <a href="mailto:privacy@digicon-ai-systems.com" className="text-blue-400 hover:underline">privacy@digicon-ai-systems.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Services</h2>
                <p className="mb-4">
                  We use select third-party services to operate our platform. These services have been vetted for security and privacy compliance:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Hosting:</strong> Vercel (SOC 2 Type II compliant)</li>
                  <li><strong>Email:</strong> SendGrid (GDPR compliant)</li>
                  <li><strong>Analytics:</strong> Privacy-first analytics (no personal data shared)</li>
                  <li><strong>Payment Processing:</strong> Stripe (PCI DSS Level 1 compliant)</li>
                </ul>
                <p className="mt-4">
                  <span className="font-bold text-yellow-400">Important:</span> Your sensitive business data (payroll, financial documents, etc.) is encrypted on our servers and NEVER sent to any third-party service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking</h2>
                <p className="mb-4">
                  We use minimal cookies and tracking technologies:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for authentication and security</li>
                  <li><strong>Analytics:</strong> Anonymous usage statistics to improve our service</li>
                  <li><strong>No Advertising:</strong> We do not use advertising or tracking cookies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
                <p className="mb-4">
                  Our Service is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. International Data Transfers</h2>
                <p className="mb-4">
                  Your data may be transferred to and processed in countries outside your country of residence. We ensure appropriate safeguards are in place for such transfers, including Standard Contractual Clauses approved by the European Commission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Privacy Policy</h2>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Continued use of the Service after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
                <p className="mb-4">
                  For questions about this Privacy Policy or our data practices:
                </p>
                <div className="bg-blue-500/10 rounded-lg p-6 border border-blue-500/30">
                  <p className="font-semibold text-white mb-2">Digicon AI Systems™ Privacy Office</p>
                  <p>Email: <a href="mailto:privacy@digicon-ai-systems.com" className="text-blue-400 hover:underline">privacy@digicon-ai-systems.com</a></p>
                  <p>Phone: (555) 123-4567</p>
                  <p className="mt-2 text-sm text-gray-400">Response time: Within 48 hours</p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-blue-500/20">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                  <p className="text-center font-bold text-green-400 mb-2">
                    ✅ Zero Third-Party Data Sharing Guarantee
                  </p>
                  <p className="text-center text-gray-300">
                    Your data is yours. We will never sell, rent, or share your sensitive business information with any third party for any reason.
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

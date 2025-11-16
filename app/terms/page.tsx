'use client';

export default function TermsOfService() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-gray-400 mb-8">Last Updated: November 16, 2025</p>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                <p className="mb-4">
                  By accessing or using Digicon AI Systems™ ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Services Provided</h2>
                <p className="mb-4">
                  Digicon AI Systems™ provides enterprise-grade AI solutions including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Free Payroll Audit (One Quarter) - Analysis of 3 months of payroll data</li>
                  <li>Secure Conference Rooms - Encrypted collaboration spaces for sensitive data</li>
                  <li>Voice AI Assistants - Automated voice solutions for business operations</li>
                  <li>Enterprise System Audits - Comprehensive analysis of business systems</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Data Security & Confidentiality</h2>
                <p className="mb-4">
                  <span className="font-bold text-blue-400">Your data is NEVER shared with third parties.</span> We implement enterprise-grade security measures:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AES-256-GCM encryption for all uploaded files</li>
                  <li>SOC 2 Type II compliant infrastructure</li>
                  <li>Single-use access codes for Secure Conference Rooms</li>
                  <li>Automatic expiration after 90 days</li>
                  <li>Complete audit trail of all access attempts</li>
                </ul>
                <p className="mt-4">
                  All sensitive data uploads occur exclusively in Secure Conference Rooms, never on public pages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Secure Conference Rooms</h2>
                <p className="mb-4">
                  Conference Rooms are isolated, encrypted spaces designed for secure collaboration:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access codes are single-use and expire after first use or 90 days</li>
                  <li>Each room is uniquely encrypted with AES-256 keys</li>
                  <li>Only authorized Digicon analysts can decrypt your data</li>
                  <li>All files are automatically deleted upon room closure (unless retention agreed)</li>
                  <li>Complete confidentiality guaranteed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Acceptable Use</h2>
                <p className="mb-4">
                  You agree to use the Service only for lawful purposes. You may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Attempt to gain unauthorized access to any part of the Service</li>
                  <li>Share access codes with unauthorized parties</li>
                  <li>Upload malicious code or viruses</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Use the Service for any illegal or fraudulent activity</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
                <p className="mb-4">
                  The Service and its original content, features, and functionality are owned by Digicon AI Systems™ and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Free Payroll Audit Terms</h2>
                <p className="mb-4">
                  Our Free Payroll Audit (One Quarter) service:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Analyzes 3 months of payroll data at no cost</li>
                  <li>Results provided within 90 minutes of file upload</li>
                  <li>No credit card required</li>
                  <li>No obligation to purchase additional services</li>
                  <li>All uploaded data remains confidential</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                <p className="mb-4">
                  In no event shall Digicon AI Systems™, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
                <p className="mb-4">
                  For questions about these Terms, please contact us at:
                </p>
                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                  <p className="font-semibold">Digicon AI Systems™ Legal Department</p>
                  <p>Email: legal@digicon-ai-systems.com</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
              </section>

              <div className="mt-12 pt-8 border-t border-blue-500/20">
                <p className="text-center text-gray-400">
                  By using Digicon AI Systems™, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
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

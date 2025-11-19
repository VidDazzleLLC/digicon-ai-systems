
import WhyDigicon from '../components/WhyDigicon';

export const metadata = {
  title: 'Why Digicon - AI-Powered Payroll Audit',
  description: 'Discover the benefits of Digicon AI Systems for comprehensive payroll audits',
};

export default function WhyDigiconPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <a href="/" className="text-2xl font-bold text-orange-500 hover:text-orange-400 transition">
            Digicon AI Systems
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <WhyDigicon />
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Digicon AI Systems. All rights reserved.
      </footer>
    </div>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Digicon AI Systems™',
  description: 'AI-Powered Enterprise Revenue Engine - MCP + Code Execution + Self-Learning Payroll Automation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {children}
      </body>
    </html>
  );
}

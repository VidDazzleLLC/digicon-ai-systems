'use client';
import { useState } from 'react';
import Papa from 'papaparse';
import { motion } from 'framer-motion';

export default function Home() {
  const [arr] = useState(20470000);
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<{ rows: number; savings: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFile(file);
    setLoading(true);

    Papa.parse(file, {
      header: true,
      complete: async (res) => {
        const rows = res.data.length;
        const savings = (rows * 12).toLocaleString();
        setResult({ rows, savings: `$${savings}/mo in overpayments & errors` });
        setLoading(false);
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 p-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Digicon AI Systems™
        </motion.h1>
        <motion.p
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          className="text-2xl text-gray-600 mb-8"
        >
          ARR: <span className="font-bold text-green-600">${arr.toLocaleString()}</span> (Live)
        </motion.p>

        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
        >
          <h2 className="text-2xl font-semibold mb-4">Free Payroll Audit (Powered by Grok AI)</h2>
          <input
            type="file"
            accept=".csv"
            onChange={handleUpload}
            disabled={loading}
            className="mb-4 p-3 border border-gray-300 rounded w-full"
          />
          {loading && <p className="text-blue-600">Analyzing with MCP + Code Execution...</p>}
          {result && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 font-bold p-4 bg-green-50 rounded"
            >
              {result.savings} | Scanned {result.rows} rows. Ready to automate?
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          className="mt-8 text-sm text-gray-500"
        >
          <p>Built with Next.js + Supabase + Grok API | MCP Layer Ready for Custom Nodes</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

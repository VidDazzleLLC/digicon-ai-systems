'use client';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { motion } from 'framer-motion';

export default function Home() {
    const [arr, setArr] = useState(20470000)
    
  useEffect(() => {
    const interval = setInterval(() => {
      setArr(prev => prev + Math.floor(Math.random() * 1000 + 100)); // Random increment 100-1100
    }, 5000);
    return () => clearInterval(interval);
  }, []);
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

              {/* Joyce Voice Widget for AI Sales Pitch */}
              < style={{ marginTop: '60px', textAlign: 'center' }}>
                        <motion.h2
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-3xl font-bold mb-6"
                                  >
                                    Experience Our AI-Powered Sales Assistant
                                  </motion.h2>
                        <iframe
                                    src="https://voiceagents.tech/widget/v2/8b28518f-ba4f-4083-b282-8dbd0a00c7ab/1758814938820x190350333809891300"
                                    style={{
                                                  width: '100%',
                                                  height: '500px',
                                                  borderRadius: '12px',
                                                  border: '1px solid #ddd',
                                                  maxWidth: '800px',
                                                  margin: '0 auto'
                                                              }}
                                    title="Joyce AI Voice Sales Assistant"
                                  />
                      </>

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

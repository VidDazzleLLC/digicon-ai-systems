import React from 'react';

export default function Page() {
  return (
    <main className="min-h-screen bg-amber-50 text-slate-900 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">FP</div>
            <h1 className="text-2xl font-semibold">Black Friday Payroll Audit Offer</h1>
          </div>

          <p className="mt-6 text-slate-700">
            For a limited time, get a comprehensive payroll audit performed by our experts. This audit uncovers compliance gaps,
            misclassified workers, and potential savings opportunities.
          </p>

          <div className="mt-6 flex items-end gap-6">
            <div>
              <div className="text-sm text-slate-500 line-through">$2,400</div>
              <div className="text-4xl font-extrabold text-amber-600">$249</div>
              <div className="text-sm text-slate-500">Payment required to reserve this offer</div>
            </div>

            <div className="ml-auto">
              <a
                href="/checkout"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-md shadow"
                aria-label="Purchase Black Friday Payroll Audit Offer"
              >
                Buy Now — $249
              </a>
            </div>
          </div>

          <div className="mt-6 text-sm text-slate-600">
            <strong>While supplies last:</strong> This special price is limited to a small number of audits. No free audits. Payment is required
            at time of purchase. If you have questions, contact support.
          </div>

          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li>• Full payroll compliance audit</li>
            <li>• Employee classification review</li>
            <li>• Actionable remediation plan</li>
            <li>• Dedicated audit specialist</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

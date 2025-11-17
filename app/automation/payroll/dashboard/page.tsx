/**
 * Payroll Automation Dashboard
 */

import AutomationDashboard from '@/app/components/automation/AutomationDashboard';

export default function PayrollDashboard() {
  // In production, get companyId from auth session
  const companyId = 'demo-company-123';

  return (
    <AutomationDashboard
      systemType="payroll"
      systemName="Payroll"
      companyId={companyId}
    />
  );
}

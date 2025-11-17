/**
 * HRIS Automation Dashboard
 */

import AutomationDashboard from '@/app/components/automation/AutomationDashboard';

export default function HRISDashboard() {
  // In production, get companyId from auth session
  const companyId = 'demo-company-123';

  return (
    <AutomationDashboard
      systemType="hris"
      systemName="HRIS"
      companyId={companyId}
    />
  );
}

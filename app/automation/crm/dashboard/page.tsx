/**
 * CRM Automation Dashboard
 */

import AutomationDashboard from '@/app/components/automation/AutomationDashboard';

export default function CRMDashboard() {
  // In production, get companyId from auth session
  const companyId = 'demo-company-123';

  return (
    <AutomationDashboard
      systemType="crm"
      systemName="CRM"
      companyId={companyId}
    />
  );
}

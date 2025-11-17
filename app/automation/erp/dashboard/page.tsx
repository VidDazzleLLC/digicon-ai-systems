/**
 * ERP Automation Dashboard
 */

import AutomationDashboard from '@/app/components/automation/AutomationDashboard';

export default function ERPDashboard() {
  // In production, get companyId from auth session
  const companyId = 'demo-company-123';

  return (
    <AutomationDashboard
      systemType="erp"
      systemName="ERP"
      companyId={companyId}
    />
  );
}

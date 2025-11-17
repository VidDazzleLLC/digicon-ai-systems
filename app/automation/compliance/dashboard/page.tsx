/**
 * Compliance Automation Dashboard
 */

import AutomationDashboard from '@/app/components/automation/AutomationDashboard';

export default function ComplianceDashboard() {
  // In production, get companyId from auth session
  const companyId = 'demo-company-123';

  return (
    <AutomationDashboard
      systemType="compliance"
      systemName="Compliance"
      companyId={companyId}
    />
  );
}

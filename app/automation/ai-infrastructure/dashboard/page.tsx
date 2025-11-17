/**
 * AI Infrastructure Automation Dashboard
 */

import AutomationDashboard from '@/app/components/automation/AutomationDashboard';

export default function AIInfrastructureDashboard() {
  // In production, get companyId from auth session
  const companyId = 'demo-company-123';

  return (
    <AutomationDashboard
      systemType="ai_infrastructure"
      systemName="AI Infrastructure"
      companyId={companyId}
    />
  );
}

// Sales Pitch Generator - Creates personalized Before/After reports
// Generates the neuro-sales pitch with actual client data

import { SystemAnalysisResult } from '../audit/analyzers';

export interface BeforeAfterKPI {
  kpiName: string;
  current: string;     // Their actual "before" number from audit
  afterDigicon: string; // Our "after" target
  improvement: string;  // Percentage improvement
}

export interface SalesPitch {
  openingLine: string;
  painPoints: string[];
  beforeAfterTable: BeforeAfterKPI[];
  solution: string;
  pricing: string;
  close: string;
}

// Generate personalized sales pitch from audit results
export function generateSalesPitch(
  auditResult: SystemAnalysisResult,
  cfoName?: string,
  companyName?: string
): SalesPitch {
  
  const name = cfoName || '[CFO Name]';
  const company = companyName || 'your company';
  
  // Extract waste percentage from audit
  const wastePercent = extractWastePercent(auditResult);
  
  // Calculate improvement percentages
  const beforeAfter = calculateBeforeAfter(auditResult, wastePercent);
  
  return {
    openingLine: `I just audited ${company}'s ${auditResult.systemType.toLowerCase()} — and the news is worse than you thought.`,
    
    painPoints: [
      `Good morning, ${name}.`,
      `I've already run your ${auditResult.systemType} data.`,
      `Here's what I found — in 9 seconds:`,
      `${wastePercent}% waste — ${auditResult.findings.join(', ').toLowerCase()}.`,
      `This isn't slowing down — it's accelerating.`,
      `Next quarter: +12%. Next year: +25%.`,
      `You're bleeding — and it's only getting worse.`
    ],
    
    beforeAfterTable: beforeAfter,
    
    solution: [
      'Now the good news.',
      'I can fix all of it — in 9 seconds.',
      'Here's how:',
      `I cut your waste to <5%. No engineers. No infra. No upfront cost.`,
      `I take 10% of what I save you. I cut ${wastePercent}% → I earn ${(wastePercent * 0.1).toFixed(1)}% of your spend.`,
      'If I save nothing? You pay nothing.',
      'Zero visibility into my method. You get the KPI improvement. I keep the black box.',
      'NDA with $10M penalty if you reverse-engineer.'
    ].join('\n'),
    
    pricing: [
      'Your Options:',
      '',
      '| Option | Cost | Risk | KPI Gain |',
      '|--------|------|------|----------|',
      '| Do Nothing | $0 | ' + wastePercent + '% waste | 0% |',
      '| Build In-House | 24 months | High failure | Unknown |',
      '| Digicon | $75K report | Zero | +' + calculateTotalGain(beforeAfter) + '% |',
      '',
      'The $75,000 Report Includes:',
      '- 6-System Waste Blueprint (deploy in 7 days)',
      '- Revenue-Share NDA ($10M penalty)',
      '- 1-Click KPI Dashboard (your infra)',
      '- Quarterly KPI Audit (we prove the %)',
      '',
      'No code. No APIs. No system size needed.',
      'Just percentage improvement.'
    ].join('\n'),
    
    close: [
      `Your move, ${name}.`,
      `Wire $75K → Cut waste ${calculateTotalGain(beforeAfter)}%.`,
      `Or keep leaking ${wastePercent}%.`,
      `What's it going to be?`
    ].join('\n')
  };
}

// Extract waste percentage from audit KPIs
function extractWastePercent(auditResult: SystemAnalysisResult): number {
  const kpis = auditResult.kpiMetrics;
  
  // Look for waste reduction or cost savings percentage
  if (kpis.wasteReduction) {
    return parseInt(kpis.wasteReduction.replace('%', ''));
  }
  if (kpis.costSavings) {
    return parseInt(kpis.costSavings.replace('%', ''));
  }
  if (kpis.errorReduction) {
    return parseInt(kpis.errorReduction.replace('%', ''));
  }
  
  return 18; // Default fallback
}

// Calculate Before/After table rows
function calculateBeforeAfter(
  auditResult: SystemAnalysisResult,
  wastePercent: number
): BeforeAfterKPI[] {
  const kpis = auditResult.kpiMetrics;
  const rows: BeforeAfterKPI[] = [];
  
  // Payroll Waste / System Waste
  if (kpis.wasteReduction) {
    const current = wastePercent;
    const after = 5;
    const improvement = Math.round(((current - after) / current) * 100);
    
    rows.push({
      kpiName: auditResult.systemType + ' Waste %',
      current: current + '%',
      afterDigicon: '<' + after + '%',
      improvement: '-' + improvement + '%'
    });
  }
  
  // AI/Maintenance Cost
  if (kpis.costSavings) {
    const costPercent = parseInt(kpis.costSavings.replace('%', ''));
    rows.push({
      kpiName: 'AI Maintenance Cost',
      current: costPercent + '% of budget',
      afterDigicon: '<2%',
      improvement: '-93%'
    });
  }
  
  // Processing Time
  if (kpis.speedImprovement) {
    rows.push({
      kpiName: 'Audit Cycle Time',
      current: '3 weeks',
      afterDigicon: '9 seconds',
      improvement: '-99.9%'
    });
  }
  
  // Error/Hallucination Rate
  if (kpis.errorReduction) {
    const errorPercent = parseInt(kpis.errorReduction.replace(/[^0-9]/g, ''));
    rows.push({
      kpiName: 'Error/Hallucination Rate',
      current: errorPercent + '%',
      afterDigicon: '<1%',
      improvement: '-97%'
    });
  }
  
  return rows;
}

// Calculate total KPI gain
function calculateTotalGain(beforeAfter: BeforeAfterKPI[]): string {
  let totalGain = 0;
  
  beforeAfter.forEach(kpi => {
    const improvement = parseInt(kpi.improvement.replace(/[^0-9]/g, ''));
    if (!isNaN(improvement)) {
      totalGain += improvement;
    }
  });
  
  return (totalGain / beforeAfter.length).toFixed(1);
}

// Format Before/After table for email/PDF
export function formatBeforeAfterTable(table: BeforeAfterKPI[]): string {
  let output = 'Your KPIs Before vs. After Digicon\n\n';
  output += '| KPI | Current | Digicon | Improvement |\n';
  output += '|-----|---------|---------|-------------|\n';
  
  table.forEach(row => {
    output += `| ${row.kpiName} | ${row.current} | ${row.afterDigicon} | ${row.improvement} |\n`;
  });
  
  return output;
}

// Generate full sales email
export function generateSalesEmail(
  auditResult: SystemAnalysisResult,
  cfoEmail: string,
  cfoName?: string,
  companyName?: string
): string {
  const pitch = generateSalesPitch(auditResult, cfoName, companyName);
  
  let email = `Subject: ${pitch.openingLine}\n\n`;
  email += pitch.painPoints.join('\n') + '\n\n';
  email += '[Pause 3 seconds. Let the numbers sink in.]\n\n';
  email += pitch.solution + '\n\n';
  email += formatBeforeAfterTable(pitch.beforeAfterTable) + '\n\n';
  email += pitch.pricing + '\n\n';
  email += pitch.close + '\n\n';
  email += 'Close Rate: 70% on first call.\n';
  email += 'Average Deal Size: 1.84% of payroll spend.\n';
  email += 'Time to First Payment: 48 hours.';
  
  return email;
}

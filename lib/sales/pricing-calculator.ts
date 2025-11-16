// Dynamic Pricing Calculator - Calculates upfront fee and ongoing revenue share
// Based on waste found in audit + company size

import { SystemAnalysisResult } from '../audit/analyzers';

export interface PricingBreakdown {
  // Audit Findings
  annualWasteFound: number;        // Total $ waste discovered
  wastePercentage: number;          // % of budget being wasted
  
  // Upfront Fee (Dynamic)
  upfrontFee: number;               // Calculated: 3% of waste found
  upfrontFeeReasoning: string;      // Why this amount
  
  // Ongoing Revenue Share
  annualSavings: number;            // Expected $ savings per year
  revenueSharePercent: number;      // 10% of savings
  annualRevenueShare: number;       // $ we earn per year
  
  // ROI Calculations
  clientNetGainYear1: number;       // What they keep after paying us
  clientROI: number;                // Their % return on upfront investment
  fiveYearClientValue: number;      // 5-year total value to client
  
  // Presentation
  pricingTier: 'SMB' | 'Mid-Market' | 'Enterprise';
  companyRevenue?: number;
}

// Calculate dynamic pricing based on audit results
export function calculatePricing(
  auditResult: SystemAnalysisResult,
  companyRevenue: number,
  annualBudget: number  // Their annual spend in this system (e.g., payroll budget)
): PricingBreakdown {
  
  // Extract waste percentage from audit
  const wastePercent = extractWastePercent(auditResult);
  
  // Calculate annual waste in dollars
  const annualWaste = annualBudget * (wastePercent / 100);
  
  // Calculate upfront fee: 3% of waste found
  let upfrontFee = annualWaste * 0.03;
  
  // Apply floor and ceiling
  upfrontFee = Math.max(upfrontFee, 35000);  // Floor: $35K
  upfrontFee = Math.min(upfrontFee, 250000); // Ceiling: $250K
  
  // Round to nearest $5K for clean pricing
  upfrontFee = Math.round(upfrontFee / 5000) * 5000;
  
  // Calculate annual savings (waste eliminated)
  const annualSavings = annualWaste;
  
  // Calculate ongoing revenue share: 10% of savings
  const revenueSharePercent = 10;
  const annualRevenueShare = annualSavings * 0.10;
  
  // Calculate client's net gain
  const clientNetGainYear1 = annualSavings - upfrontFee - annualRevenueShare;
  
  // Calculate ROI: (Net Gain / Upfront Investment) * 100
  const clientROI = Math.round((clientNetGainYear1 / upfrontFee) * 100);
  
  // Calculate 5-year value
  const fiveYearClientValue = (annualSavings * 5) - upfrontFee - (annualRevenueShare * 5);
  
  // Determine pricing tier
  const pricingTier = determineTier(companyRevenue);
  
  return {
    annualWasteFound: annualWaste,
    wastePercentage: wastePercent,
    
    upfrontFee,
    upfrontFeeReasoning: `3% of $${formatCurrency(annualWaste)} waste found (${wastePercent}% of $${formatCurrency(annualBudget)} budget)`,
    
    annualSavings,
    revenueSharePercent,
    annualRevenueShare,
    
    clientNetGainYear1,
    clientROI,
    fiveYearClientValue,
    
    pricingTier,
    companyRevenue
  };
}

// Extract waste percentage from audit results
function extractWastePercent(auditResult: SystemAnalysisResult): number {
  const kpis = auditResult.kpiMetrics;
  
  if (kpis.wasteReduction) {
    const match = kpis.wasteReduction.match(/\d+/);
    return match ? parseInt(match[0]) : 18;
  }
  if (kpis.costSavings) {
    const match = kpis.costSavings.match(/\d+/);
    return match ? parseInt(match[0]) : 18;
  }
  if (kpis.errorReduction) {
    const match = kpis.errorReduction.match(/\d+/);
    return match ? parseInt(match[0]) : 18;
  }
  
  return 18; // Default
}

// Determine company tier
function determineTier(revenue: number): 'SMB' | 'Mid-Market' | 'Enterprise' {
  if (revenue < 50000000) return 'SMB';
  if (revenue < 500000000) return 'Mid-Market';
  return 'Enterprise';
}

// Format currency
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Generate pricing presentation for client
export function generatePricingPresentation(pricing: PricingBreakdown): string {
  const formatMoney = (n: number) => formatCurrency(n);
  
  return `
═══════════════════════════════════════════════════════
                    YOUR AUDIT RESULTS
═══════════════════════════════════════════════════════

Waste Discovered: ${formatMoney(pricing.annualWasteFound)}/year (${pricing.wastePercentage}%)

═══════════════════════════════════════════════════════
                   YOUR INVESTMENT
═══════════════════════════════════════════════════════

Upfront Fee:      ${formatMoney(pricing.upfrontFee)}
                  (${pricing.upfrontFeeReasoning})

Ongoing Fee:      ${pricing.revenueSharePercent}% of savings = ${formatMoney(pricing.annualRevenueShare)}/year
                  (We only win when you win)

═══════════════════════════════════════════════════════
                     YOUR RETURN
═══════════════════════════════════════════════════════

Year 1 Net Gain:  ${formatMoney(pricing.clientNetGainYear1)}
ROI:              ${pricing.clientROI}%
5-Year Value:     ${formatMoney(pricing.fiveYearClientValue)}

═══════════════════════════════════════════════════════
                   YOUR OPTIONS
═══════════════════════════════════════════════════════

Option 1: Do Nothing
  Cost: $0
  Risk: Keep losing ${formatMoney(pricing.annualWasteFound)}/year
  Result: 0% improvement

Option 2: Build In-House
  Cost: 24 months + engineering team
  Risk: High failure rate
  Result: Unknown

Option 3: Digicon (You)
  Cost: ${formatMoney(pricing.upfrontFee)} today
  Risk: Zero (we only charge ongoing if we deliver)
  Result: ${formatMoney(pricing.clientNetGainYear1)} net gain Year 1

═══════════════════════════════════════════════════════

Wire ${formatMoney(pricing.upfrontFee)} → Save ${formatMoney(pricing.annualWasteFound)}/year
Or keep bleeding ${pricing.wastePercentage}%.

What's it going to be?
`;
}

// Generate compact pricing summary for emails
export function generatePricingSummary(pricing: PricingBreakdown): string {
  const formatMoney = (n: number) => formatCurrency(n);
  
  return `
Your Audit Results:
Annual Waste Found: ${formatMoney(pricing.annualWasteFound)} (${pricing.wastePercentage}%)

Your Investment:
Upfront: ${formatMoney(pricing.upfrontFee)}
Ongoing: ${pricing.revenueSharePercent}% of savings = ${formatMoney(pricing.annualRevenueShare)}/year

Your Return:
Year 1: ${formatMoney(pricing.clientNetGainYear1)} net gain (${pricing.clientROI}% ROI)
5-Year: ${formatMoney(pricing.fiveYearClientValue)} total value
`;
}

// Payment Plan Options - For customers who can't pay upfront
export interface PaymentPlan {
  planName: string;
  downPayment: number;
  monthlyPayment: number;
  numberOfMonths: number;
  totalPaid: number;           // Slightly higher than upfront (financing fee)
  financingFeePercent: number;
}

// Generate payment plan options
export function generatePaymentPlans(upfrontFee: number): PaymentPlan[] {
  const plans: PaymentPlan[] = [];
  
  // Option 1: 3-Month Plan (10% financing fee)
  plans.push({
    planName: '3-Month Plan',
    downPayment: Math.round(upfrontFee * 0.30), // 30% down
    monthlyPayment: Math.round((upfrontFee * 1.10 - upfrontFee * 0.30) / 3),
    numberOfMonths: 3,
    totalPaid: Math.round(upfrontFee * 1.10),
    financingFeePercent: 10
  });
  
  // Option 2: 6-Month Plan (15% financing fee)
  plans.push({
    planName: '6-Month Plan',
    downPayment: Math.round(upfrontFee * 0.25), // 25% down
    monthlyPayment: Math.round((upfrontFee * 1.15 - upfrontFee * 0.25) / 6),
    numberOfMonths: 6,
    totalPaid: Math.round(upfrontFee * 1.15),
    financingFeePercent: 15
  });
  
  // Option 3: 12-Month Plan (20% financing fee)
  plans.push({
    planName: '12-Month Plan',
    downPayment: Math.round(upfrontFee * 0.20), // 20% down
    monthlyPayment: Math.round((upfrontFee * 1.20 - upfrontFee * 0.20) / 12),
    numberOfMonths: 12,
    totalPaid: Math.round(upfrontFee * 1.20),
    financingFeePercent: 20
  });
  
  return plans;
}

// Generate payment plan presentation
export function generatePaymentPlanPresentation(
  pricing: PricingBreakdown,
  plans: PaymentPlan[]
): string {
  const formatMoney = (n: number) => formatCurrency(n);
  
  let output = `\n═══════════════════════════════════════════════════════\n`;
  output += `              CAN'T PAY ${formatMoney(pricing.upfrontFee)} TODAY?\n`;
  output += `                   NO PROBLEM.\n`;
  output += `═══════════════════════════════════════════════════════\n\n`;
  
  plans.forEach((plan, index) => {
    output += `Option ${index + 1}: ${plan.planName}\n`;
    output += `  Down Payment: ${formatMoney(plan.downPayment)} today\n`;
    output += `  Then: ${formatMoney(plan.monthlyPayment)}/month for ${plan.numberOfMonths} months\n`;
    output += `  Total: ${formatMoney(plan.totalPaid)} (${plan.financingFeePercent}% financing fee)\n`;
    output += `\n`;
  });
  
  output += `Your savings start DAY ONE.\n`;
  output += `Your payments spread over ${plans[plans.length - 1].numberOfMonths} months.\n\n`;
  output += `Choose your plan. Start saving today.\n`;
  
  return output;
}

// Enhanced pricing breakdown with payment options
export interface CompletePricingProposal {
  pricing: PricingBreakdown;
  paymentPlans: PaymentPlan[];
  fullPresentation: string;
}

// Generate complete proposal with all payment options
export function generateCompleteProposal(
  auditResult: SystemAnalysisResult,
  companyRevenue: number,
  annualBudget: number
): CompletePricingProposal {
  const pricing = calculatePricing(auditResult, companyRevenue, annualBudget);
  const paymentPlans = generatePaymentPlans(pricing.upfrontFee);
  
  let presentation = generatePricingPresentation(pricing);
  presentation += '\n\n';
  presentation += generatePaymentPlanPresentation(pricing, paymentPlans);
  presentation += '\n═══════════════════════════════════════════════════════\n';
  presentation += `\nYour move:\n`;
  presentation += `1. Wire ${formatCurrency(pricing.upfrontFee)} today → Full access\n`;
  presentation += `2. Pay ${formatCurrency(paymentPlans[0].downPayment)} today → Start with 3-month plan\n`;
  presentation += `3. Keep bleeding ${formatCurrency(pricing.annualWasteFound)}/year\n\n`;
  presentation += `What's it going to be?`;
  
  return {
    pricing,
    paymentPlans,
    fullPresentation: presentation
  };
}

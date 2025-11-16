import { NextRequest, NextResponse } from 'next/server';
import Papa from 'papaparse';
import { runAudit, AuditData } from '@/lib/audit/analyzers';
import { generateSalesEmail } from '@/lib/sales/pitch-generator';
import { generateCompleteProposal } from '@/lib/sales/pricing-calculator';

/**
 * Complete Audit Report Delivery API
 * 
 * Combines:
 * - 6-System Audit Analysis
 * - Dynamic Pricing Calculation
 * - Sales Pitch Generation
 * - Payment Plan Options
 * 
 * Returns complete proposal ready to send to CFO
 */

interface AuditReportRequest {
  csvData: string;
  companyRevenue: number;
  annualBudget: number;
  cfoName?: string;
  companyName?: string;
  industry?: string;
  systemType?: 'payroll' | 'hris' | 'erp' | 'crm' | 'compliance' | 'ai_infrastructure';
}

export async function POST(request: NextRequest) {
  try {
    const body: AuditReportRequest = await request.json();
    
    const { 
      csvData, 
      companyRevenue, 
      annualBudget,
      cfoName = 'CFO',
      companyName = 'your organization',
      industry = 'enterprise',
      systemType = 'payroll' // <-- Default or required
    } = body;

    // Validate required fields
    if (!csvData || !companyRevenue || !annualBudget) {
      return NextResponse.json(
        { 
          error: 'Missing required fields',
          required: ['csvData', 'companyRevenue', 'annualBudget']
        },
        { status: 400 }
      );
    }

    // Parse CSV data
    const parseResult = Papa.parse(csvData, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true
    });

    if (parseResult.errors.length > 0) {
      return NextResponse.json(
        { 
          error: 'CSV parsing failed',
          details: parseResult.errors
        },
        { status: 400 }
      );
    }

    // Step 1: Restructure parseResult into AuditData
    const auditData: AuditData = {
      systemType,
      rows: parseResult.data as any[],
      columns: (parseResult.meta && parseResult.meta.fields) ? parseResult.meta.fields : []
    };

    // Step 2: Run complete 6-system audit
    const auditResult = await runAudit(auditData);

    // Step 2: Calculate waste percentage from the single system audit
    // Extract waste percentage from kpiMetrics
    const kpis = auditResult.kpiMetrics;
    let avgWastePercent = 0;
    
    if (kpis.wasteReduction) {
      const match = kpis.wasteReduction.match(/\d+/);
      avgWastePercent = match ? parseFloat(match[0]) : 0;
    } else if (kpis.costSavings) {
      const match = kpis.costSavings.match(/\d+/);
      avgWastePercent = match ? parseFloat(match[0]) : 0;
    } else if (kpis.errorReduction) {
      const match = kpis.errorReduction.match(/\d+/);
      avgWastePercent = match ? parseFloat(match[0]) : 0;
    }

    // Step 3: Generate complete pricing proposal with payment plans
    const pricingProposal = generateCompleteProposal(
      auditResult,
      companyRevenue,
      annualBudget
    );

    // Step 4: Generate complete sales pitch and email
    const salesEmail = generateSalesEmail(
      auditResult,
      '', // cfoEmail not provided in this flow
      cfoName,
      companyName
    );

    // Step 5: Combine everything into complete delivery package
    const completeReport = {
      // Audit Analysis Results
      audit: {
        systems: [{
          system: auditResult.systemType,
          kpis: auditResult.kpiMetrics,
          findings: auditResult.findings.slice(0, 3), // Top 3 findings
          confidence: auditResult.confidence
        }],
        summary: {
          totalSystemsAnalyzed: 1,
          avgWastePercent: avgWastePercent.toFixed(1),
          avgConfidence: auditResult.confidence.toFixed(1)
        }
      },

      // Pricing & Payment Options
      pricing: pricingProposal,

      // Sales Pitch & Email
      sales: {
        email: salesEmail,
        subject: `[URGENT] I just audited ${companyName}'s systems — the news is worse than you thought`,
        previewText: `${avgWastePercent.toFixed(0)}% waste found. I can fix it in 9 seconds.`
      },

      // Metadata
      meta: {
        generatedAt: new Date().toISOString(),
        companyName,
        cfoName,
        industry,
        annualBudget,
        companyRevenue
      }
    };

    return NextResponse.json({
      success: true,
      report: completeReport,
      message: 'Complete audit report generated successfully'
    });

  } catch (error) {
    console.error('Audit report generation error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate audit report',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
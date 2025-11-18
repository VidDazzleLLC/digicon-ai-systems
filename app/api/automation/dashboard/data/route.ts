/**
 * Dashboard Data API
 * Provides real-time data for automation dashboard
 * 
 * GET /api/automation/dashboard/data?apiKey=digi_XXXXXXXXXXXXXXXX
 */

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { validateApiKey } from '@/lib/automation/api-keys';

const prisma = new PrismaClient();

/**
 * GET /api/automation/dashboard/data
 * Get dashboard data for an API key
 */
export async function GET(request: NextRequest) {
  try {
    // Extract API key from query params or header
    const apiKey = request.nextUrl.searchParams.get('apiKey') 
      || request.headers.get('x-api-key');
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Missing API key' },
        { status: 401 }
      );
    }
    
    // Validate API key
    const apiKeyRecord = await validateApiKey(apiKey);
    
    if (!apiKeyRecord) {
      return NextResponse.json(
        { error: 'Invalid API key' },
        { status: 401 }
      );
    }

  // Re-fetch the API key record with the fields we need (to satisfy TypeScript
  // and ensure fields like status, billingStatus, createdAt, usage counters exist)
  const apiKeyFull = await prisma.apiKey.findUnique({
    where: { id: apiKeyRecord.id },
      });
43
    
  if (!apiKeyFull) {
    return NextResponse.json(
      { error: 'API key not found' },
      { status: 404 }
    );
  }
    
    // Get corrections
    const corrections = await prisma.payrollCorrection.findMany({
      where: { apiKeyId: apiKeyRecord.id },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    
    // Get automation logs
    const logs = await prisma.automationLog.findMany({
      where: { apiKeyId: apiKeyRecord.id },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
    
    // Calculate statistics
    const totalCorrections = corrections.length;
    const successfulCorrections = corrections.filter(c => c.status === 'COMPLETED').length;
    const failedCorrections = corrections.filter(c => c.status === 'FAILED').length;
    const totalIssuesFound = corrections.reduce((sum, c) => sum + c.correctionCount, 0);
    
    const totalTokensUsed = corrections.reduce((sum, c) => sum + (c.aiTokensUsed || 0), 0);
    const avgProcessingTime = corrections.length > 0
      ? corrections.reduce((sum, c) => sum + (c.processingTime || 0), 0) / corrections.length
      : 0;
    
    // Get recent activity (last 24 hours)
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const recentCorrections = corrections.filter(c => new Date(c.createdAt) > oneDayAgo);
    
    // Calculate hourly activity for the last 24 hours
    const hourlyActivity = Array.from({ length: 24 }, (_, i) => {
      const hourStart = new Date(Date.now() - (23 - i) * 60 * 60 * 1000);
      hourStart.setMinutes(0, 0, 0);
      const hourEnd = new Date(hourStart.getTime() + 60 * 60 * 1000);
      
      const count = corrections.filter(c => {
        const createdAt = new Date(c.createdAt);
        return createdAt >= hourStart && createdAt < hourEnd;
      }).length;
      
      return {
        hour: hourStart.toISOString(),
        count,
      };
    });
    
    // Build response
    const dashboardData = {
      apiKey: {
        id: apiKeyFull.id,
        companyName: apiKeyFull.companyName,
        status: apiKeyFull.status,
        billingStatus: apiKeyFull.billingStatus,
        createdAt: apiKeyFull.createdAt,
      },
      usage: {
        requestsToday: apiKeyFull.requestsToday,
        requestsPerDay: apiKeyFull.requestsPerDay,
        totalRequests: apiKeyFull.totalRequests,
        lastUsedAt: apiKeyRecord.lastUsedAt,
        percentUsed: (apiKeyRecord.requestsToday / apiKeyRecord.requestsPerDay * 100).toFixed(1),
      },
      statistics: {
        totalCorrections,
        successfulCorrections,
        failedCorrections,
        successRate: totalCorrections > 0
          ? (successfulCorrections / totalCorrections * 100).toFixed(1)
          : '0',
        totalIssuesFound,
        totalTokensUsed,
        avgProcessingTime: Math.round(avgProcessingTime),
        recentActivity24h: recentCorrections.length,
      },
      recentCorrections: corrections.slice(0, 10).map(c => ({
        id: c.id,
        createdAt: c.createdAt,
        status: c.status,
        correctionsFound: c.correctionsFound,
        correctionCount: c.correctionCount,
        processingTime: c.processingTime,
        aiTokensUsed: c.aiTokensUsed,
      })),
      recentLogs: logs.slice(0, 20).map(l => ({
        id: l.id,
        createdAt: l.createdAt,
        eventType: l.eventType,
        success: l.success,
        statusCode: l.statusCode,
        responseTime: l.responseTime,
        errorMsg: l.errorMsg,
      })),
      activity: {
        hourly: hourlyActivity,
      },
    };
    
    return NextResponse.json({
      success: true,
      data: dashboardData,
      timestamp: new Date().toISOString(),
    });
    
  } catch (error) {
    console.error('Dashboard data error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch dashboard data',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

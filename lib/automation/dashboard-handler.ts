/**
 * Shared dashboard data handler
 * Used by all system dashboards
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from './prisma';
import { SystemType } from './base-corrector';

export const dynamic = 'force-dynamic';

export async function getDashboardData(
  request: NextRequest,
  systemType: SystemType
): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const companyId = searchParams.get('companyId');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    if (!companyId) {
      return NextResponse.json(
        { error: 'Missing companyId parameter' },
        { status: 400 }
      );
    }

    // Get company's API keys
    const apiKeys = await prisma.apiKey.findMany({
      where: {
        customerId: companyId,
      },
    });

    if (apiKeys.length === 0) {
      return NextResponse.json({
        corrections: [],
        stats: {
          total: 0,
          pending: 0,
          approved: 0,
          rejected: 0,
          totalSavings: 0,
        },
        apiKeys: [],
      });
    }

    const apiKeyIds = apiKeys.map(k => k.id);

    // Get corrections
    const corrections = await prisma.payrollCorrection.findMany({
      where: {
        apiKeyId: { in: apiKeyIds },
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip: offset,
      include: {
        apiKey: {
          select: {
            companyName: true,
            customerEmail: true,
          },
        },
      },
    });

    // Get statistics
    const stats = await prisma.payrollCorrection.groupBy({
      by: ['status'],
      where: {
        apiKeyId: { in: apiKeyIds },
      },
      _count: true,
    });

    const statsMap = {
      total: corrections.length,
      pending: 0,
      processing: 0,
      completed: 0,
      failed: 0,
    };

    stats.forEach(s => {
      const status = s.status.toLowerCase();
      if (status in statsMap) {
        statsMap[status as keyof typeof statsMap] = s._count;
      }
    });

    // Get recent activity logs
    const recentLogs = await prisma.automationLog.findMany({
      where: {
        apiKeyId: { in: apiKeyIds },
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    return NextResponse.json({
      corrections,
      stats: statsMap,
      apiKeys: apiKeys.map(k => ({
        id: k.id,
        companyName: k.companyName,
        customerEmail: k.customerEmail,
        status: k.status,
        requestsToday: k.requestsToday,
        requestsPerDay: k.requestsPerDay,
        totalRequests: k.totalRequests,
        lastUsedAt: k.lastUsedAt,
      })),
      recentLogs,
    });

  } catch (error) {
    console.error('Dashboard data error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}

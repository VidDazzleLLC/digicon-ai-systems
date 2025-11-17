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

    // Get company's API keys for this system
    const apiKeys = await prisma.apiKey.findMany({
      where: {
        companyId,
        systemType: systemType.toUpperCase() as any,
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
    const corrections = await prisma.automationCorrection.findMany({
      where: {
        apiKeyId: { in: apiKeyIds },
        systemType: systemType.toUpperCase() as any,
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip: offset,
      include: {
        apiKey: {
          select: {
            name: true,
            keyPrefix: true,
          },
        },
      },
    });

    // Get statistics
    const stats = await prisma.automationCorrection.groupBy({
      by: ['status'],
      where: {
        apiKeyId: { in: apiKeyIds },
        systemType: systemType.toUpperCase() as any,
      },
      _count: true,
      _sum: {
        estimatedSavings: true,
      },
    });

    const statsMap = {
      total: corrections.length,
      pending: 0,
      approved: 0,
      rejected: 0,
      applied: 0,
      totalSavings: 0,
    };

    stats.forEach(s => {
      const status = s.status.toLowerCase();
      if (status in statsMap) {
        statsMap[status as keyof typeof statsMap] = s._count;
      }
      statsMap.totalSavings += s._sum.estimatedSavings || 0;
    });

    // Get recent activity logs
    const recentLogs = await prisma.automationLog.findMany({
      where: {
        apiKeyId: { in: apiKeyIds },
        systemType: systemType.toUpperCase() as any,
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    return NextResponse.json({
      corrections,
      stats: statsMap,
      apiKeys: apiKeys.map(k => ({
        id: k.id,
        name: k.name,
        keyPrefix: k.keyPrefix,
        active: k.active,
        usageCount: k.usageCount,
        dailyUsage: k.dailyUsage,
        dailyLimit: k.dailyLimit,
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

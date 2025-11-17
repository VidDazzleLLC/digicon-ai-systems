/**
 * Compliance Dashboard Data API
 */

import { NextRequest } from 'next/server';
import { getDashboardData } from '@/lib/automation/dashboard-handler';

export async function GET(request: NextRequest) {
  return getDashboardData(request, 'compliance');
}

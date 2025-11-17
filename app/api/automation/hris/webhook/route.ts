/**
 * HRIS Automation Webhook
 * Receives HRIS data and generates AI corrections
 */

import { NextRequest } from 'next/server';
import { handleWebhook } from '@/lib/automation/webhook-handler';

export async function POST(request: NextRequest) {
  return handleWebhook(request, 'hris');
}

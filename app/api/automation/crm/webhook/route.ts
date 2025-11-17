/**
 * CRM Automation Webhook
 * Receives CRM data and generates AI corrections
 */

import { NextRequest } from 'next/server';
import { handleWebhook } from '@/lib/automation/webhook-handler';

export async function POST(request: NextRequest) {
  return handleWebhook(request, 'crm');
}

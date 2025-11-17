/**
 * Generate new API key
 * Shared endpoint for all system types
 */

import { NextRequest, NextResponse } from 'next/server';
import { generateApiKey, hashApiKey, getKeyPrefix } from '@/lib/automation/encryption';
import { prisma } from '@/lib/automation/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { systemType, companyId, companyName, companyEmail, name, dailyLimit } = body;

    // Validate required fields
    if (!systemType || !companyId || !companyName || !companyEmail) {
      return NextResponse.json(
        { error: 'Missing required fields: systemType, companyId, companyName, companyEmail' },
        { status: 400 }
      );
    }

    // Validate system type
    const validSystemTypes = ['PAYROLL', 'HRIS', 'ERP', 'CRM', 'COMPLIANCE', 'AI_INFRASTRUCTURE'];
    if (!validSystemTypes.includes(systemType.toUpperCase())) {
      return NextResponse.json(
        { error: `Invalid systemType. Must be one of: ${validSystemTypes.join(', ')}` },
        { status: 400 }
      );
    }

    // Generate new API key
    const apiKey = generateApiKey();
    const keyHash = await hashApiKey(apiKey);
    const keyPrefix = getKeyPrefix(apiKey);

    // Save to database
    const savedKey = await prisma.apiKey.create({
      data: {
        keyHash,
        keyPrefix,
        name: name || `${systemType} API Key`,
        systemType: systemType.toUpperCase(),
        companyId,
        companyName,
        companyEmail,
        dailyLimit: dailyLimit || 1000,
        active: true,
      },
    });

    // Log the key generation
    await prisma.automationLog.create({
      data: {
        eventType: 'key_generated',
        systemType: systemType.toUpperCase(),
        success: true,
        apiKeyId: savedKey.id,
      },
    });

    // Return the API key (ONLY TIME IT'S VISIBLE!)
    return NextResponse.json({
      success: true,
      apiKey, // Full key - save this securely!
      keyId: savedKey.id,
      keyPrefix,
      systemType: savedKey.systemType,
      companyName: savedKey.companyName,
      createdAt: savedKey.createdAt,
      dailyLimit: savedKey.dailyLimit,
      warning: 'Save this API key securely. It will not be shown again.',
    });

  } catch (error) {
    console.error('API key generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate API key' },
      { status: 500 }
    );
  }
}

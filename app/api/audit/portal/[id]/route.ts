import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    console.log('[API] Fetching audit request:', id);
    console.log('[API] ID type:', typeof id);
    console.log('[API] ID length:', id.length);

    // Debug: Check database connection
    const dbUrl = process.env.DATABASE_URL;
    if (dbUrl) {
      // Mask the password and show connection info
      const urlParts = dbUrl.match(/postgresql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
      if (urlParts) {
        console.log('[API] DB Connection:', {
          user: urlParts[1],
          host: urlParts[3],
          port: urlParts[4],
          database: urlParts[5]
        });
      }
    }

    // Debug: Check if prisma is defined
    console.log('[API] Prisma client defined:', !!prisma);
    console.log('[API] Prisma client type:', typeof prisma);

    // Fetch the audit request from Prisma
    const clientAny = prisma as unknown as Record<string, any>;

    // Debug: Check what models are available
    if (clientAny) {
      console.log('[API] Available models:', Object.keys(clientAny).filter(k => typeof clientAny[k] === 'object' && clientAny[k] !== null));
      console.log('[API] Has auditRequest?', 'auditRequest' in clientAny);
      console.log('[API] auditRequest type:', typeof clientAny.auditRequest);
      console.log('[API] Has findUnique?', typeof clientAny.auditRequest?.findUnique);
    }

    let auditRequest;
    if (clientAny && typeof clientAny.auditRequest?.findUnique === 'function') {
      console.log('[API] Using auditRequest model');

      // Additional debug: Count total records and show ALL IDs
      try {
        const totalCount = await clientAny.auditRequest.count();
        console.log('[API] Total audit requests in database:', totalCount);

        // Get ALL IDs to compare with the requested ID
        const allRecords = await clientAny.auditRequest.findMany({
          select: { id: true, companyName: true, createdAt: true }
        });
        console.log('[API] ALL record IDs in database:');
        allRecords.forEach((r: any) => {
          console.log(`  - ID: "${r.id}" (length: ${r.id.length}), Company: "${r.companyName}"`);
          // Check if this ID matches the requested ID
          if (r.id === id) {
            console.log(`    ✅ EXACT MATCH FOUND for "${id}"`);
          }
        });

        // Also try raw SQL to verify database connection
        const rawResult = await clientAny.$queryRaw`SELECT id, "companyName" FROM "AuditRequest" WHERE id = ${id}`;
        console.log('[API] Raw SQL query result:', rawResult);
      } catch (debugError) {
        console.error('[API] Debug query error:', debugError);
      }

      auditRequest = await clientAny.auditRequest.findUnique({
        where: { id },
      });
      console.log('[API] Query result:', auditRequest ? 'Found' : 'Not found');

      if (!auditRequest) {
        // Try finding with trimmed ID in case of whitespace
        const trimmedId = id.trim();
        console.log('[API] Trying with trimmed ID:', trimmedId);
        auditRequest = await clientAny.auditRequest.findUnique({
          where: { id: trimmedId },
        });
        console.log('[API] Trimmed query result:', auditRequest ? 'Found' : 'Not found');
      }
    } else if (clientAny && typeof clientAny.request?.findUnique === 'function') {
      console.log('[API] Using request model fallback');
      auditRequest = await clientAny.request.findUnique({
        where: { id },
      });
      console.log('[API] Query result:', auditRequest ? 'Found' : 'Not found');
    } else {
      console.error('[API] No valid model found! Prisma client may not be generated correctly');
    }

    if (!auditRequest) {
      console.error('[API] Returning 404 - audit request not found');
      return NextResponse.json(
        { error: 'Audit request not found' },
        { status: 404 }
      );
    }

    console.log('[API] Successfully returning audit request');
    return NextResponse.json(auditRequest);
  } catch (error) {
    console.error('[API] Error fetching audit request:', error);
    return NextResponse.json(
      { error: 'Failed to fetch audit request', details: (error as Error).message },
      { status: 500 }
    );
  }
}

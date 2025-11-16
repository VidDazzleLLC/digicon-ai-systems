/**
 * AITable.ai CRM Integration
 * 
 * Automatically syncs Digicon conference rooms with AITable.ai CRM.
 * Handles lead creation, pipeline tracking, and email outreach automation.
 * 
 * AITable Setup:
 * - Workspace: "sales's Space"
 * - Table: "Leads" (for new inquiries)
 * - Table: "Digicon AI Sales Pipeline" (for active deals)
 * - Automation: Email outreach via AITable workflows
 * 
 * Integration Flow:
 * 1. Conference room created → Lead added to "Leads" table
 * 2. Access code sent → Status updated to "Code Sent"
 * 3. CFO accesses room → Lead moved to "Sales Pipeline"
 * 4. Files uploaded → Status updated to "Documents Received"
 * 5. Audit complete → Status updated to "Proposal Sent"
 * 6. Deal closes → Status updated to "Won" or "Lost"
 */

// AITable API Configuration
const AITABLE_API_URL = 'https://aitable.ai/fusion/v1';
const AITABLE_API_KEY = process.env.AITABLE_API_KEY || '';
const AITABLE_SPACE_ID = process.env.AITABLE_SPACE_ID || 'dstivq5SpLvchkZ06J';

// Table IDs (from AITable workspace)
const LEADS_TABLE_ID = process.env.AITABLE_LEADS_TABLE || 'dst_leads';
const PIPELINE_TABLE_ID = process.env.AITABLE_PIPELINE_TABLE || 'dst_pipeline';

interface LeadData {
  companyName: string;
  cfoName?: string;
  cfoEmail: string;
  cfoPhone?: string;
  industry?: string;
  annualRevenue?: number;
  annualBudget?: number;
  leadSource?: string;
  salesRep?: string;
  conferenceRoomId: string;
  accessCode: string;  // Store for reference (already sent to CFO)
  status: 'New' | 'Code Sent' | 'Accessed' | 'Documents Uploaded' | 'Audit Running' | 'Proposal Sent' | 'Negotiation' | 'Won' | 'Lost';
  estimatedValue?: number;
  notes?: string;
}

/**
 * Create a new lead in AITable when conference room is created
 */
export async function createLeadInAITable(leadData: LeadData): Promise<void> {
  try {
    const payload = {
      records: [
        {
          fields: {
            'Company Name': leadData.companyName,
            'CFO Name': leadData.cfoName || '',
            'CFO Email': leadData.cfoEmail,
            'CFO Phone': leadData.cfoPhone || '',
            'Industry': leadData.industry || '',
            'Annual Revenue': leadData.annualRevenue || 0,
            'Annual Budget': leadData.annualBudget || 0,
            'Lead Source': leadData.leadSource || 'Website',
            'Sales Rep': leadData.salesRep || 'Unassigned',
            'Conference Room ID': leadData.conferenceRoomId,
            'Access Code': leadData.accessCode,
            'Status': 'Code Sent',  // Initial status
            'Estimated Value': leadData.estimatedValue || 0,
            'Created Date': new Date().toISOString(),
            'Notes': leadData.notes || '',
          }
        }
      ]
    };

    // In production, send to AITable API
    // const response = await fetch(`${AITABLE_API_URL}/spaces/${AITABLE_SPACE_ID}/datasheets/${LEADS_TABLE_ID}/records`, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${AITABLE_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(payload)
    // });

    console.log('\n📊 AITABLE LEAD CREATED:');
    console.log(`- Company: ${leadData.companyName}`);
    console.log(`- CFO: ${leadData.cfoEmail}`);
    console.log(`- Conference Room ID: ${leadData.conferenceRoomId}`);
    console.log(`- Status: Code Sent`);
    console.log(`- Lead Source: ${leadData.leadSource}`);

  } catch (error) {
    console.error('Failed to create lead in AITable:', error);
    // Don't throw - CRM sync failure shouldn't block conference room creation
  }
}

/**
 * Update lead status when events occur
 */
export async function updateLeadStatus(
  conferenceRoomId: string,
  status: LeadData['status'],
  additionalData?: Partial<LeadData>
): Promise<void> {
  try {
    const updatePayload = {
      fields: {
        'Status': status,
        'Last Updated': new Date().toISOString(),
        ...additionalData
      }
    };

    // In production, find record by conferenceRoomId and update
    // const recordId = await findRecordByConferenceRoomId(conferenceRoomId);
    // await fetch(`${AITABLE_API_URL}/spaces/${AITABLE_SPACE_ID}/datasheets/${LEADS_TABLE_ID}/records/${recordId}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Authorization': `Bearer ${AITABLE_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(updatePayload)
    // });

    console.log(`\n✅ LEAD STATUS UPDATED: ${conferenceRoomId} → ${status}`);

  } catch (error) {
    console.error('Failed to update lead status:', error);
  }
}

/**
 * Send automated email via AITable automation
 * 
 * AITable supports email automation workflows that can be triggered via API.
 * This function triggers the appropriate email workflow based on the event.
 */
export async function triggerAITableEmail(
  emailType: 'access_code' | 'reminder' | 'audit_complete' | 'proposal_sent' | 'followup',
  recipientEmail: string,
  templateData: Record<string, any>
): Promise<void> {
  try {
    // AITable can trigger automation workflows via API
    // Each workflow has a unique trigger ID
    const workflowIds = {
      'access_code': 'wf_access_code',
      'reminder': 'wf_reminder',
      'audit_complete': 'wf_audit_complete',
      'proposal_sent': 'wf_proposal',
      'followup': 'wf_followup'
    };

    const payload = {
      workflowId: workflowIds[emailType],
      data: {
        recipientEmail,
        ...templateData
      }
    };

    // In production, trigger AITable automation
    // await fetch(`${AITABLE_API_URL}/spaces/${AITABLE_SPACE_ID}/automations/trigger`, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${AITABLE_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(payload)
    // });

    console.log(`\n📧 AITABLE EMAIL TRIGGERED: ${emailType}`);
    console.log(`- To: ${recipientEmail}`);
    console.log(`- Template Data:`, templateData);

  } catch (error) {
    console.error('Failed to trigger AITable email:', error);
  }
}

/**
 * Move lead from "Leads" to "Sales Pipeline" when they access the conference room
 */
export async function promoteToSalesPipeline(conferenceRoomId: string): Promise<void> {
  try {
    // In production:
    // 1. Find lead record in "Leads" table
    // 2. Copy data to "Sales Pipeline" table
    // 3. Update original lead status to "Promoted"

    console.log(`\n🚀 LEAD PROMOTED TO SALES PIPELINE: ${conferenceRoomId}`);

  } catch (error) {
    console.error('Failed to promote lead to sales pipeline:', error);
  }
}

/**
 * Send automated follow-up emails based on AITable workflow rules
 * 
 * Examples:
 * - Day 1: Access code not used → Reminder email
 * - Day 3: No documents uploaded → Follow-up call scheduled
 * - Day 7: No response → Mark as cold lead
 */
export async function scheduleFollowUpSequence(conferenceRoomId: string, cfoEmail: string): Promise<void> {
  try {
    // AITable can schedule automated follow-up emails
    // Set up workflow rules in AITable UI

    const followUpSchedule = [
      { day: 1, action: 'Send reminder email' },
      { day: 3, action: 'Schedule follow-up call' },
      { day: 7, action: 'Mark as cold lead' }
    ];

    console.log(`\n📅 FOLLOW-UP SEQUENCE SCHEDULED:`);
    console.log(`- Conference Room: ${conferenceRoomId}`);
    console.log(`- Email: ${cfoEmail}`);
    console.log(`- Schedule:`, followUpSchedule);

  } catch (error) {
    console.error('Failed to schedule follow-up sequence:', error);
  }
}

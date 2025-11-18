/**
 * MissionX API Client
 * Handles authentication and client creation in MissionX
 * 
 * Documentation: https://docs.api.missionx.ai
 * API Base URL: https://open.api.missionx.ai/v2
 * Auth URL: https://open.api.missionx.ai/auth/token
 */

interface MissionXClient {
  customId: string;
  title: string;
  emailDomains?: string[];
  departments?: string[];
}

interface MissionXTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface MissionXClientResponse {
  _id: string;
  customId: string;
  title: string;
  emailDomains?: string[];
  departments?: string[];
  createdAt: string;
  updatedAt: string;
}

/**
 * MissionX API Client Class
 */
export class MissionXAPIClient {
  private clientId: string;
  private clientSecret: string;
  private orgId: string;
  private baseUrl = 'https://open.api.missionx.ai/v2';
  private authUrl = 'https://open.api.missionx.ai/auth/token';
  private accessToken?: string;
  private tokenExpiry?: Date;

  constructor() {
    this.clientId = process.env.MISSIONX_CLIENT_ID || '';
    this.clientSecret = process.env.MISSIONX_CLIENT_SECRET || '';
    this.orgId = process.env.MISSIONX_ORG_ID || '';

    if (!this.clientId || !this.clientSecret || !this.orgId) {
      console.warn('⚠️ MissionX API credentials not configured');
    }
  }

  /**
   * Get OAuth2 access token using client credentials flow
   */
  private async getAccessToken(): Promise<string> {
    // Return cached token if still valid
    if (this.accessToken && this.tokenExpiry && this.tokenExpiry > new Date()) {
      return this.accessToken;
    }

    console.log('🔐 Fetching MissionX access token...');

    const response = await fetch(this.authUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: this.clientId,
        client_secret: this.clientSecret,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to get MissionX access token: ${error}`);
    }

    const data: MissionXTokenResponse = await response.json();
    this.accessToken = data.access_token;
    // Set expiry to 5 minutes before actual expiry for safety
    this.tokenExpiry = new Date(Date.now() + (data.expires_in - 300) * 1000);

    console.log('✅ MissionX access token acquired');
    return this.accessToken;
  }

  /**
   * Create a new client in MissionX
   */
  async createClient(clientData: MissionXClient): Promise<MissionXClientResponse> {
    console.log('📝 Creating MissionX client:', clientData.title);

    const token = await this.getAccessToken();

    const response = await fetch(`${this.baseUrl}/clients`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Org-Id': this.orgId,
      },
      body: JSON.stringify(clientData),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to create MissionX client: ${error}`);
    }

    const createdClient: MissionXClientResponse = await response.json();
    console.log(`✅ MissionX client created: ${createdClient._id}`);

    return createdClient;
  }

  /**
   * Check if a client exists by customId
   */
  async clientExists(customId: string): Promise<boolean> {
    try {
      const token = await this.getAccessToken();

      const response = await fetch(
        `${this.baseUrl}/clients?filter[customId]=${encodeURIComponent(customId)}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Org-Id': this.orgId,
          },
        }
      );

      if (!response.ok) {
        return false;
      }

      const clients = await response.json();
      return Array.isArray(clients) && clients.length > 0;
    } catch (error) {
      console.error('Error checking client existence:', error);
      return false;
    }
  }
}

/**
 * Helper function to create a MissionX client from Stripe payment data
 */
export async function createMissionXClientFromPayment({
  customerEmail,
  companyName,
  stripeCustomerId,
}: {
  customerEmail: string;
  companyName: string;
  stripeCustomerId: string;
}): Promise<MissionXClientResponse | null> {
  try {
    const missionX = new MissionXAPIClient();

    // Check if client already exists
    const exists = await missionX.clientExists(stripeCustomerId);
    if (exists) {
      console.log('ℹ️ MissionX client already exists for:', companyName);
      return null;
    }

    // Extract domain from email
    const emailDomain = customerEmail.split('@')[1];

    // Create client
    const client = await missionX.createClient({
      customId: stripeCustomerId,
      title: companyName,
      emailDomains: [emailDomain],
    });

    console.log(`🎉 MissionX client portal created for ${companyName}`);
    console.log(`📧 Users with @${emailDomain} emails can now access their portal`);

    return client;
  } catch (error) {
    console.error('❌ Failed to create MissionX client:', error);
    return null;
  }
}

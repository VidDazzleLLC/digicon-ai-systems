import React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface PortalLinkEmailProps {
  personalName: string;
  portalLink: string;
  expiresIn: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const PortalLinkEmail = ({
  personalName,
  portalLink,
  expiresIn,
}: PortalLinkEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Your Digicon AI Audit Portal Link</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Text style={heading}>Welcome to Digicon AI Audit Portal</Text>
            <Hr style={hr} />
            <Text style={paragraph}>
              Hi {personalName},
            </Text>
            <Text style={paragraph}>
              Thank you for choosing Digicon AI for your payroll audit. Click the button below to access your secure portal and complete your audit.
            </Text>
            <Section style={buttonContainer}>
              <Button style={button} href={portalLink}>
                Access Portal
              </Button>
            </Section>
            <Hr style={hr} />
            <Text style={paragraph}>
              <strong>Portal Link Expires In:</strong> {expiresIn}
            </Text>
            <Text style={paragraph}>
              If you did not request this portal link, please ignore this email.
            </Text>
            <Text style={footer}>
              © 2025 Digicon AI Systems. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default PortalLinkEmail;

const main = {
  backgroundColor: '#f3f4f6',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#1f2937',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#374151',
};

const buttonContainer = {
  padding: '24px 0 24px',
};

const button = {
  backgroundColor: '#3b82f6',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 20px',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '20px 0',
};

const footer = {
  fontSize: '12px',
  color: '#9ca3af',
  textAlign: 'center' as const,
};

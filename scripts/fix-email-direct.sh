#!/bin/bash
# Direct database fix for email typo
# This script updates the email and triggers a resend

set -e  # Exit on error

AUDIT_ID="cm1dd0h08mhml4t4ju4wsjlxp8"
NEW_EMAIL="connect@viddazzle.com"

echo "🔧 Fixing email typo for audit request $AUDIT_ID..."
echo ""

# Check if psql is available
if ! command -v psql &> /dev/null; then
    echo "❌ psql not found. Please run this from Railway console or install PostgreSQL client."
    echo ""
    echo "Alternative: Run the SQL file directly:"
    echo "  psql \$DATABASE_URL -f scripts/fix-email-direct.sql"
    exit 1
fi

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "❌ DATABASE_URL environment variable not set"
    echo "Please set it or run from Railway console where it's automatically available"
    exit 1
fi

echo "📊 Current record:"
psql "$DATABASE_URL" -c "SELECT id, customerEmail, reportId, status, reportDelivered FROM \"AuditRequest\" WHERE id = '$AUDIT_ID';"

echo ""
echo "🔄 Updating email address..."
psql "$DATABASE_URL" -c "UPDATE \"AuditRequest\" SET \"customerEmail\" = '$NEW_EMAIL', \"updatedAt\" = NOW(), \"reportDelivered\" = false, \"reportDeliveredAt\" = NULL WHERE \"id\" = '$AUDIT_ID';"

echo ""
echo "✅ Updated record:"
psql "$DATABASE_URL" -c "SELECT id, customerEmail, reportId, status, reportDelivered FROM \"AuditRequest\" WHERE id = '$AUDIT_ID';"

echo ""
echo "🎉 Email address updated successfully!"
echo ""
echo "📧 Next: The report needs to be resent manually or via the app"
echo "   Report ID: AUDIT_cm1dd0h08_174d089661218"
echo "   New Email: $NEW_EMAIL"

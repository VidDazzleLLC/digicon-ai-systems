#!/bin/bash

# Test script for Tier 1 Automation System
# Verifies that all endpoints are created and accessible

echo "🧪 Testing Tier 1 Automation System"
echo "===================================="
echo ""

BASE_URL="http://localhost:3000"

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counter for tests
TOTAL_TESTS=0
PASSED_TESTS=0

# Function to test endpoint existence
test_endpoint() {
    local method=$1
    local path=$2
    local description=$3
    
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    
    echo -n "Testing: $description... "
    
    # We just check if the route exists (not 404)
    # Most will return 401/400 without proper auth, which is expected
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" -X $method "$BASE_URL$path" 2>/dev/null)
    
    if [ "$STATUS" != "404" ]; then
        echo -e "${GREEN}✓ PASS${NC} (HTTP $STATUS)"
        PASSED_TESTS=$((PASSED_TESTS + 1))
    else
        echo -e "${RED}✗ FAIL${NC} (HTTP $STATUS - Not Found)"
    fi
}

echo "1. Testing Webhook Endpoints"
echo "-----------------------------"
test_endpoint "POST" "/api/automation/payroll/webhook" "Payroll Webhook"
test_endpoint "POST" "/api/automation/hris/webhook" "HRIS Webhook"
test_endpoint "POST" "/api/automation/erp/webhook" "ERP Webhook"
test_endpoint "POST" "/api/automation/crm/webhook" "CRM Webhook"
test_endpoint "POST" "/api/automation/compliance/webhook" "Compliance Webhook"
test_endpoint "POST" "/api/automation/ai-infrastructure/webhook" "AI Infrastructure Webhook"
echo ""

echo "2. Testing API Key Management"
echo "------------------------------"
test_endpoint "POST" "/api/automation/keys/generate" "Generate API Key"
test_endpoint "POST" "/api/automation/keys/revoke" "Revoke API Key"
echo ""

echo "3. Testing Dashboard Data APIs"
echo "-------------------------------"
test_endpoint "GET" "/api/automation/payroll/dashboard/data?companyId=test" "Payroll Dashboard API"
test_endpoint "GET" "/api/automation/hris/dashboard/data?companyId=test" "HRIS Dashboard API"
test_endpoint "GET" "/api/automation/erp/dashboard/data?companyId=test" "ERP Dashboard API"
test_endpoint "GET" "/api/automation/crm/dashboard/data?companyId=test" "CRM Dashboard API"
test_endpoint "GET" "/api/automation/compliance/dashboard/data?companyId=test" "Compliance Dashboard API"
test_endpoint "GET" "/api/automation/ai-infrastructure/dashboard/data?companyId=test" "AI Infrastructure Dashboard API"
echo ""

echo "4. Testing Dashboard Pages"
echo "---------------------------"
test_endpoint "GET" "/automation/payroll/dashboard" "Payroll Dashboard Page"
test_endpoint "GET" "/automation/hris/dashboard" "HRIS Dashboard Page"
test_endpoint "GET" "/automation/erp/dashboard" "ERP Dashboard Page"
test_endpoint "GET" "/automation/crm/dashboard" "CRM Dashboard Page"
test_endpoint "GET" "/automation/compliance/dashboard" "Compliance Dashboard Page"
test_endpoint "GET" "/automation/ai-infrastructure/dashboard" "AI Infrastructure Dashboard Page"
echo ""

echo "===================================="
echo "Test Results"
echo "===================================="
echo -e "Total Tests: $TOTAL_TESTS"
echo -e "Passed: ${GREEN}$PASSED_TESTS${NC}"
echo -e "Failed: ${RED}$((TOTAL_TESTS - PASSED_TESTS))${NC}"
echo ""

if [ $PASSED_TESTS -eq $TOTAL_TESTS ]; then
    echo -e "${GREEN}✓ ALL TESTS PASSED!${NC}"
    exit 0
else
    echo -e "${YELLOW}⚠ Some tests failed. Check output above.${NC}"
    exit 1
fi

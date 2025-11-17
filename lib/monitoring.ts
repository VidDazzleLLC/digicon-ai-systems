// Monitoring and Metrics Collection
// Tracks application performance and health metrics

import { logger } from './logger';

interface Metrics {
  requests: {
    total: number;
    bySystem: Record<string, number>;
    byEndpoint: Record<string, number>;
  };
  errors: {
    total: number;
    byType: Record<string, number>;
  };
  performance: {
    responseTimes: number[];
    slowRequests: number;
  };
  llm: {
    apiCalls: number;
    byProvider: Record<string, number>;
  };
  stripe: {
    transactions: number;
    totalAmount: number;
  };
  database: {
    queries: number;
    queryTimes: number[];
  };
  health: {
    checks: number;
    lastStatus: string;
    statusHistory: Array<{ status: string; timestamp: string }>;
  };
}

class MonitoringService {
  private metrics: Metrics;
  private readonly MAX_RESPONSE_TIMES = 1000; // Keep last 1000 response times
  private readonly MAX_QUERY_TIMES = 1000;
  private readonly MAX_STATUS_HISTORY = 100;

  constructor() {
    this.metrics = {
      requests: {
        total: 0,
        bySystem: {},
        byEndpoint: {},
      },
      errors: {
        total: 0,
        byType: {},
      },
      performance: {
        responseTimes: [],
        slowRequests: 0,
      },
      llm: {
        apiCalls: 0,
        byProvider: {},
      },
      stripe: {
        transactions: 0,
        totalAmount: 0,
      },
      database: {
        queries: 0,
        queryTimes: [],
      },
      health: {
        checks: 0,
        lastStatus: 'unknown',
        statusHistory: [],
      },
    };
  }

  // Track incoming request
  recordRequest(endpoint: string, system?: string) {
    this.metrics.requests.total++;
    
    // Track by endpoint
    if (!this.metrics.requests.byEndpoint[endpoint]) {
      this.metrics.requests.byEndpoint[endpoint] = 0;
    }
    this.metrics.requests.byEndpoint[endpoint]++;
    
    // Track by system if provided
    if (system) {
      if (!this.metrics.requests.bySystem[system]) {
        this.metrics.requests.bySystem[system] = 0;
      }
      this.metrics.requests.bySystem[system]++;
    }
    
    logger.debug('Request recorded', { endpoint, system });
  }

  // Track error
  recordError(errorType: string, error?: Error) {
    this.metrics.errors.total++;
    
    if (!this.metrics.errors.byType[errorType]) {
      this.metrics.errors.byType[errorType] = 0;
    }
    this.metrics.errors.byType[errorType]++;
    
    logger.error('Error recorded', { errorType, error: error?.message });
  }

  // Track response time
  recordResponseTime(durationMs: number) {
    this.metrics.performance.responseTimes.push(durationMs);
    
    // Keep only last N response times to prevent memory issues
    if (this.metrics.performance.responseTimes.length > this.MAX_RESPONSE_TIMES) {
      this.metrics.performance.responseTimes.shift();
    }
    
    // Track slow requests (>2 seconds)
    if (durationMs > 2000) {
      this.metrics.performance.slowRequests++;
      logger.warn('Slow request detected', { duration: `${durationMs}ms` });
    }
  }

  // Track LLM API call
  recordLLMCall(provider: string) {
    this.metrics.llm.apiCalls++;
    
    if (!this.metrics.llm.byProvider[provider]) {
      this.metrics.llm.byProvider[provider] = 0;
    }
    this.metrics.llm.byProvider[provider]++;
    
    logger.debug('LLM API call recorded', { provider });
  }

  // Track Stripe transaction
  recordStripeTransaction(amount: number) {
    this.metrics.stripe.transactions++;
    this.metrics.stripe.totalAmount += amount;
    
    logger.info('Stripe transaction recorded', { amount });
  }

  // Track database query
  recordDatabaseQuery(durationMs: number) {
    this.metrics.database.queries++;
    this.metrics.database.queryTimes.push(durationMs);
    
    // Keep only last N query times
    if (this.metrics.database.queryTimes.length > this.MAX_QUERY_TIMES) {
      this.metrics.database.queryTimes.shift();
    }
    
    // Warn on slow queries (>500ms)
    if (durationMs > 500) {
      logger.warn('Slow database query detected', { duration: `${durationMs}ms` });
    }
  }

  // Track health check
  recordHealthCheck(status: string) {
    this.metrics.health.checks++;
    this.metrics.health.lastStatus = status;
    
    // Add to history
    this.metrics.health.statusHistory.push({
      status,
      timestamp: new Date().toISOString(),
    });
    
    // Keep only last N status history entries
    if (this.metrics.health.statusHistory.length > this.MAX_STATUS_HISTORY) {
      this.metrics.health.statusHistory.shift();
    }
  }

  // Calculate average response time
  private getAverageResponseTime(): number {
    const times = this.metrics.performance.responseTimes;
    if (times.length === 0) return 0;
    
    const sum = times.reduce((a, b) => a + b, 0);
    return Math.round(sum / times.length);
  }

  // Calculate average database query time
  private getAverageDatabaseQueryTime(): number {
    const times = this.metrics.database.queryTimes;
    if (times.length === 0) return 0;
    
    const sum = times.reduce((a, b) => a + b, 0);
    return Math.round(sum / times.length);
  }

  // Calculate error rate
  private getErrorRate(): number {
    if (this.metrics.requests.total === 0) return 0;
    return Math.round((this.metrics.errors.total / this.metrics.requests.total) * 100 * 100) / 100;
  }

  // Get health metrics for health endpoint
  getHealthMetrics() {
    return {
      requestCount: this.metrics.requests.total,
      errorCount: this.metrics.errors.total,
      averageResponseTime: `${this.getAverageResponseTime()}ms`,
    };
  }

  // Get all metrics for dashboard
  getMetrics() {
    return {
      requests: {
        total: this.metrics.requests.total,
        bySystem: this.metrics.requests.bySystem,
        byEndpoint: this.metrics.requests.byEndpoint,
      },
      errors: {
        total: this.metrics.errors.total,
        rate: `${this.getErrorRate()}%`,
        byType: this.metrics.errors.byType,
      },
      performance: {
        averageResponseTime: `${this.getAverageResponseTime()}ms`,
        slowRequests: this.metrics.performance.slowRequests,
      },
      llm: {
        totalCalls: this.metrics.llm.apiCalls,
        byProvider: this.metrics.llm.byProvider,
      },
      stripe: {
        transactions: this.metrics.stripe.transactions,
        totalAmount: this.metrics.stripe.totalAmount,
      },
      database: {
        queries: this.metrics.database.queries,
        averageQueryTime: `${this.getAverageDatabaseQueryTime()}ms`,
      },
      health: {
        checksPerformed: this.metrics.health.checks,
        lastStatus: this.metrics.health.lastStatus,
        recentHistory: this.metrics.health.statusHistory.slice(-10),
      },
    };
  }

  // Reset metrics (useful for testing or periodic reset)
  resetMetrics() {
    this.metrics = {
      requests: {
        total: 0,
        bySystem: {},
        byEndpoint: {},
      },
      errors: {
        total: 0,
        byType: {},
      },
      performance: {
        responseTimes: [],
        slowRequests: 0,
      },
      llm: {
        apiCalls: 0,
        byProvider: {},
      },
      stripe: {
        transactions: 0,
        totalAmount: 0,
      },
      database: {
        queries: 0,
        queryTimes: [],
      },
      health: {
        checks: 0,
        lastStatus: 'unknown',
        statusHistory: [],
      },
    };
    
    logger.info('Metrics reset');
  }

  // Get dashboard data
  getDashboardData() {
    const metrics = this.getMetrics();
    
    return {
      summary: {
        totalRequests: metrics.requests.total,
        totalErrors: metrics.errors.total,
        errorRate: metrics.errors.rate,
        averageResponseTime: metrics.performance.averageResponseTime,
        healthStatus: metrics.health.lastStatus,
      },
      systems: Object.entries(metrics.requests.bySystem).map(([system, count]) => ({
        name: system,
        requests: count,
      })),
      endpoints: Object.entries(metrics.requests.byEndpoint)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10) // Top 10 endpoints
        .map(([endpoint, count]) => ({
          endpoint,
          requests: count,
        })),
      llmProviders: Object.entries(metrics.llm.byProvider).map(([provider, count]) => ({
        provider,
        calls: count,
      })),
      errors: Object.entries(metrics.errors.byType)
        .sort((a, b) => b[1] - a[1])
        .map(([type, count]) => ({
          type,
          count,
        })),
    };
  }
}

// Export singleton instance
export const metrics = new MonitoringService();

// Export types
export type { Metrics };

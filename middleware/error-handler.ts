// Centralized Error Handler Middleware
// Catches errors, logs them, and returns consistent error responses

import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';
import { metrics } from '@/lib/monitoring';

export interface ErrorContext {
  endpoint?: string;
  method?: string;
  userId?: string;
  ip?: string;
  userAgent?: string;
}

export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;
  context?: ErrorContext;

  constructor(
    message: string,
    statusCode: number = 500,
    isOperational: boolean = true,
    context?: ErrorContext
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.context = context;
    
    Error.captureStackTrace(this, this.constructor);
  }
}

// Error types
export class ValidationError extends AppError {
  constructor(message: string, context?: ErrorContext) {
    super(message, 400, true, context);
    this.name = 'ValidationError';
  }
}

export class NotFoundError extends AppError {
  constructor(message: string, context?: ErrorContext) {
    super(message, 404, true, context);
    this.name = 'NotFoundError';
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string, context?: ErrorContext) {
    super(message, 401, true, context);
    this.name = 'UnauthorizedError';
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string, context?: ErrorContext) {
    super(message, 403, true, context);
    this.name = 'ForbiddenError';
  }
}

export class ConflictError extends AppError {
  constructor(message: string, context?: ErrorContext) {
    super(message, 409, true, context);
    this.name = 'ConflictError';
  }
}

export class RateLimitError extends AppError {
  constructor(message: string, context?: ErrorContext) {
    super(message, 429, true, context);
    this.name = 'RateLimitError';
  }
}

export class ExternalServiceError extends AppError {
  constructor(message: string, context?: ErrorContext) {
    super(message, 502, true, context);
    this.name = 'ExternalServiceError';
  }
}

// Format error response (don't expose sensitive details in production)
function formatErrorResponse(error: Error | AppError, isDevelopment: boolean) {
  const isAppError = error instanceof AppError;
  
  const response: {
    error: string;
    message: string;
    statusCode?: number;
    stack?: string;
    context?: ErrorContext;
  } = {
    error: isAppError ? error.name : 'InternalServerError',
    message: isAppError ? error.message : 'An unexpected error occurred',
  };
  
  // Add additional details in development
  if (isDevelopment) {
    response.statusCode = isAppError ? error.statusCode : 500;
    response.stack = error.stack;
    
    if (isAppError && error.context) {
      response.context = error.context;
    }
  }
  
  return response;
}

// Main error handler function
export function handleError(error: Error | AppError, context?: ErrorContext): NextResponse {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isAppError = error instanceof AppError;
  
  // Determine status code
  const statusCode = isAppError ? error.statusCode : 500;
  
  // Log error with context
  logger.error('Error occurred', {
    error: error.message,
    name: error.name,
    stack: error.stack,
    statusCode,
    context: isAppError ? error.context : context,
    isOperational: isAppError ? error.isOperational : false,
  });
  
  // Track error in metrics
  metrics.recordError(error.name || 'UnknownError', error);
  
  // Format response
  const errorResponse = formatErrorResponse(error, isDevelopment);
  
  return NextResponse.json(errorResponse, { status: statusCode });
}

// Async error wrapper for API routes
export function asyncHandler(
  handler: (req: Request, context?: any) => Promise<NextResponse>
) {
  return async (req: Request, context?: any): Promise<NextResponse> => {
    try {
      return await handler(req, context);
    } catch (error) {
      return handleError(error as Error);
    }
  };
}

// Error boundary for catching unhandled errors
export function setupErrorHandlers() {
  // Handle uncaught exceptions
  process.on('uncaughtException', (error: Error) => {
    logger.error('Uncaught Exception', {
      error: error.message,
      stack: error.stack,
    });
    
    metrics.recordError('UncaughtException', error);
    
    // Give logger time to write before exiting
    setTimeout(() => {
      process.exit(1);
    }, 1000);
  });
  
  // Handle unhandled promise rejections
  process.on('unhandledRejection', (reason: any) => {
    const error = reason instanceof Error ? reason : new Error(String(reason));
    
    logger.error('Unhandled Rejection', {
      error: error.message,
      stack: error.stack,
    });
    
    metrics.recordError('UnhandledRejection', error);
  });
  
  logger.info('Error handlers initialized');
}

// Export utility for creating errors with context
export function createError(
  message: string,
  statusCode: number = 500,
  context?: ErrorContext
): AppError {
  return new AppError(message, statusCode, true, context);
}

// Export all error handlers
export default {
  handleError,
  asyncHandler,
  setupErrorHandlers,
  createError,
  AppError,
  ValidationError,
  NotFoundError,
  UnauthorizedError,
  ForbiddenError,
  ConflictError,
  RateLimitError,
  ExternalServiceError,
};

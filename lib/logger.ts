// Winston Logger Configuration
// Structured logging for development and production

import winston from 'winston';
import path from 'path';

// Define log levels
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// Define colors for each level
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'blue',
};

// Tell winston about custom colors
winston.addColors(colors);

// Determine log level based on environment
const level = () => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'info';
};

// Define custom format for console output
const consoleFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => {
      const { timestamp, level, message, ...meta } = info;
      const metaStr = Object.keys(meta).length ? JSON.stringify(meta, null, 2) : '';
      return `${timestamp} [${level}]: ${message} ${metaStr}`;
    }
  )
);

// Define format for file output (JSON for easier parsing)
const fileFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.json()
);

// Create transports array
const transports: winston.transport[] = [
  // Console output (always enabled)
  new winston.transports.Console({
    format: consoleFormat,
  }),
];

// Add file transports in production
if (process.env.NODE_ENV === 'production') {
  // Error log file
  transports.push(
    new winston.transports.File({
      filename: path.join(process.cwd(), 'logs', 'error.log'),
      level: 'error',
      format: fileFormat,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    })
  );

  // Combined log file
  transports.push(
    new winston.transports.File({
      filename: path.join(process.cwd(), 'logs', 'combined.log'),
      format: fileFormat,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    })
  );
}

// Create the logger instance
export const logger = winston.createLogger({
  level: level(),
  levels,
  transports,
  // Don't exit on handled exceptions
  exitOnError: false,
});

// Handle uncaught exceptions
logger.exceptions.handle(
  new winston.transports.File({
    filename: path.join(process.cwd(), 'logs', 'exceptions.log'),
  })
);

// Handle unhandled promise rejections
logger.rejections.handle(
  new winston.transports.File({
    filename: path.join(process.cwd(), 'logs', 'rejections.log'),
  })
);

// Log startup message
logger.info('Logger initialized', {
  environment: process.env.NODE_ENV || 'development',
  level: level(),
});

// Export convenience methods
export const logInfo = (message: string, meta?: object) => {
  logger.info(message, meta);
};

export const logError = (message: string, error?: Error | object) => {
  if (error instanceof Error) {
    logger.error(message, {
      error: error.message,
      stack: error.stack,
    });
  } else {
    logger.error(message, error);
  }
};

export const logWarn = (message: string, meta?: object) => {
  logger.warn(message, meta);
};

export const logDebug = (message: string, meta?: object) => {
  logger.debug(message, meta);
};

export const logHttp = (message: string, meta?: object) => {
  logger.http(message, meta);
};

// Request logging helper
export const logRequest = (req: {
  method: string;
  url: string;
  ip?: string;
  userAgent?: string;
}) => {
  logger.http('Incoming request', {
    method: req.method,
    url: req.url,
    ip: req.ip,
    userAgent: req.userAgent,
  });
};

// Performance logging helper
export const logPerformance = (operation: string, durationMs: number) => {
  logger.info('Performance metric', {
    operation,
    duration: `${durationMs}ms`,
    slow: durationMs > 1000, // Flag slow operations
  });
};

export default logger;

# Multi-stage Dockerfile to bake Prisma engines into the image.
# Build stage: Installs dependencies, generates Prisma client (downloads engines), and builds
FROM node:20-bullseye AS builder
WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json* ./

# Install dev deps so prisma generate can run
RUN npm install --production=false

# Copy Prisma schema and source
COPY prisma ./prisma
COPY . .

# Generate Prisma client and download engine binaries for specified binaryTargets
RUN npx prisma generate

# Build the application (Next.js)
RUN npm run build

# Production stage: copy only what's needed
FROM node:20-bullseye-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production

# Copy node_modules (including generated Prisma client & engines) and built app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]

# ── Stage 1: Build ────────────────────────────────────
FROM node:20-alpine AS build

WORKDIR /app

# Copy only package files first — caches npm install layer
COPY package.json package-lock.json* ./

# Use npm ci for faster, deterministic installs
RUN npm ci

# Copy source and build
COPY . .

ARG VITE_OPENAI_API_KEY
ARG VITE_API_URL
ENV VITE_OPENAI_API_KEY=$VITE_OPENAI_API_KEY
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# ── Stage 2: Serve ────────────────────────────────────
FROM nginx:alpine

# Copy custom nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files
COPY --from=build /app/dist/visions.shkrsltn/browser /usr/share/nginx/html

# Railway injects PORT env var
ENV PORT=3000
EXPOSE 3000

# nginx with envsubst for dynamic port
CMD sh -c "sed -i \"s/\${PORT}/$PORT/g\" /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"

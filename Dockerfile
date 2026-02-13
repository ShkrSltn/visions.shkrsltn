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

RUN VITE_OPENAI_API_KEY=$VITE_OPENAI_API_KEY \
    VITE_API_URL=$VITE_API_URL \
    npm run build

# ── Stage 2: Serve ────────────────────────────────────
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/visions.shkrsltn/browser /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]

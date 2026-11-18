# syntax=docker/dockerfile:1
# Production build of the institutional site. The final image only holds the static files
# under /web: mnc-back/deploy/scripts/deploy.sh copies them out with `docker cp` and Caddy
# serves them at the root of the domain. Nothing runs from it.

FROM node:22-slim AS build

WORKDIR /app

RUN npm install -g pnpm@10.34.3

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

# "false" removes the preview notice (src/config.ts). Vite inlines it at build time.
ARG VITE_SHOW_PREVIEW_NOTICE=true
ENV VITE_SHOW_PREVIEW_NOTICE=$VITE_SHOW_PREVIEW_NOTICE
RUN pnpm build

FROM scratch
COPY --from=build /app/dist /web

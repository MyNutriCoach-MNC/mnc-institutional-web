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

# Images live in Git LFS. A checkout without LFS leaves 131-byte pointer files that build
# fine but render as broken images: fail the build instead.
# (grep exits 2 when a directory is missing, so check its output, not its status.)
RUN pointers=$(grep -rl "^version https://git-lfs.github.com/spec/v1" src public 2>/dev/null || true); \
    if [ -n "$pointers" ]; then \
      echo "Git LFS pointer files found, check out with LFS enabled:" >&2; \
      echo "$pointers" >&2; \
      exit 1; \
    fi

# "false" removes the preview notice (src/config.ts). Vite inlines it at build time.
ARG VITE_SHOW_PREVIEW_NOTICE=true
ENV VITE_SHOW_PREVIEW_NOTICE=$VITE_SHOW_PREVIEW_NOTICE
RUN pnpm build

FROM scratch
COPY --from=build /app/dist /web

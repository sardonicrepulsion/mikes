FROM caddy:2-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY . /srv/

RUN rm -f /srv/Dockerfile /srv/nginx.conf /srv/PROJECTS.md /srv/.gitignore /srv/README.md /srv/PROJECT_SUMMARY.txt /srv/package-lock.json /srv/screenshot.js /srv/Caddyfile

HEALTHCHECK --interval=10s --timeout=3s --start-period=5s \
    CMD wget -qO- http://127.0.0.1/health || exit 1

EXPOSE 80

FROM node:20-alpine AS dependence
WORKDIR /app
RUN corepack enable
COPY ["package.json", "pnpm-lock.yaml", "/app/"]
VOLUME [ "/app/node_modules" ]
RUN pnpm install
EXPOSE 8080

FROM dependence AS dev
VOLUME [ "/app" ]
CMD [ "pnpm", "dev" ]


FROM dependence
COPY . .
CMD [ "pnpm", "prod" ]


FROM node:lts-alpine as Builder

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY . .

RUN npm install --production

RUN npm run build

FROM node:lts-alpine as Runner

# nasledujici prikaz nainstaluje bash - alpine ho samo o sobe nema
RUN apk add --no-cache bash

WORKDIR /usr/src/app

COPY --from=Builder /usr/src/app/build ./

RUN npm install -g serve

USER nobody

ENTRYPOINT ["serve", "-s", "."]



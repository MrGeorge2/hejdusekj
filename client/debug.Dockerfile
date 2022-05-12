FROM node:lts-alpine

ENV NODE_ENV=debug

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN chown -R node /usr/src/app

EXPOSE 3000

USER node

ENTRYPOINT [ "npm" ]

CMD ["start"]

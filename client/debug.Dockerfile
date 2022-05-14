FROM node:lts-alpine

ENV NODE_ENV=debug

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm" ]

CMD ["start"]
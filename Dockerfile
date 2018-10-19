FROM node:8.12.0-alpine

WORKDIR /srv/ui

ADD ./ ./

RUN npm install
RUN npm run build

CMD npm run deploy

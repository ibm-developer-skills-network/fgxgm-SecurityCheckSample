FROM node:22.5.1-slim

RUN npm install -g npm@latest

ADD package.json .
ADD index.js .
ADD build .
COPY . .
RUN npm install

EXPOSE 8080

CMD [ "node", "index.js" ]

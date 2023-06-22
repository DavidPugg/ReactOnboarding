FROM node:14.19.0-alpine

ENV PORT 3000

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 3000

CMD ["yarn", "start"]
FROM node:14.19.0-alpine

ENV PORT 3000

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
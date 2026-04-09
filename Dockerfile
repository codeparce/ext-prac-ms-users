FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

COPY .env ./

RUN npm i 

COPY dist ./dist

CMD ["npm", "run", "start:prod"]

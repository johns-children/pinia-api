FROM node:lts-alpine

WORKDIR /app

RUN apk update && \
  apk upgrade && \
  apk add git

COPY package*.json ./
RUN npm install
COPY . .
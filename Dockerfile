ARG NODE_VERSION=24.14.0-alpine

FROM node:${NODE_VERSION} AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install  
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
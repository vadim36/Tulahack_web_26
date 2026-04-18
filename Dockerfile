ARG NODE_VERSION=24.14.0-alpine

FROM node:${NODE_VERSION} AS build
WORKDIR /app
COPY package*.json ./

RUN npm ci --only=production && npm cache clean --force

COPY . .
RUN npm run build

FROM nginx:alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
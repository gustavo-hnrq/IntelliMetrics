FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm ci --silent

COPY . ./

RUN npm run build

# server
FROM nginx:stable-alpine

COPY --from=build ./app/dist /usr/share/nginx/html
COPY ./docker/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
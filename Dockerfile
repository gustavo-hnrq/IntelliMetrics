FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./

# Forçar a instalação completa das dependências
RUN npm ci --silent
RUN npm install --force

COPY . ./

# Verificar os arquivos antes da build
RUN ls -la /app

RUN npm run build

# server
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY ./docker/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]

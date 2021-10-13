# Stage 1
FROM node:14.15-alpine as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app
WORKDIR /ng-app

COPY . .
RUN npm run build

FROM nginx:1.13.12-alpine
COPY --from=node /ng-app/dist/redSocial /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
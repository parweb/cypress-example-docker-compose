FROM node:15 as build

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . ./

RUN yarn build

FROM nginx:1.19-alpine

COPY --from=build /app/build /usr/share/nginx/html/plop

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 7777

CMD ["nginx", "-g", "daemon off;"]
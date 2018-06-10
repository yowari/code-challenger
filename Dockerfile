FROM node:8-alpine as builder

COPY . /code-challenger

WORKDIR /code-challenger

RUN npm install

RUN npm run build.prod

FROM nginx

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /code-challenger/dist/code-challenger /usr/share/nginx/html

FROM node:lts-slim

WORKDIR /app/articlesearch.neering.cl

COPY package*.json .
RUN npm i

COPY . .
RUN npm run build

EXPOSE 8080
CMD [ "npm", "run", "preview", "--", "--host=0.0.0.0", "--port=8080" ]

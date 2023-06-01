FROM node:latest

WORKDIR /usr/src/app
COPY ./package*.json ./

RUN npm install \
&& npm install express --save \
&& npm install mysql --save

COPY . .

EXPOSE 3000
CMD [ "node", "index.js"]
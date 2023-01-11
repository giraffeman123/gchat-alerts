FROM node:12.18.1
COPY . .
RUN npm i express
RUN npm i express-validator
RUN npm i axios@0.27.2
RUN npm i node-fetch
#RUN npm install prom-client
RUN npm i querystring
RUN npm i dotenv
#RUN npm i request-ip
EXPOSE 80
CMD ["node", "index.js"]

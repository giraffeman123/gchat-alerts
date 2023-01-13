FROM node:12.18.1
COPY . .
RUN npm i express
RUN npm i express-validator
RUN npm i axios@0.27.2
RUN npm i dotenv
RUN npm i log4js
RUN npm i ip
#RUN npm install prom-client
#RUN npm i request-ip
EXPOSE 80
CMD ["node", "index.js"]

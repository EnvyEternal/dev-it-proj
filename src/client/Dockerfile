FROM node:14.16.1-alpine3.13

RUN mkdir client
WORKDIR client
COPY . .
RUN npm install
EXPOSE 3000
CMD npm run start
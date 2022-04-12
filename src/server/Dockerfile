FROM node:14-stretch
WORKDIR ./server
COPY package*.json ./
RUN npm install
RUN npm rebuild bcrypt --build-from-source
COPY . .
EXPOSE 5001

CMD cd ./db npx sequelize db:migrate
CMD cd ./db npx sequelize db:seed:all
CMD npm run start

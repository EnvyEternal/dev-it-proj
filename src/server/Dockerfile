<<<<<<< HEAD
FROM node:14-stretch
=======
FROM arm64v8/node
>>>>>>> 724c177de1b85ace18c14146d510dde4e594f803
WORKDIR ./server
COPY package*.json ./
RUN npm install
RUN npm rebuild bcrypt --build-from-source
COPY . .
EXPOSE 5001
<<<<<<< HEAD

CMD cd ./db npx sequelize db:migrate
CMD cd ./db npx sequelize db:seed:all
CMD npm run start
=======
CMD npm run start
>>>>>>> 724c177de1b85ace18c14146d510dde4e594f803

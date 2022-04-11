FROM arm64v8/node
WORKDIR ./server
COPY package*.json ./
RUN npm install
RUN npm rebuild bcrypt --build-from-source
COPY . .
EXPOSE 5001
CMD npm run start
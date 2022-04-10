const express = require('express');
const { Rss, RssPusher } = require('../rss');
const router = require('../routers/router')
let cron = require('node-cron');
const cookieParser = require("cookie-parser");
const cors = require('cors')


const PORT = process.env.PORT || 5001;
const app = express();
app.use(cookieParser())

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "http://localhost:3000");
  response.header("Access-Control-Allow-Headers","*")
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.header("Access-Control-Allow-Credentials","*")
  response.header("Access-Control-Allow-Credentials", true)
  response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD, PATCH')
  next();
});

app.use(express.json())
app.use('/api', router)


app.use(cors({
  origin:'http://localhost:3000',
  credentials: true
}))


cron.schedule('* * * * *', () => {
  console.log('Parsing RSS:');
  RssPusher()
})

app.listen(PORT,() =>
  console.log(`App listening ${PORT}`)
);


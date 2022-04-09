const jwt = require("jsonwebtoken");
const TOKEN_KEY = require('../../constants/index')

exports.cookieJwtAuth = async (req, res, next) => {
  const {body} = req
  const token = body.cookies.token;
  try {
    const data = jwt.verify(token, `${TOKEN_KEY}`);
    if(data){
      console.log(data)
    res.status(200).send(data)
    }
  } catch (err) {
    res.clearCookie("token");
    res.status(401)
  }
};
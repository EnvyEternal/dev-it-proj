const jwt = require("jsonwebtoken");
const TOKEN_KEY = require('../../constants/index')
const {Admin} = require('../../db/models')

exports.cookieJwtAuth = async (req, res, next) => {
  const {body} = req
  const token = req.cookies.CookiesToken

  try {
    const data = jwt.verify(token, `${TOKEN_KEY}`);
    if(data){
      const id = data.id
      const find = await Admin.findOne({ where: { id: id}})
      if(find.id === id) {
        res.status(200).send(data)
      }
    }
  } catch (err) {
    res.clearCookie("token");
    res.status(401)
  }
};
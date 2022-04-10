const jwt = require("jsonwebtoken");
const TOKEN_KEY = require('../../constants/index')

exports.checkCookie = async (req, res, next) => {
    const token = req.cookies.CookiesToken
    try {
        const check = await jwt.verify(token, `${TOKEN_KEY}`)
        if(check){
            next()
        }
    } catch (e) {
        res.status(400).clearCookie("CookiesToken")
    }
}
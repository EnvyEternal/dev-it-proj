const jwt = require("jsonwebtoken");
const TOKEN_KEY = require('../../constants/index')

exports.checkAdmin = async (req, res, next) => {
    const token = req.cookies.CookiesToken

    try {
        const check = await jwt.verify(token, `${TOKEN_KEY}`)
        if(check.role === 'admin'){
            next()
        }
    } catch (e) {
        res.status(400)
    }
}
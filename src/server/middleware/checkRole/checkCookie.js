const jwt = require("jsonwebtoken");
const TOKEN_KEY = require('../../constants/index')
const {Admin} = require('../../db/models')

exports.checkCookie = async (req, res, next) => {
    const token = req.cookies.CookiesToken
    try {
        const check = await jwt.verify(token, `${TOKEN_KEY}`)
        if(check){
            const id = check.id
            const find = await Admin.findOne({ where: { id: id}})
            if(find.id === id && find.role === check.role) {
                next()
            }
        }
    } catch (e) {
        res.status(400).clearCookie("CookiesToken")
    }
}
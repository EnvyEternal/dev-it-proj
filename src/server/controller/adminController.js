const {Admin, RefreshToken} = require('../db/models')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const TOKEN_KEY = require('../constants/index');
const cookieJwtAuth = require('../middleware/authentication/cookieJwtAuth')

module.exports.createAdmin = async(req, res)=>{
    const { body } = req
    try{
        const create = await Admin.create(body)
        if(create){
           return res.status(200).send(create)
        }
    }catch(e){
        res.status(500).send("User already exists");
    }
}

module.exports.getAdmin = async(req, res) =>{
    const { body } = req
    try {
        const admin = await Admin.findAll({
            where: {
              login: body.login
            }
        })
        if (admin) {
                const checkPass = bcrypt.compareSync(body.password, admin[0].password)
                const role = admin[0].role
                const adminId = admin[0].id
                const ad = admin[0].login
                if(checkPass){
                    const token = jwt.sign({
                        login: ad,
                        role
                      }, `${TOKEN_KEY}`, { expiresIn: "1hr" })
                      if(token){
                    return res.status(200).cookie("Cookies", token).send({checkPass, login: ad, role, token})
                    }
                }else{
                    return res.status(400).send('Wrong data')
                }
            }
        }catch(e){
            res.status(501).send("Wrong Data");
        }
}

module.exports.logOut = async(req, res) =>{
    const { body } = req
    try{
        const token = await RefreshToken.destroy({
            where: {
              adminId : body.adminId
            }
        })
        if(token){
        res.status(200).send('token')}
    }catch(e){
        res.status(400).send("Error")
    }
}

module.exports.check = async(req,res)=>{
    const {body} = req
    const token = body.cookies.token
    console.log('Cookies: ', body.cookies.token)
  try {
    res.status(200).send('Ok')
  } catch (err) {
    //res.clearCookie("token");
    console.log(err)
  }

}
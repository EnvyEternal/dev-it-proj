const {Admin} = require('../db/models')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const TOKEN_KEY = require('../constants/index');

module.exports.createAdmin = async(req, res)=>{
    const { data } = req.body

    try{
        const create = await Admin.create(data)
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
                        role,
                        id: adminId
                      }, `${TOKEN_KEY}`, { expiresIn: "1d" })
                      if(token){
                    return res.status(200).cookie("CookiesToken", token).send({checkPass, login: ad, role})
                    }
                }else{
                    return res.status(400).send('Wrong data')
                }
            }
        }catch(e){
            res.status(401).send("Wrong Data");
        }
}

module.exports.getAllModerator = async (req, res)=>{
    try{
        const allModderator = await Admin.findAll({attributes: { exclude: ['password','updatedAt'] }})
        if(allModderator){
            res.status(200).send(allModderator)
        }
    }catch(err){
        res.status(401)
    }
}

module.exports.deleteModerator = async  (req, res) =>{
    const {params: {id}} = req
    try {
        const deleteUser = await Admin.destroy({where: {id: id}})
        if(deleteUser){
            res.status(200)
        }
    }catch (e){
        res.status(401)
    }
}
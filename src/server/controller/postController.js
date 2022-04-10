const {Rsses} = require('../db/models')
const TOKEN_KEY = require('../constants/index');
const jwt = require("jsonwebtoken");
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports.getAll = async (req, res)=>{
    const {params: {pageId}} = req
    const {phrase} = req.query
    const cat = req.query.cat || []

    try{
        const allRss = await Rsses.findAll({limit: 5, order:[['createdAt', 'DESC']], offset: (pageId - 1)*5, where:{categories: {[Op.contains]: cat},title: {[Op.like]: '%'+phrase+'%'}} })//where:{title: {[Op.like]: '%'+req.query.phrase+'%'}}
        if(allRss){
            return res.status(200).send(allRss)
        }
    }catch(e){
        console.log('bad')
    }
}

module.exports.delNews = async (req, res) =>{
    const {params: {idNews}} = req
    try{
        const del = await Rsses.destroy({where: {id: idNews}})
            if(del) {
                res.status(200).send('Destroy')
            }
    }catch(e){
        res.status(401)
    }
}

module.exports.updateById = async (req, res) => {
    const neededInfo = req.body
    const data = neededInfo.dataForSend
    const id = neededInfo.dataForSend.id
    try {
            const updatePost = await Rsses.update(data, {
                where: {id: id}
            });
            if(updatePost){
                res.status(200).send('Update')
            }
    } catch (e) {
        console.log('some error when update');
    }
  };

module.exports.createPost = async (req, res)=>{
    const data = req.body.data
    try{
        const post = await Rsses.create(data)
        if(post){
            return res.status(200)
        }
    }catch(e){
        console.log(e)
    }
}
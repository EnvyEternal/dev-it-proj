const express = require('express')
const { getAll, delNews, updateById, createPost } = require('../controller/postController')
const {checkCookie} = require('../middleware/checkRole/checkCookie.js')

const rssRouter = express.Router()

rssRouter.get('/:pageId', getAll)

rssRouter.delete('/:idNews', checkCookie, delNews)

rssRouter.patch('/udateNews', checkCookie, updateById)

rssRouter.post('/createPost', checkCookie, createPost)

module.exports = rssRouter
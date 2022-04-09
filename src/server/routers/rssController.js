const express = require('express')
const { getAll, delNews, updateById, createPost } = require('../controller/postController')

const rssRouter = express.Router()

rssRouter.get('/:pageId', getAll)

rssRouter.delete('/:idNews', delNews)

rssRouter.patch('/udateNews', updateById)

rssRouter.post('/createPost', createPost)

module.exports = rssRouter
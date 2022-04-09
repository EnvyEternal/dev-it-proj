const rssController = require('./rssController')
const express = require('express')
const adminRouter = require('./adminController')

const router = express.Router()

router.use('/rss', rssController)

router.use('/', adminRouter)

module.exports = router
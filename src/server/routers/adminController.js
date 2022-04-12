const express = require('express')
const {createAdmin, getAdmin, getAllModerator, deleteModerator} = require('../controller/adminController')
const {cookieJwtAuth} = require('../middleware/authentication/cookieJwtAuth.js')
const {checkAdmin} = require("../middleware/checkAdmin/checkAdmin");

const adminRouter = express.Router()

adminRouter.post('/create', checkAdmin, createAdmin)

adminRouter.post('/get', getAdmin)

adminRouter.get('/check', cookieJwtAuth)

adminRouter.get('/getModerators', checkAdmin, getAllModerator)

adminRouter.post('/createModerator', checkAdmin, createAdmin)

adminRouter.delete('/delete/:id', checkAdmin, deleteModerator)

module.exports = adminRouter
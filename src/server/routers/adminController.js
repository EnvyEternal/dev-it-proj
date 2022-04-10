const express = require('express')
const {createAdmin, getAdmin, logOut, getAllModerator, deleteModerator} = require('../controller/adminController')
const {cookieJwtAuth} = require('../middleware/authentication/cookieJwtAuth.js')
const {checkAdmin} = require("../middleware/checkAdmin/checkAdmin");

const adminRouter = express.Router()

adminRouter.post('/create', createAdmin)

adminRouter.post('/get', getAdmin)

adminRouter.get('/logout', logOut)

adminRouter.get('/check', cookieJwtAuth)

adminRouter.get('/getModerators', checkAdmin, getAllModerator)

adminRouter.post('/createModerator', checkAdmin, createAdmin)

adminRouter.delete('/delete/:id', checkAdmin, deleteModerator)

module.exports = adminRouter
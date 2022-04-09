const express = require('express')
const {createAdmin, getAdmin, logOut, check} = require('../controller/adminController')
const {cookieJwtAuth} = require('../middleware/authentication/cookieJwtAuth.js')



const adminRouter = express.Router()

adminRouter.post('/create', createAdmin)

adminRouter.post('/get', getAdmin)

adminRouter.post('/logout', logOut)

adminRouter.post('/check', cookieJwtAuth)

module.exports = adminRouter
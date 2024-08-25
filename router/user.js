const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const validator = require('../middleware/validator/userValidator')
const { verifyToken } = require('../util/jwt')

router
.post('/register',
    // 引入校验 封装字段校验中间件
    validator.register,
    userController.register
)
.post('/login',
    validator.login,
    userController.login
)
.get('/lists', verifyToken, userController.list)
.delete('/', userController.delete)

module.exports = router
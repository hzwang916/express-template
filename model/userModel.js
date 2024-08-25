const mongoose = require('mongoose')
const md5 = require('../util/md5')

const baseModel = require('./baseModel')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        // 将用户传过来的值二次加工
        set: val => md5(val),
        // 查询时不返回 password
        select: false
    },
    phone: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: null
    },
    ...baseModel
})

module.exports = userSchema
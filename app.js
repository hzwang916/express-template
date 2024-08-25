const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const router = require('./router')

// // 使用 express 中间件机制 use - express 中间件一定要放到路由匹配规则前
// app.use((req, res, next) => {
//     console.log(`${req.method}, ${req.url}, ${Date.now()}`);
//     // 逻辑处理后 调用 next方法
//     next()
// })

// 解析客户端请求参数中间件
app.use(express.json())
app.use(express.urlencoded())

// 跨域处理中间件
app.use(cors())

// 日志记录中间件
app.use(morgan('dev'))  // 在开发模式记录日志

// 引入路由模块
app.use('/api/v1', router)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
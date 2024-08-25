const { User } = require('../model/index')
const { createToken } = require('../util/jwt')

// 用户注册
exports.register = async (req, res) => {
    const userModel = new User(req.body)
    const dbBack = await userModel.save()
    const user = dbBack.toJSON()
    delete user.password
    res.status(200).json({
        user
    })
}

// 用户登录
exports.login = async (req, res) => {
    // 连接数据库查询
    let dbBack = await User.findOne(req.body)

    if (!dbBack) {
        res.status(402).json({error: "邮箱或密码不正确"})
    } else {
        dbBack = dbBack.toJSON()
        dbBack.token = await createToken(dbBack)

        res.status(200).json(dbBack)
    }
}

exports.list = async (req, res) => {
    console.log(req.method);

    res.send('/user-list')
}

exports.delete = async (req, res) => {
    
}
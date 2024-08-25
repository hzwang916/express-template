/**
 * 对每一个校验进行处理
 */

const { validationResult } = require('express-validator')
module.exports = validator => {
    return async (req, res, next) => {
        await Promise.all(validator.map(validate => validate.run(req)))
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            // 客户端数据问题一般返回 401
            return res.status(401).json({error: errors.array()})
        }
        next()
    }
}

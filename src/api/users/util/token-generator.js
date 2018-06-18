const jwt = require('jsonwebtoken')
const authConfig = require('../../../config/auth')

module.exports = (params = {}) => {
    return jwt.sign({ id: params }, authConfig.secret, {
        expiresIn: 86400,
    });
}
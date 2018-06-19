const jwt = require('jsonwebtoken')
const authConfig = require('../../../config/auth')

module.exports = (userId, userRole) => {
    return jwt.sign({ id: userId, role: userRole }, authConfig.secret, {
        expiresIn: 86400,
    });
}
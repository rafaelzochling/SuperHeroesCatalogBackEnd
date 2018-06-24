const jwt = require('jsonwebtoken')
const authConfig = require('../../../config/auth')

module.exports = (userId, userRole, userName) => {
    return jwt.sign({ id: userId, role: userRole, username: userName }, authConfig.secret, {
        expiresIn: 86400,
    });
}
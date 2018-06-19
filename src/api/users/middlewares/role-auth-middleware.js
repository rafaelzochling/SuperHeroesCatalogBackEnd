const jwt = require('jsonwebtoken')
const authConfig = require('../../../config/auth')

module.exports = (roles) => {
    return (req, res, next) => {
        const role = req.role;

        if (!role)
        return res.status(401).send({ error: 'No role found!' });

        if(roles.includes(role))
        return next();
        
        return res.status(403).send({ error: 'Unauthorized request!' });
    }
}
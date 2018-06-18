const bcrypt = require('bcryptjs');
const UserModel = require('../models/user');
const generateToken = require('../util/token-generator')

module.exports = (req, res) => {
    UserModel.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(user => {
        if (!user) {
            return res.status(404).send('User not found!');
        }

        bcrypt.compare(req.body.password, user.password, function(error, isEqual) {
            if (isEqual) {
                user.password = undefined;
                return res.status(202).send({token: generateToken(user.id)});
            }
            return res.status(401).send('Invalid password!');
        });
    })
    .catch(error => res.status(500).send('Authentication error! ERROR: ' + error));
}

const UserModel = require('../models/user');

module.exports = (req, res) => {
        UserModel.sync();

        UserModel.findOne({
            where: {
                username: req.body.username
            }
        })
        .then(user => {
            if (!user) {
                UserModel.create(req.body)
                .then(user => {
                    user.password = undefined;
                    return res.status(201).send(user);
                })
                .catch(error => res.status(400).send('Validation failed! ERROR: ' + error));
            } else {
                return res.status(409).send('User already exists!');
            }
        })
        .catch(error => res.status(500).send('Register failed! ERROR: ' + error));
}
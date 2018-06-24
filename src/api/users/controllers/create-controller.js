const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');
const createEvent = require('../../audits/controllers/create-controller');

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
                        createEvent({
                            entity: user.username,
                            entityid: user.id,
                            username: req.body.username,
                            action: "CREATE"
                        });
                        return res.status(201).send(user);
                    })
                    .catch(error => res.status(400).send('Validation failed! ERROR: ' + error));
            } else {
                return res.status(409).send('User already exists!');
            }
        })
        .catch(error => res.status(500).send('Register failed! ERROR: ' + error));
}
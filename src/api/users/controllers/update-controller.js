const UserModel = require('../models/user');
const createEvent = require('../../audits/controllers/create-controller');

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
            user.update({
                username: req.body.newusername
            }).then(() => {
                user.password = undefined;
                createEvent({
                    entity: user.username,
                    entityid: user.id,
                    username: req.body.username,
                    action: "UPDATE"
                });
                return res.status(200).send(user);
            })
                .catch(error => res.status(304).send('Update error! ERROR: ' + error));
        })
        .catch(error => res.status(500).send('Search error! ERROR: ' + error));
}
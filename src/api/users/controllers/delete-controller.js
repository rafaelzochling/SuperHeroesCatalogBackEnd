const UserModel = require('../models/user');
const createEvent = require('../../audits/controllers/create-controller');

module.exports = (req, res) => {
    UserModel.findOne({
        where: {
            username: req.params.username
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).send('User not found!');
            }
            createEvent({
                entity: user.username,
                entityid: user.id,
                username: req.username,
                action: "DELETE"
            });
            user.destroy();
            return res.status(202).send('User deleted!');
        })
        .catch(error => res.status(500).send('Search error! ERROR: ' + error));
}
const UserModel = require('../models/user');

module.exports = (req, res) => {
    UserModel.findAll()
    .then( users => {
        if (!users) {
            return res.status(404).send('UserModel not found!');
        }
        users.forEach(user => {
            user.password = undefined;
        });
        res.status(200).send(users);
    })
    .catch(error => res.status(500).send('Search failed! ERROR: ' + error));
}
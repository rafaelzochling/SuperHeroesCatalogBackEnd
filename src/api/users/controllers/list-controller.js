const UserModel = require('../models/user');

module.exports = (req, res) => {
    UserModel.findAll()
    .then( UserModel => {
        if (!UserModel) {
            return res.status(404).send('UserModel not found!');
        }
        UserModel.forEach(user => {
            user.password = undefined;
        });
        res.status(200).send(UserModel);
    })
    .catch(error => res.status(500).send('Search failed! ERROR: ' + error));
}
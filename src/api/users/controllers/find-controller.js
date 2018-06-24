const UserModel = require('../models/user');

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
            user.password = undefined;
            return res.status(302).send(user);
        })
        .catch(error => res.status(500).send('Search error! ERROR: ' + error));
}
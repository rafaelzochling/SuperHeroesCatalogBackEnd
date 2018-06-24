const UserModel = require('../models/user');

module.exports = (req, res) => {
    UserModel.findAll({
        offset: req.params.offset,
        limit: req.params.limit
    })
        .then(users => {
            if (users.length <= 0) {
                return res.status(404).send('There is no user registered!');
            }
            users.forEach(user => {
                user.password = undefined;
            });
            res.status(200).send(users);
        })
        .catch(error => res.status(500).send('Search failed! ERROR: ' + error));
}
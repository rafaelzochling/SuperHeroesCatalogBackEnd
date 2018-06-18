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
        user.destroy();
        return res.status(202).send('User deleted!');
    })
    .catch(error => res.status(500).send('Search error! ERROR: ' + error));
}
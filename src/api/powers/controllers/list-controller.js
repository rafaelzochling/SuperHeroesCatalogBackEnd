const PowerModel = require('../models/power');

module.exports = (req, res) => {
    PowerModel.findAll()
        .then(powers => {
            if (powers.length <= 0) {
                return res.status(404).send('There is no power registered!');
            }
            res.status(200).send(powers);
        })
        .catch(error => res.status(500).send('Search failed! ERROR: ' + error));
}
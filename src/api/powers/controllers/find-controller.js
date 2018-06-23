const PowerModel = require('../models/power');

module.exports = (req, res) => {
    PowerModel.findOne({
        where: {
            powername: req.params.powername
        }
    })
    .then(power => {
        if (!power) {
            return res.status(404).send('Power not found!');
        }
        return res.status(302).send(power);
    })
    .catch(error => res.status(500).send('Search error! ERROR: ' + error));
}
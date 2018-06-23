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
        power.destroy();
        return res.status(202).send('Power deleted!');
    })
    .catch(error => res.status(500).send('Search error! ERROR: ' + error));
}
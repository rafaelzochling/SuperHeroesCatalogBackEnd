const HeroModel = require('../models/hero');

module.exports = (req, res) => {
    HeroModel.findAll({
        offset: req.params.offset,
        limit: req.params.limit
    })
        .then(heroes => {
            if (heroes.length <= 0) {
                return res.status(404).send('There is no hero registered!');
            }
            res.status(200).send(heroes);
        })
        .catch(error => res.status(500).send('Search failed! ERROR: ' + error));
}
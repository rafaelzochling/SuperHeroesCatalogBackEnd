const HeroModel = require('../models/hero');

module.exports = (req, res) => {
    HeroModel.findAll()
    .then( heroes => {
        if (!heroes) {
            return res.status(404).send('HeroModel not found!');
        }
        res.status(200).send(heroes);
    })
    .catch(error => res.status(500).send('Search failed! ERROR: ' + error));
}
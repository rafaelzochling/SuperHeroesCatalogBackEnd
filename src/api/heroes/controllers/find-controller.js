const HeroModel = require('../models/hero');

module.exports = (req, res) => {
    HeroModel.findOne({
        where: {
            heroname: req.params.heroname
        }
    })
        .then(hero => {
            if (!hero) {
                return res.status(404).send('Hero not found!');
            }
            return res.status(302).send(hero);
        })
        .catch(error => res.status(500).send('Search error! ERROR: ' + error));
}
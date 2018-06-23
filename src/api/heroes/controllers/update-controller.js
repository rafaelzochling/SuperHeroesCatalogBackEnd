const HeroModel = require('../models/hero');

module.exports = (req, res) => {
    HeroModel.findOne({
        where: {
            heroname: req.body.heroname
        }
    })
    .then(hero => {
        if (!hero) {
            return res.status(404).send('Hero not found!');
        }
        hero.update({
            heroname: req.body.newheroname
          }).then(() => {
            return res.status(200).send(hero);
          })
          .catch(error => res.status(304).send('Update error! ERROR: ' + error));
    })
    .catch(error => res.status(500).send('Search error! ERROR: ' + error));
}
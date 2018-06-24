const HeroModel = require('../models/hero');
const createEvent = require('../../audits/controllers/create-controller');

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
                createEvent({
                    entity: hero.heroname,
                    entityid: hero.id,
                    username: req.body.username,
                    action: "UPDATE"
                });
                return res.status(200).send(hero);
            })
                .catch(error => res.status(304).send('Update error! ERROR: ' + error));
        })
        .catch(error => res.status(500).send('Search error! ERROR: ' + error));
}
const HeroModel = require('../models/hero');
const createEvent = require('../../audits/controllers/create-controller');

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
            createEvent({
                entity: hero.heroname,
                entityid: hero.id,
                username: req.body.username,
                action: "DELETE",
                action: "ACTION: " + req.body.username + ", deleted the superhero called" + hero.heroname + "."
            });
            hero.destroy();
            return res.status(202).send('Hero deleted!');
        })
        .catch(error => res.status(500).send('Search error! ERROR: ' + error));
}
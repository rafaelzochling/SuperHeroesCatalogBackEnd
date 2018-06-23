const HeroModel = require('../models/hero');

module.exports = (req, res) => {
        HeroModel.sync();

        HeroModel.findOne({
            where: {
                heroname: req.body.heroname
            }
        })
        .then(hero => {
            if (!hero) {
                HeroModel.create(req.body)
                .then(hero => {
                    return res.status(201).send(hero);
                })
                .catch(error => res.status(400).send('Validation failed! ERROR: ' + error));
            } else {
                return res.status(409).send('This hero already exists!');
            }
        })
        .catch(error => res.status(500).send('Register failed! ERROR: ' + error));
}
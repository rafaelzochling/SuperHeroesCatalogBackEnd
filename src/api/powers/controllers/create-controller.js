const PowerModel = require('../models/power');
const createEvent = require('../../audits/controllers/create-controller');

module.exports = (req, res) => {
    PowerModel.sync();

    PowerModel.findOne({
        where: {
            powername: req.body.powername
        }
    })
        .then(power => {
            if (!power) {
                PowerModel.create(req.body)
                    .then(power => {
                        createEvent({
                            entity: power.powername,
                            entityid: power.id,
                            username: req.body.username,
                            action: "CREATE",
                            action: "ACTION: " + req.body.username + ", created a power called" + power.powername + "."
                        });
                        return res.status(201).send(power);
                    })
                    .catch(error => {
                        console.log(error);
                        res.status(400).send('Validation failed! ERROR: ' + error);
                    });
            } else {
                return res.status(409).send('This power already exists!');
            }
        })
        .catch(error => res.status(500).send('Register failed! ERROR: ' + error));
}
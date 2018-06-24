const PowerModel = require('../models/power');
const createEvent = require('../../audits/controllers/create-controller');

module.exports = (req, res) => {
    PowerModel.findOne({
        where: {
            powername: req.body.powername
        }
    })
        .then(power => {
            if (!power) {
                return res.status(404).send('Power not found!');
            }
            power.update({
                powername: req.body.newpowername
            }).then(() => {
                createEvent({
                    entity: power.powername,
                    entityid: power.id,
                    username: req.body.username,
                    action: "UPDATE",
                    action: "ACTION: " + req.body.username + ", updated the power called" + req.body.powername + " to " + power.powername + "."
                });
                return res.status(200).send(power);
            })
                .catch(error => res.status(304).send('Update error! ERROR: ' + error));
        })
        .catch(error => res.status(500).send('Search error! ERROR: ' + error));
}
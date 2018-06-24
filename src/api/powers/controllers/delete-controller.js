const PowerModel = require('../models/power');
const createEvent = require('../../audits/controllers/create-controller');

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
            createEvent({
                entity: power.powername,
                entityid: power.id,
                username: req.body.username,
                action: "DELETE",
                action: "ACTION: " + req.body.username + ", deleted the power called" + power.powername + "."
            });
            power.destroy();
            return res.status(202).send('Power deleted!');
        })
        .catch(error => res.status(500).send('Search error! ERROR: ' + error));
}
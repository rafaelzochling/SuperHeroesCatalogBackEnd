const EventModel = require('../models/event');

module.exports = (event) => {
    EventModel.sync();
    EventModel.create(event)
        .then(event => {
            return res.status(201).send(event);
        })
        .catch(error => {
            console.log(error);
            res.status(400).send('Validation failed! ERROR: ' + error);
        });
}
const EventModel = require('../models/event');

module.exports = (req, res) => {
    EventModel.findAll()
    .then( events => {
        if (events.length <= 0) {
            return res.status(404).send('There is no event registered!');
        }
        res.status(200).send(events);
    })
    .catch(error => res.status(500).send('Search failed! ERROR: ' + error));
}
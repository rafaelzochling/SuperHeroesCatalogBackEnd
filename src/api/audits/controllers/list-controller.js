const EventModel = require('../models/event');

module.exports = (req, res) => {
    EventModel.findAll({
        offset: req.params.offset,
        limit: req.params.limit
    })
        .then(events => {
            if (events.length <= 0) {
                return res.status(404).send('There is no event registered!');
            }
            res.status(200).send(events);
        })
        .catch(error => res.status(500).send('Search failed! ERROR: ' + error));
}
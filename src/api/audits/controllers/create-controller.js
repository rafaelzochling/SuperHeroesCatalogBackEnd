const EventModel = require('../models/event');

module.exports = (event) => {
    EventModel.sync();
    EventModel.create(event)
        .catch(error => {
            console.log(error);
        });
}
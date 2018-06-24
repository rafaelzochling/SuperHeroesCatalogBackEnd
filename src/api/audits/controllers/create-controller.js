const EventModel = require('../models/event');

module.exports = (event) => {
    console.log("EVENT 1:" + event);
    console.log(event);
    EventModel.sync();
    EventModel.create(event)
        .catch(error => {
            console.log(error);
        });
}
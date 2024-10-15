const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventTitle: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventTime: { type: String, required: true },
    ticketPrice: { type: Number, required: true },
    eventLocation: { type: String, required: true },
    eventImage: { type: String, required: true }
});

module.exports = mongoose.model('Event', eventSchema);


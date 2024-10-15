// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    eventName: { type: String, required: true },
    tickets: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    paymentMethod: { type: String, required: true }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;

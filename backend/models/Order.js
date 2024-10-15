const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    productName: { type: String, required: true },
    quantity: { type: Number, required: true },
    address: { type: String, required: true }
});

module.exports = mongoose.model('Order', orderSchema);

const express = require('express');
const router = express.Router();
const Order = require('../models/products');

// Create a new order
router.post('/orders', (req, res) => {
  const { name, number, product, quantity, address } = req.body;

  // Validate the request body
  if (!name || !number || !product || !quantity || !address) {
    return res.status(400).send({ message: 'Please fill in all fields' });
  }

  // Create a new order document
  const order = new Order({
    name,
    email,
    product,
    quantity,
    address
  });

  // Save the order to the database
  order.save((err,) => {
    if (err) {
      res.status(500).send({ message: 'Error placing order' });
    } else {
      res.send({ message: 'Order placed successfully' });
    }
  });
});

module.exports = router;
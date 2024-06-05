// backend/routes/order.js

const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST /order - Create a new order
router.post('/', async (req, res) => {
  const { quantity } = req.body;
  try {
    const newOrder = new Order({ quantity });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error });
  }
});

// GET /order - Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
});

module.exports = router;
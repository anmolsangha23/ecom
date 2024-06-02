const express = require('express');
const router = express.Router();

let cartQuantity = 0;

router.post('/', (req, res) => {
  const { quantity } = req.body;

  cartQuantity = quantity;

  res.send({ cartQuantity });
});


router.get('/', (req, res) => {
    // Handle GET request for /cart
    res.send(`Cart Quantity: ${cartQuantity}`);
});

module.exports = router;
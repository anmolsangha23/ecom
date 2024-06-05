const express = require('express');
const router = express.Router();

let cartQuantity = 0;

router.get('/', (req, res) => {
    // Handle GET request for /cart
    res.json(`Cart Quantity: ${cartQuantity}`);
});

router.post('/', (req, res) => {
  const { quantity } = req.body;
  cartQuantity = quantity;
  res.json({ cartQuantity });
});

// DELETE /cart - Remove item from the cart
router.delete('/', (req, res) => {
    if (cartQuantity > 0) {
      cartQuantity -= 1;
    }
    res.json({ cartQuantity });
});


module.exports = router;
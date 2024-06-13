const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51OGx5vICLa2rzf7VWiMPztmEyiPJuYRSrvQLD5Xl6Q5GreBr46tqm9uBgugk7fBDfFPlaizo6O5nTDX7ovkN9PfC00gtXJJKYv');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./db');

const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

const PORT = 5001;

app.use('/cart', cartRoutes);
app.use('/order', orderRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/one-item-shop/build')));

// The "catchall" handler: for any request that doesn't match one above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/one-item-shop/build/index.html'));
});

app.post('/create-checkout-session', async (req, res) => {
  const { quantity } = req.body;

  const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
          {
              price: 'price_1PRMGRICLa2rzf7ViUub2mzJ',
              quantity: quantity,
          },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/', // Update with your success URL
      cancel_url: 'http://localhost:3000/', // Update with your cancel URL
  });

  res.json({ id: session.id });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
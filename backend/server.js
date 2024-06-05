const express = require('express');
const cors = require('cors');
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
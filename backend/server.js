const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const cartRoutes = require('./routes/cart');


const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5001;

app.use('/cart', cartRoutes);


app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
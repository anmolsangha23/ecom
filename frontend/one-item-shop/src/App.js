import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import productImage from './productimage/question-mark.jpg';


import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AdminDashboard from './pages/AdminDashboard';
import NavBar from './components/NavBar';

function App() {
  const [cart, setCart] = useState(0);

  const addToCart = async () => {
    setCart(cart+1);

    await fetch('http://localhost:5001/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: cart + 1 }),
    });
  };

  const removeFromCart = async () => {
    if (cart > 0) {
      setCart(cart - 1);

      const response  = await fetch('http://localhost:5001/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: cart - 1 }),
      });

      const data = await response.json();
      console.log('ProductPage - handleAddToCart response:', data);
    }
  };

  const clearCart = () => {
    setCart(0);
  }
  // const handleCheckout = () => {
  //   // Navigate to checkout page
  // };

  // Product Information
  const Product = {
    name: 'Random Greeting Card',
    description: 'A random greeting card - what occasion could it be for?',
    price: 4.99,
    imageUrl: {productImage}
  }

  return (
    <Router>
      <div className="App">
        <NavBar cart={cart}/>
        <Routes>
          <Route path="/" element={<ProductPage product={Product} addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage product={Product} cart={cart} removeFromCart={removeFromCart}/>} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './CheckoutButton.css';
import { useNavigate } from 'react-router-dom';

const CheckoutButton = () => {
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    navigate('/checkout');
  };

    return (
      <button className='buy-button' onClick={handleCheckout}>
        Checkout
      </button>
    );
};

export default CheckoutButton;
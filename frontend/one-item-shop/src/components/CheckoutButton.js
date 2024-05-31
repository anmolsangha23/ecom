import React from 'react';
import './CheckoutButton.css';

const CheckoutButton = ({ onClick }) => {
    return (
      <button className='buy-button' onClick={onClick}>
        Checkout
      </button>
    );
};

export default CheckoutButton;
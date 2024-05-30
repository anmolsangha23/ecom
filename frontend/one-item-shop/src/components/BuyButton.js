import React from 'react';
import './BuyButton.css';

const BuyButton = ({ onClick }) => {
    return (
      <button className='buy-button' onClick={onClick}>
        Add to Cart
      </button>
    );
};

export default BuyButton;
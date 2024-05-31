import React from 'react';
import './RemoveButton.css';

const RemoveButton = ({ onClick }) => {
    return (
      <button className='buy-button' onClick={onClick}>
        Remove From Cart
      </button>
    );
};

export default RemoveButton;
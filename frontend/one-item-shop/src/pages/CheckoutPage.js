import React from 'react';

const CheckoutPage = ({ cartQuantity, clearCart }) => {
  const handlePurchase = async () => {
    try {
      const response = await fetch('http://localhost:5001/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: cartQuantity }),
      });

      if (response.ok) {
        clearCart(); // Clear the cart after successful purchase
        alert('Purchase complete!');
      } else {
        console.log(response.ok);
        alert('Error 1 completing purchase.');
      }
    } catch (error) {
      alert('Error 2 completing purchase.');
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <p>Number of items in cart: {cartQuantity}</p>
      <button onClick={handlePurchase}>Complete Purchase</button>
    </div>
  );
};

export default CheckoutPage;
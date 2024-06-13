import React from 'react';
import './CheckoutButton.css';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OGx5vICLa2rzf7VKlKEQDBM0Bx2tAiFJfRIaOIz879KdTNRhGXwXbUbFzM48OdtogTSmk1DK35ZGiGHDQ12owD000Ts3lw1R6'); // Replace with your Stripe publishable key

const CheckoutButton = ({ quantity }) => {
    const handleCheckout = async () => {
        const stripe = await stripePromise;

        const response = await fetch('http://localhost:5001/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantity }),
        });

        const session = await response.json();

        // Redirect to Stripe Checkout
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            console.error('Error redirecting to checkout:', result.error.message);
        }
    };

    return (
        <button className='buy-button' onClick={handleCheckout}>
            Checkout
        </button>
    );
};

export default CheckoutButton;

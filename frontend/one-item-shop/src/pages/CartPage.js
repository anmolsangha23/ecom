import React from 'react';
import './CartPage.css';
import RemoveButton from '../components/RemoveButton';
import CheckoutButton from '../components/CheckoutButton';


const CartPage = ({cart, product, removeFromCart}) => {

    if (cart === 0) {
        return (
            <div>
                <p>
                    Empty shopping cart
                </p>
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <div>
                        <h2>{product.name}</h2>
                        <p>Quantity: {cart}</p>
                        <p>Total Price: ${product.price * cart}</p>
                        <div>
                            <RemoveButton onClick={removeFromCart}> Remove From Cart</RemoveButton>
                            <div className='divider'/>
                            <CheckoutButton quantity={cart}> Checkout</CheckoutButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default CartPage;
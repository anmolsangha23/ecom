import React from 'react';
import './ProductPage.css';
import productImage from '../productimage/question-mark.jpg';


import BuyButton from '../components/BuyButton';

// import axios from 'axios';

const ProductPage = ({addToCart, product}) => {

    const handleBuyButton = () => {
        addToCart();
    }

    return (
        <div>
            <div> 
                <img src={productImage} alt='Today&apos;s product'>
                </img>
                <h1> {product.name} </h1> 
                <h2> ${product.price} </h2>
                <p>
                {product.description}
                </p>
                <BuyButton onClick={handleBuyButton}/>
            </div>
            
        </div>

    );
};

export default ProductPage;
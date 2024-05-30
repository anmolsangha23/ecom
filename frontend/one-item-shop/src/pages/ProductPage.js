import React, { useState } from 'react';
import productImage from '../productimage/lumber.png';
import './ProductPage.css';

import NavBar from '../components/NavBar';
import BuyButton from '../components/BuyButton';

// import axios from 'axios';

const ProductPage = () => {
    // const [name, setName] = useState('');
    // const [description, setDescription] = useState('');


    return (
        <div>
            <NavBar/>
            <div> 
                <img src={productImage} alt='Today&apos;s product'>
                </img>
                <h1> Product name </h1> 
                <p>
                    Product description
                </p>
                <BuyButton/>
            </div>
            
        </div>

    );
};

export default ProductPage;
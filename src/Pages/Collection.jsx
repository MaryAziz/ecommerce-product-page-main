import React, { useState } from 'react';
import product1 from '../../public/image-product-1.jpg';
import product2 from '../../public/image-product-1-thumbnail.jpg';
import product3 from '../../public/image-product-2-thumbnail.jpg';
import product4 from '../../public/image-product-3-thumbnail.jpg';
import product5 from '../../public/image-product-4-thumbnail.jpg';
import plus from '../../public/icon-plus.svg';
import minus from '../../public/icon-minus.svg';
import cart from '../../public/icon-cart.svg';

import './Collection.css';

function Collection() {
    const [mainImage, setMainImage] = useState(product1);
    const [quantity, setQuantity] = useState(0);

    const switchImage = (newImage) => {
        setMainImage(newImage);
    };

    const increment = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    };

    const submit = () => {
    };

    return (
        <main>
            <div id="left">
                <img id="product1" src={mainImage} alt="Product 1" />
                <div id='sidsview'>
                    <img className='miniproduct' src={product2}  onClick={() => switchImage(product2)} />
                    <img className='miniproduct' src={product3}  onClick={() => switchImage(product3)} />
                    <img className='miniproduct' src={product4}  onClick={() => switchImage(product4)} />
                    <img className='miniproduct' src={product5}  onClick={() => switchImage(product5)} />
                </div>
            </div>
            <div id='rightdiv'>
                <h6>SNEAKER COMPANY</h6>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <div id='price'>
                    <h3>$125.00</h3>
                    <label id='discount'>50%</label>
                </div>
                <del>$250.00</del>
                <div id='bottom'>
                    <div id='quantity'>
                        <img src={minus} alt="Minus" onClick={decrement} />
                        <label>{quantity}</label>
                        <img src={plus} alt="Plus" onClick={increment} />
                    </div>
                    <button id="cartend" onClick={submit}>
                        <img src={cart} alt="Cart" />
                        <label>Add to cart</label>
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Collection;

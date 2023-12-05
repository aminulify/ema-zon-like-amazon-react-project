import React, { useState } from 'react';
import './Orders.css';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) =>{
        console.log(id);
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () =>{
        // [] empty array means setCart all values are empty 
        setCart([]);
        deleteShoppingCart();
    }
    

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product=> <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart = {handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                cart={cart}
                handleClearCart={handleClearCart}
                >
                    <Link to='/order_review'><button className='proceed-btn'>Proceed <i class="fa-solid fa-arrow-right"></i></button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
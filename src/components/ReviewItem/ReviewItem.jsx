import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {id, img, name, quantity, price} = product;
    return (
        <div className='review-item'>
            <div className='left-side'>
                <div className='review-img'>
                    <img src={img} alt="" />
                </div>
                <div className='left-text'> 
                    <h1 className='heading'>{
                        (name.length>22) ? name.slice(0,28) + '...' : name
                    }</h1>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='right-side delete-btn items-delete'>
            <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
    );
};

export default ReviewItem;
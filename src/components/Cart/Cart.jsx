import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = props.cart; // option 1
    const {cart} = props;  // option 2
    // console.log(product.shipping);
 
    // total / grand total price
    let totalShipping = 0;
    let total = 0;
    let tax = 0;
    let grandTotal = 0;
    let quantity = 0;

    for(let product of cart){
        // product.quantity = product.quantity || 1;
        // if(product.quantity===0){
        //     product.quantity = 1;
        // }
        total = total + product.price * product.quantity;
        tax = (total * 0.05);
        totalShipping = totalShipping + product.shipping + product.quantity;
        grandTotal = total + tax + totalShipping;
        quantity = quantity + product.quantity;
    }
    
    return (
        
            <div className='cart'>
                <h2 className='order-heading'>Order summary</h2>
                <div className='order-text'>
                <p id='cart-len'>Selected Items: {quantity}</p>
                <p id='total-price'>Total Price: ${total}</p>
                <p id='total-shipping'>Total Shipping Charge: ${totalShipping}</p>
                <p id='tax-price'>Tax(5%): ${tax.toFixed(2)}</p>
                <p className='text-bold' id='grand-total'>Grand Total: ${grandTotal}</p>
                <div className='btn-select'>
                <button>Clear Cart <i class="fa-solid fa-trash"></i></button>
                <button>Review Order <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                </div>
        
            </div>
       
    );
};

export default Cart;
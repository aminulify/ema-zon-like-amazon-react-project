import React from 'react';
import './Product.css';
const Product = (props) => {
    // console.log(props);
    const {name, img, seller, ratings, price} = props.product;
    const handleAddToCart = props.handleAddToCart;
   
    return (
        <div className='product-details'>         
            <img src={img} alt="" />
            <h3 title={name}>{(name.length>19)?(name.substring(0,20) + "..."):(name)}</h3>
            <b>Price: ${price}</b>
            <p><small>Manufacturer: {seller}</small></p>
            <p><small>Rating: {ratings} stars</small></p>
            <button onClick={() => (handleAddToCart(props.product))} className='addCart-btn'>Add to Cart <i class="fa-solid fa-cart-shopping fa-beat"></i></button>
        </div>
    );
};

export default Product;
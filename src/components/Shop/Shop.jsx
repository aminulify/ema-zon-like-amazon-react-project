import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[]);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        let addedCart = [];
        // step 1: get id
        for(const id in storedCart){   
            // step 2 get the product by using id 
            const savedProduct = products.find(product=>product.id===id);
            console.log(savedProduct);
            if(savedProduct){
                //step 3: add quantity
                const quantity = storedCart[id];
                savedProduct.quantity = quantity
                //step 4: add the added product to the saved cart
                addedCart.push(savedProduct);
            }
         }
        console.log(storedCart);
        // step 5: set the cart
        setCart(addedCart);
    },[products]);  // [] means recall

    const handleAddToCart = (product) =>{
        // console.log(product);
        // const newCart = [...cart, product]; 
        // quantity check from array ******
        let newCart = [];
        const exists = cart.find(pd=>pd.id===product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd=>pd.id!=product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id);
    }

    const handleClearCart = () =>{
        // [] empty array means setCart all values are empty 
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.slice(0,12).map(product=> <Product
                    key={product.id}
                    product={product}
                    handleAddToCart = {handleAddToCart}
                ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                cart={cart}
                handleClearCart={handleClearCart}
                >
                   <Link to='/orders'><button className='review-order'>Review Order <i class="fa-solid fa-arrow-right"></i></button></Link>
                </Cart>
        
            </div>
        </div>
    );
};

export default Shop;
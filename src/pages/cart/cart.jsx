import React, { useContext } from 'react'
import { Products } from '../../products';
import { ShopContext } from '../../context/shop-context';
import {CartItem} from './cart-item';
import './cart.css';


export const Cart = () => {
const {cartItems} = useContext(ShopContext);
  
return (
    <div className='cart'>
    <div>
        <h1>Your cart items</h1>
    </div>
    <div className='cartItems'></div>
    {Products.map((product) =>{
        if (cartItems[product.id] !==0) {
            return<CartItem data={product}/>
        }
     })}
    
    <div className='check'>
        <p className='total'>Subtotal: $</p>
        <button className='continue'>Continue Shopping</button>
        <button className='checkout'>Checkout</button>
    </div>
    </div>
    );
};

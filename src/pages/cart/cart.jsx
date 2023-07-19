import React, { useContext } from 'react'
import { Products } from '../../products';
import { ShopContext } from '../../context/shop-context';
import {CartItem} from './cart-item';
import './cart.css';

import {useNavigate} from'react-router-dom';


export const Cart = () => {
const {cartItems, getTotalCartAmount} = useContext(ShopContext);

const totalAmount = getTotalCartAmount();

const navigate = useNavigate()
  
return (
    <div className='cart'>
    <div>
        <h1 className='yourItems'>Your cart items</h1>
    </div>
    <div className='cartItems'></div>
    {Products.map((product) =>{
        if (cartItems[product.id] !==0) {
            return<CartItem data={product}/>
        }
     })}
        {totalAmount > 0 ? (
    <div className='check'>
        <p className='total'>Subtotal: ${totalAmount}</p>
        <button className='continue' onClick={() => navigate('/')}>Continue Shopping</button>
        <button className='checkout'>Checkout</button>
    </div>
    ): (
        <h1 className='empty'>Your Cart is empty :(</h1>
        )}
    </div>
    );
};

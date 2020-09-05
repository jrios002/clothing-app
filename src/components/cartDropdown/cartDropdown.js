import React from 'react';
import CustomButton from '../customButton/customButton';
import './cartDropdown.scss';

const CartDropdown = () => (
    <div className='cartDropdown'>
        <div className='cartItems' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;
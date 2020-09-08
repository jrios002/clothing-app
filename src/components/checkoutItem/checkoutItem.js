import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cartActions';
import './checkoutItem.scss';

const CheckoutItem = ({cartItem, clearItem}) => {
    const { name, quantity, price, imageUrl } = cartItem;
    return(
        <div className='checkoutItem'>
            <div className='imageContainer'>
                <img src={imageUrl} alt='item' />
            </div>
                <span className='name'>{name}</span>
                <span className='quantity'>{quantity}</span>
                <span className='price'>{price}</span>
            <div className='removeButton' onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
import React from "react";
import CartItem from '../cart-item/cart-item'
import CustomButton from "../custom-button/custom-button";
import {connect} from 'react-redux'
import "./cart-dropdown.scss";
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'


const CartDropDown = ({cartItems, history}) => (
  <div className="cart-dropdown">

   {
     cartItems.length ?
    <div className="cart-items"> 
      {cartItems.map(cartItem => <CartItem key = {cartItem.id} item = {cartItem}/>)}
    </div>
    :
    <span className = 'empty-message'>Your cart is empty</span>
  
  }
      <CustomButton onClick={()=>history.push('./checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
 
);


const mapStateToProps = createStructuredSelector({
 cartItems: selectCartItems
})




export default withRouter(connect(mapStateToProps)(CartDropDown)) ;

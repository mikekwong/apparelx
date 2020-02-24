import React from "react";
import { connect } from "react-redux";

import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/selectors/selectors";
import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

// this function uses selector library for memoization to avoid re-render
const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// });
// const mapStateToProps = state => ({
//   cartItems: state.cart.cartItems
// });

export default connect(mapStateToProps)(CartDropdown);

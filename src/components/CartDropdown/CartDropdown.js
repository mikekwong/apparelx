import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/selectors/cartSelectors";
import { toggleCartHidden } from "../../redux/actions";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    {/* dispatch prop is automatically passed into component if not explicitly called in connect below, thus we can attach it to an onClick handler below to use*/}
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

// this function uses selector library for memoization to avoid re-render

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
// const mapStateToProps = state => ({
//   cartItems: selectCartItems(state)
// });

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// });
// const mapStateToProps = state => ({
//   cartItems: state.cart.cartItems
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));

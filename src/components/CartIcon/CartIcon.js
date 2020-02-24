import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/actions";
import { selectCartItemsCount } from "../../redux/selectors/cartSelectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

// this function uses selector library for memoization to avoid re-render

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});
// const mapStateToProps = state => ({
//   itemCount: selectCartItemsCount(state)
// });

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce(
//     (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
//     0
//   )
// });

// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// });

// shortcut for mapDispatchToProps
export default connect(mapStateToProps, {
  toggleCartHidden
})(CartIcon);

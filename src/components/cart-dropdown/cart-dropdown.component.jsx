import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router-dom';

// Redux
import { selectCartItems } from '../../redux/Cart/cart.selectors';
import { toggleCartHidden } from '../../redux/Cart/cart.actions';

// Components
import Button from './../forms/button/button.component';
import CartItem from '../cart-item/cart-item.component';

// Styles
import './cart-dropdown.styles.scss';

// Map func
const mapState = (state) => ({
  cartItems: selectCartItems(state),
});
const CartDropdown = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(mapState);
  const history = useHistory();

  const handleCheckout = () => {
    history.push('/checkout');
    dispatch(toggleCartHidden());
  };
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.documentID} product={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

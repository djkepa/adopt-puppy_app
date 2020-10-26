import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { toggleCartHidden } from './../../redux/Cart/cart.actions';
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';

// Icons
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// Styles
import './cart-icon.styles.scss';

// Map func
const mapState = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const CartIcon = () => {
  const dispatch = useDispatch();
  const { itemCount } = useSelector(mapState);

  const toggleCart = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;

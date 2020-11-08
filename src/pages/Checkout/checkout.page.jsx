import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

// Redux
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/Cart/cart.selectors';

// Custom hooks
import useScrollTop from '../../customHooks/useScrollTop';

// Components
import Button from '../../components/forms/button/button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';

// Styles
import './checkout.styles.scss';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const Checkout = () => {
  const history = useHistory();
  const { cartItems, total } = useSelector(mapState);
  useScrollTop();

  const errMsg = 'You have no items in your cart.';

  return (
    <div className="checkout-page">
      {/* {cartItems.length > 0 ? ( */}
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} product={cartItem} />
      ))}
      <div className="total">TOTAL: {total}&euro;</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/21 - CVV:123
        <Button onClick={() => history.goBack()}>Continue Shopping</Button>
        <Button>Checkout</Button>
      </div>
      {/* <StripeCheckoutButton price={total} /> */}
      {/* ) : (
            <p>
              {errMsg}
            </p>
          )} */}
    </div>
  );
};

export default Checkout;

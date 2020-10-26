import React from 'react';
import { useDispatch } from 'react-redux';

// Redux
import { clearItemFromCart } from './../../redux/Cart/cart.actions';

// Styles
import './cart-item.styles.scss';

const CartItem = ({
  product: {
    productName,
    productThumbnail,
    productPrice,
    quantity,
    documentID,
  },
}) => {
  const dispatch = useDispatch();
  const handleClearCartItem = (documentID) => {
    dispatch(
      clearItemFromCart({
        documentID,
      }),
    );
  };
  return (
    <div className="cart-item">
      <img src={productThumbnail} alt="item" />
      <div className="item-details">
        <span className="name">{productName}</span>
        <span className="price">
          {quantity} x {productPrice}&euro;
        </span>
      </div>
      <div
        className="remove-button"
        onClick={() => handleClearCartItem(documentID)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CartItem;

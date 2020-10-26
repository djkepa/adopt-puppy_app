import React from 'react';
import { useDispatch } from 'react-redux';

// Redux
import {
  removeItem,
  addItem,
  clearItemFromCart,
} from './../../redux/Cart/cart.actions';

// Styles
import './checkout-item.styles.scss';

const CheckoutItem = ({ product }) => {
  const dispatch = useDispatch();
  const {
    productName,
    productThumbnail,
    productPrice,
    quantity,
    documentID,
  } = product;

  const handleClearCartItem = (documentID) => {
    dispatch(
      clearItemFromCart({
        documentID,
      }),
    );
  };

  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };

  const handleRemoveItem = (product) => {
    dispatch(removeItem(product));
  };

  return (
    <div className="checkout-item" key={documentID}>
      <div className="image-container">
        <img src={productThumbnail} alt={productName} />
      </div>
      <span className="name">{productName}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => handleRemoveItem(product)}>
          > &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => handleAddItem(product)}>
          &#10095;
        </div>
      </span>
      <span className="price">{productPrice}</span>
      <div
        className="remove-button"
        onClick={() => handleClearCartItem(documentID)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

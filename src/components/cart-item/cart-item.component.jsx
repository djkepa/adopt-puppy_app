import React from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as Plus } from '../../assets/add.svg';
import { ReactComponent as Minus } from '../../assets/minus.svg';

// Redux
import {
  clearItemFromCart,
  removeItem,
  addItem,
} from './../../redux/Cart/cart.actions';

// Styles
import './cart-item.styles.scss';

const CartItem = ({ product }) => {
  const {
    productName,
    productThumbnail,
    productPrice,
    quantity,
    documentID,
  } = product;

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
      <span className="quantity">
        <div className="conArr" onClick={() => dispatch(removeItem(product))}>
          <Minus className="arrow" />
        </div>

        <div className="conArr" onClick={() => dispatch(addItem(product))}>
          <Plus className="arrow" />
        </div>
      </span>
      <div className="priceCont">
        <span className="priceCont-value">{quantity}</span>
      </div>
      <img src={productThumbnail} alt="item" />
      <div className="item-details">
        <span className="name">{productName}</span>
        <span className="price">
          {quantity} x {Math.round(quantity * productPrice)}&euro;
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

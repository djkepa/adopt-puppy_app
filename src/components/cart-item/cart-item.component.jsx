import React from 'react';

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
  return (
    <div className="cart-item">
      <img src={productThumbnail} alt="item" />
      <div className="item-details">
        <span className="name">{productName}</span>
        <span className="price">
          {quantity} x {productPrice}&euro;
        </span>
      </div>
    </div>
  );
};

export default CartItem;

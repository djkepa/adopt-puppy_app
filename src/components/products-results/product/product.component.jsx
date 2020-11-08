import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//Redux
import { addItem } from './../../../redux/Cart/cart.actions';
// Components
import Button from './../../forms/button/button.component';

// Styles
import './../product-results.styles.scss';
const Product = (product) => {
  const dispatch = useDispatch();
  const { documentID, productThumbnail, productName, productPrice } = product;
  if (
    !documentID ||
    !productThumbnail ||
    !productName ||
    typeof productPrice === 'undefined'
  )
    return null;

  const configAddToCartBtn = {
    type: 'button',
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addItem(product));
    // history.push('/cart');
  };

  return (
    <div className="product">
      <div className="thumb">
        <Link to={`/product/${documentID}`}>
          <img src={productThumbnail} alt={productName} />
        </Link>
      </div>

      <div className="details">
        <ul>
          <li>
            <span className="name">
              <Link to={`/product/${documentID}`}>{productName}</Link>
            </span>
          </li>
          <li>
            <span className="price">£{productPrice}</span>
          </li>
          <li>
            <div className="addToCart">
              <Button
                {...configAddToCartBtn}
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//Redux
import { addItem } from './../../redux/Cart/cart.actions';

// Components
import Button from './../forms/button/button.component';
import StarRating from './../star-rating/star-rating.component';

// Icons
import { ReactComponent as ShopingCart } from '../../assets/shopping-cart2.svg';

// Styles
import './product-item.styles.scss';

const ProductItem = (product) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    documentID,
    productThumbnail,
    productName,
    productPrice,
    productWoP,
    productDiscount,
    productRating,
  } = product;
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

  const handleHistoryClick = () => {
    history.push(`/product/${documentID}`);
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addItem(product));
  };

  return (
    <>
      <div key={documentID} className="shop-container-left-mid-block">
        <div className="shop-container-left-mid-block-item">
          <img
            src={productThumbnail}
            alt={productName}
            className="shop-container-left-mid-block-item-image"
          />
          <div
            className="shop-container-left-mid-block-item-link"
            onClick={handleHistoryClick}
          >
            <div className="shop-container-left-mid-block-item-link-c">
              See product →
            </div>
          </div>
        </div>

        <Link
          className="shop-container-left-mid-block-title"
          to={`/product/${documentID}`}
        >
          {productName}
        </Link>

        <div className="shop-container-left-mid-block-stars">
          <StarRating
            count={5}
            size={30}
            value={productRating}
            activeColor={'#e9ba10'}
            inactiveColor={'#ddd'}
          />
          <div className="shop-container-left-mid-block-stars-num">
            ({productRating})
          </div>
        </div>
        <div className="shop-container-left-mid-block-price">
          {productDiscount ? (
            <strike className="shop-container-left-mid-block-price-old">
              {productDiscount}
            </strike>
          ) : null}
          <div className="shop-container-left-mid-block-price-new">
            ${productPrice}
          </div>
          <div className="shop-container-left-mid-block-price-new">
            {productWoP ? ` / ${productWoP}` : null}
          </div>
        </div>
        <Button
          {...configAddToCartBtn}
          onClick={() => handleAddToCart(product)}
        >
          <ShopingCart className="shop-container-left-mid-block-button-icon" />{' '}
          Add to cart
        </Button>
      </div>
    </>
  );
};

export default ProductItem;

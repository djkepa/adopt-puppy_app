import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import {
  fetchProductStart,
  setProduct,
} from './../../redux/Products/products.action';
import { addItem } from './../../redux/Cart/cart.actions';

// Components
import Button from './../forms/button/button.component';

import shop1 from '../../assets/shop1.jpg';

import './product-card.styles.scss';

// Map func
const mapState = (state) => ({
  product: state.productsData.product,
});

const ProductCard = () => {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const { product } = useSelector(mapState);

  const {
    documentID,
    productThumbnail,
    productName,
    productPrice,
    productWoP,
    productDesc,
    productDiscount,
    productRating,
  } = product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));

    return () => {
      dispatch(setProduct({}));
    };
  }, []);

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addItem(product));
    // history.push('/cart');
  };

  const configAddToCartBtn = {
    type: 'button',
  };
  return (
    <>
      <div className="product-headerimage" alt="bgimage"></div>
      <div className="item">
        <div className="product-item">
          <div className="product-item-top">
            <div className="product-item-top-left">
              <img
                src={productThumbnail}
                alt="shop1"
                className="product-item-top-left"
              />
            </div>
            <div className="product-item-top-right">
              <div className="product-item-top-right-h2">{productName}</div>

              {/* <div className="product-item-top-right-p">
              Doogy Cruncgise Size Healt Nutration
            </div> */}

              <div className="product-item-top-right-h4box">
                <h4 className="product-item-top-right-h4box-left">
                  Subbscribe and save 05%
                </h4>{' '}
                <h4 className="product-item-top-right-h4box-right">
                  See details
                </h4>
              </div>
              <div className="product-item-top-right-kgbox">
                <div className="product-item-top-right-kgbox-header">
                  Format: {productWoP}
                </div>
              </div>
              <div className="product-item-top-right-blue">
                <h5>Free deuvery Buy now and recieve 323232</h5>
              </div>

              <div className="product-item-top-right-pricebox">
                <div className="product-item-top-right-pricebox-real">
                  <p>Your Price</p>
                  <h3 className="product-item-top-right-pricebox-real-num1">
                    ${productPrice}
                  </h3>
                </div>

                <div className="product-item-top-right-pricebox-ex">
                  <p>Your Price</p>
                  <strike className="product-item-top-right-pricebox-ex-num2">
                    $37.99
                  </strike>
                </div>
              </div>

              <div className="product-item-top-right-quantity">
                <p>Quantity</p>
                <span className="product-item-top-right-quantity-button">
                  -
                </span>
                <div className="product-item-top-right-quantity-number">1</div>
                <span className="product-item-top-right-quantity-button">
                  +
                </span>
              </div>

              <div className="product-item-top-right-addtocart">
                <Button
                  {...configAddToCartBtn}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </Button>
                <div className="product-item-top-right-addtocart-like">
                  <span>O</span> Save for later
                </div>
              </div>
            </div>
          </div>

          <div className="product-item-bottom">
            <p className="product-item-bottom-header">Product information</p>
            <p
              className="desc"
              dangerouslySetInnerHTML={{ __html: productDesc }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

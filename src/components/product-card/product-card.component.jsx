import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import {
  fetchProductStart,
  setProduct,
} from './../../redux/Products/products.action';
import { addItem } from './../../redux/Cart/cart.actions';

import { ReactComponent as ArrowBack } from '../../assets/left-arrow2.svg';

// Components
import Button from './../forms/button/button.component';

import './product-card.styles.scss';

// Map func
const mapState = (state) => ({
  product: state.productsData.product,
});

const ProductCard = ({ close, opened }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productID } = useParams();
  const { product } = useSelector(mapState);

  const {
    productThumbnail,
    productName,
    productPrice,
    productWoP,
    productDesc,
    productDiscount,
  } = product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));

    return () => {
      dispatch(setProduct({}));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className="product">
        <div className="arrowBox" onClick={() => history.push('/shop')}>
          <ArrowBack className="product-arrow" />
        </div>
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

              <div className="product-item-top-right-h4box">
                <h4 className="product-item-top-right-h4box-left">
                  Subbscribe and save 05%
                </h4>{' '}
                <h4 className="product-item-top-right-h4box-right">
                  See details
                </h4>
              </div>
              <div className="product-item-top-right-kgbox">
                {productWoP && (
                  <div className="product-item-top-right-kgbox-header">
                    Format: {productWoP}
                  </div>
                )}
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

                {productDiscount && (
                  <div className="product-item-top-right-pricebox-ex">
                    <p>Ex Price</p>
                    <strike className="product-item-top-right-pricebox-ex-num2">
                      ${productDiscount}
                    </strike>
                  </div>
                )}
              </div>

              <div className="product-item-top-right-addtocart">
                <Button
                  {...configAddToCartBtn}
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </Button>
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

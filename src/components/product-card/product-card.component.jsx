import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import {
  fetchProductStart,
  setProduct,
} from './../../redux/Products/products.action';
import { addProduct } from './../../redux/Cart/cart.actions';

// Components
import Button from './../forms/button/button.component';

// Styles
import './product-card.styles.scss';

// Map func
const mapState = (state) => ({
  product: state.productsData.product,
});

const ProductCard = () => {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const { product } = useSelector(mapState);

  const { productThumbnail, productName, productPrice, productDesc } = product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));

    return () => {
      dispatch(setProduct({}));
    };
  }, []);

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
    // history.push('/cart');
  };

  const configAddToCartBtn = {
    type: 'button',
  };

  return (
    <div className="productCard">
      <div className="hero">
        <img src={productThumbnail} alt={productName} />
      </div>
      <div className="productDetails">
        <ul>
          <li>
            <h1>{productName}</h1>
          </li>
          <li>
            <span>£{productPrice}</span>
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
          <li>
            <span
              className="desc"
              dangerouslySetInnerHTML={{ __html: productDesc }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ProductCard;

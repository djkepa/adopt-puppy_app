import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
// Components
import ProductItem from './../../product-item/product-item.component';

// Icons
import { ReactComponent as ArrowLeft } from './../../../assets/left-arrow.svg';
import { ReactComponent as ArrowRight } from './../../../assets/right-arrow.svg';

// import { ReactComponent as ShopingCart } from '../../../assets/shopping-cart2.svg';

// Redux
import { fetchProductsStart } from '../../../redux/Products/products.action';

// Styles
import './s-shop.styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const SShop = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);
  const { data, queryDoc } = products;

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`);
  };

  if (!Array.isArray(data)) return null;
  if (data.length < 1) {
    return (
      <div className="products">
        <p>No search results.</p>
      </div>
    );
  }
  console.log(data);

  const configFilters = {
    defaultValue: filterType,
    options: [
      {
        name: 'Show all',
        value: '',
      },
      {
        name: 'Toys',
        value: 'toys',
      },
      {
        name: 'Food',
        value: 'food',
      },
    ],
    handleChange: handleFilter,
  };
  return (
    <div className="section-shop">
      <div className="section-shop-top">
        <div className="section-shop-top-block">
          <h4 className="section-shop-top-block-h4">--- Our Shop</h4>
          <h1 className="section-shop-top-block-h1">
            Our awesome food and nutrients
          </h1>

          <h3 className="section-shop-top-block-h3">See all products →</h3>
        </div>
      </div>

      {/*margin: 'auto',*/}
      <div
        className="section-shop-bottom"
        style={{ width: '1200px', padding: '50px' }}
      >
        <Carousel
          arrows
          infinite
          slidesPerPage={4}
          // autoPlay={4000}
          animationSpeed={2000}
          plugins={[
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <ArrowLeft className="section-available-caroseul-point-arrow" />
                ),

                arrowRight: (
                  <ArrowRight className="section-available-caroseul-point-arrow" />
                ),

                addArrowClickHandler: true,
              },
            },
          ]}
        >
          {data.map((product, pos) => {
            const { productThumbnail, productName, productPrice } = product;
            if (
              !productThumbnail ||
              !productName ||
              typeof productPrice === 'undefined'
            )
              return null;

            const configProduct = {
              ...product,
            };

            return <ProductItem key={pos} {...configProduct} />;
          })}
        </Carousel>
      </div>
      <div className="section-shop-slide">
        <div className="section-shop-slide-full"></div>
        <div className="section-shop-slide-empty"></div>
        <div className="section-shop-slide-empty"></div>
      </div>
    </div>
  );
};

export default SShop;

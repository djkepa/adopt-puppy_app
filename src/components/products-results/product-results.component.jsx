import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Link } from 'react-router-dom';

// Redux
import { fetchProductsStart } from '../../redux/Products/products.action';

// Pictures
import shop1 from '../../assets/shop1.jpg';

// Components
import FormSelect from './../forms/form-select/form-select.component';
// import Product from './product/product.component';
import LoadMore from './../load-more/load-more.component';
import ProductItem from './../product-item/product-item.component';

//Styles
import './product-results.styles.scss';

// Map func
const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ProductResults = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

  const { data, queryDoc, isLastPage } = products;

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

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        filterType,
        startAfterDoc: queryDoc,
        persistProducts: data,
      }),
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <>
      {/* <h1>Browse Products</h1>

      <FormSelect {...configFilters} />

      <div className="productResults">
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

          return <Product key={pos} {...configProduct} />;
        })}
      </div>

      {!isLastPage && <LoadMore {...configLoadMore} />} */}

      <div className="shop">
        <div className="shop-headerimage" alt="bgimage">
          <h2 className="shop-headerimage-text">Our Shop</h2>
        </div>
        <div className="shop-container">
          <div className="shop-container-left">
            <div className="shop-container-left-top">
              <div className="shop-container-left-top-text">
                Showing 1 - 6 of 39 results
              </div>
              <div className="shop-container-left-top-sort">
                <FormSelect {...configFilters} />
              </div>
            </div>

            <div className="shop-container-left-mid">
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
            </div>
            <div className="shop-container-left-bottom">
              {!isLastPage && (
                <LoadMore
                  className="shop-container-lett-bottom-btn"
                  {...configLoadMore}
                />
              )}
            </div>
          </div>
          <div className="shop-container-right">
            <div className="shop-container-right-inside">
              <div className="shop-container-right-inside-h4">Search</div>
              <input
                type="text"
                placeholder="Products"
                className="shop-container-right-inside-search"
              />
              {/* <h5 className="shop-container-right-inside-search-h5">
                  Products
                </h5>
                <span className="shop-container-right-inside-search-icon">
                  O
                </span> */}
              {/* </div> */}
              <div className="shop-container-right-inside-filter">
                <h4 className="shop-container-right-inside-h4">
                  Filter by price
                </h4>
                <div className="shop-container-right-inside-filter-con">
                  <input
                    id="typeinp"
                    type="range"
                    min="0"
                    max="5"
                    defaultValue="3"
                    step="1"
                  />
                </div>
                <button className="shop-container-right-inside-filter-button">
                  Filter
                </button>
              </div>

              <div className="shop-container-right-inside-special">
                <h4 className="shop-container-right-inside-h4">
                  Special Offer
                </h4>

                <div className="shop-container-right-inside-special-block">
                  <div className="shop-container-right-inside-special-block-box">
                    <div className="shop-container-right-inside-special-block-box-top">
                      <img
                        src={shop1}
                        alt="shop1"
                        className="shop-container-right-inside-special-block-box-top-img"
                      />

                      <div className="shop-container-right-inside-special-block-box-top-text">
                        Sweet Snack
                      </div>

                      <div className="shop-container-right-inside-special-block-box-top-link">
                        {/* <Link
                          to="/react"
                          className="shop-container-right-inside-special-block-box-top-link-bg"
                        >
                          Check product →
                        </Link> */}
                      </div>
                    </div>

                    <div className="shop-container-right-inside-special-block-box-bottom">
                      $2.99 / piece
                    </div>
                  </div>
                </div>

                <div className="shop-container-right-inside-special-block">
                  <div className="shop-container-right-inside-special-block-box">
                    <div className="shop-container-right-inside-special-block-box-top">
                      <img
                        src={shop1}
                        alt="shop1"
                        className="shop-container-right-inside-special-block-box-top-img"
                      />

                      <div className="shop-container-right-inside-special-block-box-top-text">
                        Sweet Snack
                      </div>

                      <div className="shop-container-right-inside-special-block-box-top-link">
                        {/* <Link
                          to="/react"
                          className="shop-container-right-inside-special-block-box-top-link-bg"
                        >
                          Check product →
                        </Link> */}
                      </div>
                    </div>

                    <div className="shop-container-right-inside-special-block-box-bottom">
                      $2.99 / piece
                    </div>
                  </div>
                </div>

                <div className="shop-container-right-inside-special-block">
                  <div className="shop-container-right-inside-special-block-box">
                    <div className="shop-container-right-inside-special-block-box-top">
                      <img
                        src={shop1}
                        alt="shop1"
                        className="shop-container-right-inside-special-block-box-top-img"
                      />

                      <div className="shop-container-right-inside-special-block-box-top-text">
                        Sweet Snack
                      </div>

                      <div className="shop-container-right-inside-special-block-box-top-link">
                        {/* <Link
                          to="/react"
                          className="shop-container-right-inside-special-block-box-top-link-bg"
                        >
                          Check product →
                        </Link> */}
                      </div>
                    </div>

                    <div className="shop-container-right-inside-special-block-box-bottom">
                      $2.99 / piece
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductResults;

/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

// Redux
import { fetchProductsStart } from '../../redux/Products/products.action';
import { selectFilter } from '../../redux/Filter/filter.selectors';

// Components
import FormSelect from './../forms/form-select/form-select.component';
import ProductItem from './../product-item/product-item.component';
import Filters from './../filters/filters.component';
import Loader from './../loader/loader.component';

// Pictures
import shop1 from '../../assets/shop1.jpg';

//Styles
import './product-results.styles.scss';

// Map func
const mapState = ({ productsData, filterData, user }) => ({
  products: productsData.products,
  filter: filterData,
  filteredProducts: selectFilter(productsData.products.data, filterData),
  lastRefKey: productsData.lastRefKey,
  productsCount: productsData.items.length,
  totalProductsCount: productsData.total,
  isLoading: user.loading,
});

const ProductResults = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products, filter, filteredProducts, isLoading } = useSelector(
    mapState,
  );

  const { data, queryDoc } = products;

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/shop/${nextFilter}`);
  };

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
  const isFiltered = ['keyword', 'minPrice', 'maxPrice', 'sortBy'].some(
    (key) => !!filter[key],
  );
  return (
    <>
      <div className="shop">
        <div className="shop-container">
          <div className="shop-container-left">
            <div className="shop-container-left-top">
              <div className="shop-container-left-top-text">
                {isFiltered && (
                  <h5>
                    {filteredProducts.length > 0 &&
                      `Found ${filteredProducts.length} ${
                        filteredProducts.length > 1 ? 'products' : 'product'
                      }`}
                  </h5>
                )}
              </div>
              <div className="shop-container-left-top-sort"></div>
            </div>
            {filteredProducts.length === 0 && (
              <div>
                The are no items found.Try using correct filters or keyword.{' '}
              </div>
            )}
            <div className="shop-container-left-mid">
              {filteredProducts.map((product, pos) => {
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
            <div className="shop-container-left-bottom"></div>
          </div>

          <div className="shop-container-right">
            <div className="shop-container-right-inside">
              <div className="shop-container-right-inside-h4">Category</div>

              <FormSelect {...configFilters} />

              <div className="shop-container-right-inside-h4">Filter</div>

              <div className="shop-container-right-inside-filter">
                <Filters filter={filter} products={data} />
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

                      <div className="shop-container-right-inside-special-block-box-top-link"></div>
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

                      <div className="shop-container-right-inside-special-block-box-top-link"></div>
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

                      <div className="shop-container-right-inside-special-block-box-top-link"></div>
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

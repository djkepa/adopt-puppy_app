import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { applyFilter } from 'redux/actions/filterActions';

const ProductAppliedFilters = ({ filter }) => {
  const dispatch = useDispatch();
  const fields = ['minPrice', 'maxPrice', 'sortBy', 'keyword'];

  const onRemoveKeywordFilter = () => {
    dispatch(applyFilter({ keyword: '' }));
  };

  const onRemovePriceRangeFilter = () => {
    dispatch(applyFilter({ minPrice: 0, maxPrice: 0 }));
  };

  const onRemoveSortFilter = () => {
    dispatch(applyFilter({ sortBy: '' }));
  };

  return !fields.some((key) => !!filter[key]) ? null : (
    <div className="product-applied-filters">
      {filter.keyword && (
        <div className="pill-wrapper">
          <span className="d-block">Keyword</span>
          <div className="pill padding-right-l">
            <h5 className="pill-content margin-0">{filter.keyword}</h5>
            <div className="pill-remove" onClick={onRemoveKeywordFilter}>
              <h5 className="margin-0 text-subtle">
                <i className="fa fa-times-circle" />
              </h5>
            </div>
          </div>
        </div>
      )}

      {(!!filter.minPrice || !!filter.maxPrice) && (
        <div className="pill-wrapper">
          <span className="d-block">Price Range</span>
          <div className="pill padding-right-l">
            <h5 className="pill-content margin-0">
              ${filter.minPrice} - ${filter.maxPrice}
            </h5>
            <div className="pill-remove" onClick={onRemovePriceRangeFilter}>
              <h5 className="margin-0 text-subtle">
                <i className="fa fa-times-circle" />
              </h5>
            </div>
          </div>
        </div>
      )}
      {filter.sortBy && (
        <div className="pill-wrapper">
          <span className="d-block">Sort By</span>
          <div className="pill padding-right-l">
            <h5 className="pill-content margin-0">
              {filter.sortBy === 'price-desc'
                ? 'Price High - Low'
                : filter.sortBy === 'price-asc'
                ? 'Price Low - High'
                : filter.sortBy === 'name-desc'
                ? 'Name Z - A'
                : 'Name A - Z'}
            </h5>
            <div className="pill-remove" onClick={onRemoveSortFilter}>
              <h5 className="margin-0 text-subtle">
                <i className="fa fa-times-circle" />
              </h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ProductAppliedFilters.propType = {
  filter: PropTypes.shape({
    brand: PropTypes.string,
    keyword: PropTypes.string,
    minPrice: PropTypes.number,
    maxPrice: PropTypes.number,
  }),
};

export default ProductAppliedFilters;

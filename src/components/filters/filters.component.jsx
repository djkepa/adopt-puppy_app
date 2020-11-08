import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetFilter, applyFilter } from '../../redux/Filter/filter.action';
import { selectMax, selectMin } from '../../redux/Filter/filter.selectors';

import PriceRange from '../price-range/price-range.component';

import './filters.styles.scss';

const Filters = (props) => {
  const [isMounted, setMounted] = useState(false);
  const [field, setFilter] = useState({
    minPrice: props.filter.minPrice,
    maxPrice: props.filter.maxPrice,
    sortBy: props.filter.sortBy,
  });
  const dispatch = useDispatch();
  const max = selectMax(props.products);
  const min = selectMin(props.products);

  useEffect(() => {
    if (isMounted && window.screen.width <= 480) {
      props.history.push('/');
    }

    setFilter(props.filter);
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.filter]);

  const onPriceChange = (min, max) => {
    setFilter({ ...field, minPrice: min, maxPrice: max });
  };

  const onSortFilterChange = (e) => {
    setFilter({ ...field, sortBy: e.target.value });
  };

  const onApplyFilter = () => {
    const isChanged = Object.keys(field).some(
      (key) => field[key] !== props.filter[key],
    );

    if (field.minPrice > field.maxPrice) {
      return false;
    }

    if (isChanged) {
      dispatch(applyFilter(field));
    }
  };

  const onResetFilter = () => {
    const filterFields = ['minPrice', 'maxPrice', 'sortBy'];

    if (filterFields.some((key) => !!props.filter[key])) {
      dispatch(resetFilter());
    }
  };

  return (
    <div className="filters">
      <span className="filters-title">Sort By</span>

      <div className="dropdown">
        <select
          className="dropdown-select"
          value={field.sortBy}
          disabled={props.productsCount === 0}
          onChange={onSortFilterChange}
        >
          <option value="">None</option>
          <option value="name-asc">Name Ascending A - Z</option>
          <option value="name-desc">Name Descending Z - A</option>
          <option value="price-desc">Price High - Low</option>
          <option value="price-asc">Price Low - High</option>
        </select>
      </div>
      <div className="filters-field">
        <span className="filters-title">Price Range</span>
        {props.productsCount === 0 || max === 0 ? (
          <h5 className="text-subtle">Loading Filter</h5>
        ) : (
          <PriceRange
            min={min}
            max={max}
            initMin={field.minPrice}
            initMax={field.maxPrice}
            onPriceChange={onPriceChange}
            productsLength={props.productsCount}
          />
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          className="filterBtn"
          disabled={props.productsCount === 0}
          onClick={onApplyFilter}
        >
          Apply
        </button>
        <button
          className="filterBtn"
          disabled={props.productsCount === 0}
          onClick={onResetFilter}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default withRouter(Filters);

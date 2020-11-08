import filterTypes from './Filter.types';

export const setTextFilter = (keyword) => ({
  type: filterTypes.SET_TEXT_FILTER,
  payload: keyword,
});

export const setMinPriceFilter = (min) => ({
  type: filterTypes.SET_MIN_PRICE_FILTER,
  payload: min,
});

export const setMaxPriceFilter = (max) => ({
  type: filterTypes.SET_MAX_PRICE_FILTER,
  payload: max,
});

export const resetFilter = () => ({
  type: filterTypes.RESET_FILTER,
});

export const clearRecentSearch = () => ({
  type: filterTypes.CLEAR_RECENT_SEARCH,
});

export const removeSelectedRecent = (keyword) => ({
  type: filterTypes.REMOVE_SELECTED_RECENT,
  payload: keyword,
});

export const applyFilter = (filters) => ({
  type: filterTypes.APPLY_FILTER,
  payload: filters,
});

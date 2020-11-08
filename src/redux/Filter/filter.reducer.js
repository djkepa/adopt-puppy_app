import filterTypes from './Filter.types';

const INITIAL_STATE = {
  recent: [],
  keyword: '',
  minPrice: 0,
  maxPrice: 500,
  sortBy: '',
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case filterTypes.SET_TEXT_FILTER:
      return {
        ...state,
        recent:
          !!state.recent.find((n) => n === action.payload) ||
          action.payload === ''
            ? state.recent
            : [action.payload, ...state.recent],
        keyword: action.payload,
      };

    case filterTypes.SET_MAX_PRICE_FILTER:
      return {
        ...state,
        maxPrice: action.payload,
      };
    case filterTypes.SET_MIN_PRICE_FILTER:
      return {
        ...state,
        minPrice: action.payload,
      };
    case filterTypes.RESET_FILTER:
      return INITIAL_STATE;
    case filterTypes.CLEAR_RECENT_SEARCH:
      return {
        ...state,
        recent: [],
      };
    case filterTypes.REMOVE_SELECTED_RECENT:
      return {
        ...state,
        recent: state.recent.filter((item) => item !== action.payload),
      };
    case filterTypes.APPLY_FILTER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;

import cartTypes from './cart.types';
import {
  handleRemoveCartItem,
  handleAddCartItem,
  handleClearCartItem,
} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: handleAddCartItem({
          prevCartItems: state.cartItems,
          nextCartItem: action.payload,
        }),
      };
    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: handleRemoveCartItem({
          prevCartItems: state.cartItems,
          cartItemToReduce: action.payload,
        }),
      };
    case cartTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: handleClearCartItem({
          prevCartItems: state.cartItems,
          cartItemToRemove: action.payload,
        }),
      };
    case cartTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;

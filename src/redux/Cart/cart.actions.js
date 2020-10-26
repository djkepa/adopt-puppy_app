import cartTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: cartTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (nextCartItem) => ({
  type: cartTypes.ADD_ITEM,
  payload: nextCartItem,
});

export const removeItem = (cartItem) => ({
  type: cartTypes.REMOVE_ITEM,
  payload: cartItem,
});

export const clearItemFromCart = (cartItem) => ({
  type: cartTypes.CLEAR_ITEM_FROM_CART,
  payload: cartItem,
});

export const clearCart = (item) => ({
  type: cartTypes.CLEAR_CART,
});

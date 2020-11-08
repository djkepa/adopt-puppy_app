import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './User/user.reducer';
import productsReducer from './Products/products.reducer';
import cartReducer from './Cart/cart.reducer';
import blogReducer from './Blog/blog.reducer';
import commentReducer from './Comment/comment.reducer';
import filterReducer from './Filter/filter.reducer';

// export const JSOGTransform = createTransform(
//   (inboundState, key) => JSOG.encode(inboundState),
//   (outboundState, key) => JSOG.decode(outboundState),
// );

export const rootReducer = combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cartData: cartReducer,
  blogData: blogReducer,
  commentData: commentReducer,
  filterData: filterReducer,
});

const configStorage = {
  key: 'root',
  storage,
  whitelist: ['user', 'productsData', 'commentData', 'blogData', 'cartData'],
};

export default persistReducer(configStorage, rootReducer);

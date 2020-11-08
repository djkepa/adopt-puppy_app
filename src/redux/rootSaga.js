import { all, call } from 'redux-saga/effects';

import userSagas from './User/user.sagas';
import productsSagas from './Products/products.sagas';
import blogSagas from './Blog/blog.sagas';
import commentSagas from './Comment/comment.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(productsSagas),
    call(blogSagas),
    call(commentSagas),
  ]);
}

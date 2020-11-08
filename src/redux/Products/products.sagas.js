import { auth } from '../../firebase/utils';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setProducts, setProduct, fetchProductsStart } from './products.action';
import { setLoading } from './../User/user.actions';
import {
  handleAddProduct,
  handleFetchProducts,
  handleFetchProduct,
  handleDeleteProduct,
} from './products.helpers';

import productsTypes from './products.types';

export function* addProduct({ payload }) {
  try {
    const timestamp = new Date().getTime();
    yield handleAddProduct({
      ...payload,
      productAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp,
    });

    yield put(fetchProductsStart());
  } catch (err) {
    console.log(err);
  }
}

export function* onAddProductStart() {
  yield takeLatest(productsTypes.ADD_PRODUCT_START, addProduct);
}

export function* fetchProducts({ payload }) {
  try {
    yield put(setLoading(true));
    const products = yield handleFetchProducts(payload);
    yield put(setProducts(products));
    yield put(setLoading(false));
  } catch (err) {
    console.log(err);
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* deleteProduct({ payload }) {
  try {
    yield put(setLoading(true));
    yield handleDeleteProduct(payload);
    yield put(fetchProductsStart());
    yield put(setLoading(false));
  } catch (err) {
    console.log('err', err);
  }
}

export function* onDeleteProductStart() {
  yield takeLatest(productsTypes.DELETE_PRODUCT_START, deleteProduct);
}

export function* fetchProduct({ payload }) {
  try {
    yield put(setLoading(true));
    const product = yield handleFetchProduct(payload);
    yield put(setProduct(product));
    yield put(setLoading(false));
  } catch (err) {
    console.log(err);
  }
}

export function* onFetchProductStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCT_START, fetchProduct);
}

export default function* productsSagas() {
  yield all([
    call(onAddProductStart),
    call(onFetchProductsStart),
    call(onDeleteProductStart),
    call(onFetchProductStart),
  ]);
}

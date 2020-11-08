import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  handleAddBlog,
  handleFetchBlogs,
  handleFetchBlog,
  handleDeleteBlog,
} from './blog.helpers';

import {
  setBlogs,
  setBlog,
  fetchBlogsStart,
  deleteBlogSuccess,
} from './blog.actions';

import blogTypes from './blog.types';

export function* addBlog({ payload }) {
  const { id, title, content, image, author, authorId } = payload;
  const createdAt = new Date().getTime();

  try {
    yield handleAddBlog({
      id,
      title,
      content,
      image,
      author,
      authorId,
      createdAt,
      popularity: 0,
      likes: 0,
    });

    yield put(fetchBlogsStart(payload));
  } catch (err) {
    console.log(err);
  }
}

export function* onAddBlogStart() {
  yield takeLatest(blogTypes.ADD_BLOG_START, addBlog);
}

export function* fetchBlogs() {
  try {
    const blogs = yield handleFetchBlogs();
    yield put(setBlogs(blogs));
  } catch (err) {
    console.log(err);
  }
}

export function* onFetchBlogsStart() {
  yield takeLatest(blogTypes.FETCH_BLOGS_START, fetchBlogs);
}

export function* deleteBlog({ payload }) {
  try {
    yield handleDeleteBlog(payload);
    yield put(deleteBlogSuccess(payload));
  } catch (err) {
    console.log('err', err);
  }
}

export function* onDeleteBlogStart() {
  yield takeLatest(blogTypes.DELETE_BLOG_START, deleteBlog);
}

export function* fetchBlog({ payload }) {
  try {
    const blog = yield handleFetchBlog(payload);
    yield put(setBlog(blog));
  } catch (err) {
    console.log(err);
  }
}

export function* onFetchBlogStart() {
  yield takeLatest(blogTypes.FETCH_BLOG_START, fetchBlog);
}

export default function* blogSagas() {
  yield all([
    call(onAddBlogStart),
    call(onFetchBlogsStart),
    call(onDeleteBlogStart),
    call(onFetchBlogStart),
  ]);
}

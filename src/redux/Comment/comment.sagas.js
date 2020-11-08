import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  handleAddComment,
  handleFetchComments,
  handleDeleteComment,
} from './comment.helpers';
import {
  addCommentSuccess,
  setComment,
  deleteCommentSuccess,
  deleteCommentError,
} from './comment.actions';

import commentTypes from './comment.types';

export function* addComment({ payload }) {
  const {
    articleId,
    blogAuthorId,
    content,
    commentAuthor,
    commentAuthorID,
    createdAt,
  } = payload;

  try {
    yield handleAddComment({
      content: content,
      articleId: articleId,
      blogAuthorId: blogAuthorId,
      commentAuthor: commentAuthor,
      commentAuthorId: commentAuthorID,
      createdAt: createdAt,
    });

    yield put(addCommentSuccess(payload));
  } catch (err) {
    console.log(err.message);
  }
}

export function* onAddCommentStart() {
  yield takeLatest(commentTypes.ADD_COMMENT_START, addComment);
}

export function* deleteComment({ payload }) {
  try {
    yield handleDeleteComment(payload);

    yield put(deleteCommentSuccess(payload));
  } catch (err) {
    console.log(err.message);
    yield put(deleteCommentError(err));
  }
}

export function* onDeleteCommentStart() {
  yield takeLatest(commentTypes.DELETE_COMMENT_START, deleteComment);
}

export function* fetchComments({ payload }) {
  try {
    const comments = yield handleFetchComments(payload);

    yield put(setComment(comments));
  } catch (err) {
    console.log(err);
  }
}

export function* onFetchCommentsStart() {
  yield takeLatest(commentTypes.FETCH_COMMENT_START, fetchComments);
}

export default function* commentSagas() {
  yield all([
    call(onAddCommentStart),
    call(onFetchCommentsStart),
    call(onDeleteCommentStart),
  ]);
}

import commentTypes from './comment.types';

export const addCommentStart = (data) => ({
  type: commentTypes.ADD_COMMENT_START,
  payload: data,
});

export const addCommentSuccess = (data) => ({
  type: commentTypes.ADD_COMMENT_SUCCESS,
  payload: data,
});

export const addCommentError = (error) => ({
  type: commentTypes.ADD_COMMENT_ERROR,
  payload: error,
});

export const fetchCommentStart = () => ({
  type: commentTypes.FETCH_COMMENT_START,
});

export const setComment = (data) => ({
  type: commentTypes.SET_COMMENT,
  payload: data,
});

export const deleteCommentStart = (data) => ({
  type: commentTypes.DELETE_COMMENT_START,
  payload: data,
});

export const deleteCommentSuccess = (data) => ({
  type: commentTypes.DELETE_COMMENT_SUCCESS,
  payload: data,
});

export const deleteCommentError = () => ({
  type: commentTypes.DELETE_COMMENT_ERROR,
});

import commentTypes from './comment.types';

let INITIAL_STATE = {
  status: null,
  comments: [],
  comment: {},
};

const commentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case commentTypes.ADD_COMMENT_SUCCESS:
      const comment = action.payload;
      return {
        ...state,
        comments: [...state.comments, comment],
      };

    case commentTypes.ADD_COMMENT_ERROR:
      const error = action.commentError
        ? action.commentError
        : action.err.message;
      return {
        ...state,
        status: error,
      };

    case commentTypes.DELETE_COMMENT_START:
      return {
        ...state,
      };

    case commentTypes.DELETE_COMMENT_SUCCESS:
      const old = action.payload;
      return {
        ...state,
        comments: state.comments.filter((comment) => comment !== old),
      };

    case commentTypes.DELETE_COMMENT_ERROR:
      alert('Deletion error: ' + action.err.message);
      console.log('Deletion error: ' + action.err.message);
      return {
        ...state,
        status: error,
      };

    case commentTypes.SET_COMMENT:
      return {
        ...state,
        comments: action.payload,
      };

    default:
      return state;
  }
};
export default commentReducer;

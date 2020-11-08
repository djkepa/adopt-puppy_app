import blogTypes from './blog.types';

const INITIAL_STATE = {
  id: null,
  status: null,
  error: null,
  blogs: [],
  blog: {},
};

const blogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case blogTypes.ADD_BLOG_SUCCESS:
      const blog = action.payload;
      return {
        ...state,
        blogs: [...state.blogs, blog],
      };

    case blogTypes.ADD_BLOG_ERROR:
      return {
        ...state,
        status: action.blogError ? action.blogError : action.err.message,
      };

    case blogTypes.SET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };

    case blogTypes.SET_BLOG:
      return {
        ...state,
        blog: action.payload,
      };

    case blogTypes.BLOG_RESET:
      return {
        ...state,
        status: null,
      };



    case blogTypes.DELETE_BLOG_SUCCESS:
      const old = action.payload;
      return {
        blogs: state.blogs.filter(function (el) {
          // eslint-disable-next-line eqeqeq
          return el.documentID != old;
        }),
      };

    case blogTypes.DELETE_BLOG_ERROR:
      alert('Deletion error: ' + action.err.message);
      console.log('Deletion error: ' + action.err.message);
      return { error: null };

    default:
      return state;
  }
};

export default blogReducer;

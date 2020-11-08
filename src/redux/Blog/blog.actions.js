import blogTypes from './blog.types';

export const addBlogStart = (data) => ({
  type: blogTypes.ADD_BLOG_START,
  payload: data,
});

export const addBlogSuccess = (data) => ({
  type: blogTypes.ADD_BLOG_SUCCESS,
  payload: data,
});

export const fetchBlogsStart = (data) => ({
  type: blogTypes.FETCH_BLOGS_START,
  payload: data,
});

export const setBlogs = (blogs) => ({
  type: blogTypes.SET_BLOGS,
  payload: blogs.data,
});

export const deleteBlogStart = (blogID) => ({
  type: blogTypes.DELETE_BLOG_START,
  payload: blogID,
});

export const deleteBlogSuccess = (blogID) => ({
  type: blogTypes.DELETE_BLOG_SUCCESS,
  payload: blogID,
});

export const fetchBlogStart = (blogID) => ({
  type: blogTypes.FETCH_BLOG_START,
  payload: blogID,
});

export const setBlog = (blog) => ({
  type: blogTypes.SET_BLOG,
  payload: blog,
});

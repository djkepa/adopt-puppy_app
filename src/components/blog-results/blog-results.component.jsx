import React from 'react';
import { useSelector } from 'react-redux';

// Custom hooks
import useScrollTop from '../../customHooks/useScrollTop';

// Components
import BlogItem from './../blog-item/blog-item.component';

//Styles
import './blog-results.styles.scss';

// Map func
const mapState = ({ blogData }) => ({
  blogs: blogData.blogs,
});

const BlogResults = () => {
  useScrollTop();

  const { blogs } = useSelector(mapState);

  return (
    <>
      {blogs ? (
        blogs.map((blog, pos) => {
          const configBlog = {
            ...blog,
          };
          return <BlogItem key={pos} {...configBlog} />;
        })
      ) : (
        <div>Problem with fetching data, please try again...</div>
      )}
    </>
  );
};

export default BlogResults;

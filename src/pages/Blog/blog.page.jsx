import React from 'react';
import { useHistory } from 'react-router-dom';

// Components
import BlogResults from '../../components/blog-results/blog-results.component';

// Custom hooks
import useScrollTop from '../../customHooks/useScrollTop';

// Icons
import { ReactComponent as Blogging } from '../../assets/blogging.svg';

// Styles
import './blog.styles.scss';

export const Blog = () => {
  const history = useHistory();
  useScrollTop();

  return (
    <div>
      <div className="img-blog">
        <div className="box">
          <span>Hello! Welcome to</span>

          <h2>Blog</h2>
        </div>
      </div>

      <div className="blog-container">
        <div className="blog-container-create">
          <Blogging
            className="blog-container-button"
            onClick={() => history.push('/create-blog')}
          ></Blogging>
          <span>Create Blog!</span>
        </div>
        <div className="blog-container-content">
          <BlogResults />
        </div>
      </div>
    </div>
  );
};
export default Blog;

import React from 'react';
import { Link } from 'react-router-dom';

// Utils
import { displayDateShort } from '../../utils/displayDate';

// Custom hooks
import useScrollTop from '../../customHooks/useScrollTop';

// Icons
import { ReactComponent as Read } from '../../assets/read.svg';

// Styles
import './blog-item.styles.scss';

const BlogItem = (blog) => {
  useScrollTop();

  const { documentID, title, image, content, createdAt } = blog;

  return (
    <>
      <div key={documentID} className="blogitem">
        <Link to={`/blog/${documentID}`}>
          <img src={image} alt={title} className="blogitem-image" />
        </Link>
        <div className="blogitem-box">
          <Link className="blogitem-box-title" to={`/blog/${documentID}`}>
            {title}
          </Link>
          <p
            className="blogitem-box-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <div className="blogitem-box-bottom">
            <div className="blogitem-box-date">
              {displayDateShort(createdAt)}
            </div>
            <Link to={`/blog/${documentID}`}>
              <Read className="blogitem-box-icon" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogItem;

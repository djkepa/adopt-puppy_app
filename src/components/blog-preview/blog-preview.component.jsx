import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { displayDateShort } from '../../utils/displayDate';

import CommentSection from '../comment-section/comment-section.component';
import Button from './../forms/button/button.component';

import { ReactComponent as ArrowBack } from '../../assets/left-arrow2.svg';

// Redux
import {
  fetchBlogStart,
  deleteBlogStart,
} from './../../redux/Blog/blog.actions';

import './blog-preview.styles.scss';

// Map func
const mapState = ({ blogData, user }) => ({
  blog: blogData.blog,
  currentUser: user.currentUser,
});

const BlogPreview = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { blogID } = useParams();
  const { blog, currentUser } = useSelector(mapState);
  const [data, setData] = useState({});

  const { title, image, content, author, createdAt } = data;

  useEffect(() => {
    dispatch(fetchBlogStart(blogID));
    setData(blog);
  }, [blogID, dispatch]);

  const handleDeleteBlog = (blogID) => {
    dispatch(deleteBlogStart(blogID));
    history.push('/blog');
  };

  return (
    <div className="blogpreview">
      <div className="blogpreview-box">
        <div className="blogpreview-backarrow">
          <ArrowBack
            onClick={() => history.push('/blog')}
            className="blogpreview-backarrow-icon"
          />
        </div>

        <h2 className="blogpreview-title">{title}</h2>
        <div className="blogpreview-authorbox"></div>
        <img className="blogpreview-img1" src={image} alt={title} />
        <div className="blogpreview-author">
          {' '}
          <span>Created by </span>
          {author}
        </div>
        <div className="blogpreview-date">{displayDateShort(createdAt)}</div>
        <p
          className="blogpreview-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="blogpreview-comment">
          {currentUser && <CommentSection blog={data} />}
        </div>
        <Button onClick={() => handleDeleteBlog(blogID)}>Delete blog</Button>
      </div>
    </div>
  );
};
export default BlogPreview;

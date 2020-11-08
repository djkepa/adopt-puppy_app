import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextArea from 'react-textarea-autosize';

import { addCommentStart } from '../../redux/Comment/comment.actions';

import './comment-item.styles.scss';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
});

const CommentItem = ({ blog }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);
  const [data, setData] = useState('');

  const { authorId, documentID } = blog;
  const timestamp = new Date();

  const resetForm = () => {
    setData('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { displayName, id } = currentUser;

    dispatch(
      addCommentStart({
        blogAuthorId: authorId,
        articleId: documentID,
        content: data,
        commentAuthor: displayName,
        commentAuthorID: id,
        createdAt: timestamp,
      }),
    );

    resetForm();
  };

  return (
    <div className="panel panel-default">
      <div className="commentitem">
        <h3 style={{ fontSize: '2rem', padding: '2rem 0' }} dividing>
          Comments
        </h3>
        <TextArea
          className="commentitem-textbox"
          placeholder="Enter Comment Here:"
          onChange={(e) => setData(e.target.value)}
          value={data}
          rows={10}
          cols="30"
          minRows={3}
          style={{ maxWidth: '100%' }}
        />
        <div>
          <button
            className="commentitem-btnc"
            type="button"
            onClick={handleSubmit}
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
};
export default CommentItem;

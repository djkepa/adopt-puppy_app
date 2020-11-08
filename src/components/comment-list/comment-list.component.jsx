/* eslint-disable eqeqeq */
import React from 'react';
import { useSelector } from 'react-redux';
import { Comment } from 'semantic-ui-react';

import CommentContent from '../comment-content/comment-content.component';

const mapState = (state) => ({
  comments: state.commentData.comments,
});

export const CommentList = ({ blog }) => {
  const { comments } = useSelector(mapState);

  return (
    <>
      <div style={{ textAlign: 'justify' }}>
        <Comment.Group>
          <div style={{ marginTop: '2em' }}>
            {comments &&
              comments
                .filter((elem) => !blog || elem.articleId == blog.documentID)
                .map((elem, i) => (
                  <div key={elem.documentID}>
                    {i != 0 && <hr style={{ height: '1px' }} />}
                    <CommentContent
                      key={elem.documentID}
                      elem={elem}
                      global={!blog}
                    />
                  </div>
                ))}
          </div>
        </Comment.Group>
      </div>
    </>
  );
};

export default CommentList;

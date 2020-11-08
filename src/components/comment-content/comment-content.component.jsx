import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Comment } from 'semantic-ui-react';
import { deleteCommentStart } from '../../redux/Comment/comment.actions';
import { displayDate } from './../../utils/displayDate';

import { ReactComponent as Close } from '../../assets/close.svg';

import './comment-content.styles.scss';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
});

const CommentContent = (props) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const { elem } = props;

  return (
    <Comment className="commentcontent">
      <Comment.Content>
        <div className="commentcontent-top">
          <div className="commentcontent-top-left">
            <Comment.Author className="commentcontent-top-left-auth">
              {elem.commentAuthor}
            </Comment.Author>
            <Comment.Metadata>
              <div className="commentcontent-top-left-date">
                {displayDate(elem.createdAt)}
              </div>
            </Comment.Metadata>
          </div>
          {currentUser.id === elem.commentAuthorID ? (
            <Close
              className="commentcontent-top-right"
              onClick={() => dispatch(deleteCommentStart(elem))}
            ></Close>
          ) : null}
        </div>
        <Comment.Text className="commentcontent-bottom">
          {' '}
          <p name={elem.content}> {elem.content} </p>{' '}
        </Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default CommentContent;

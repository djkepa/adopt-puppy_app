import React from 'react';
import CommentItem from '../comment-item/comment-item.component';
import CommentList from '../comment-list/comment-list.component';

export const CommentSection = ({ blog }) => {
  return (
    <div>
      <CommentItem blog={blog} />
      <CommentList blog={blog} />
    </div>
  );
};
export default CommentSection;

import React from 'react';

import './load-more.styles.scss';

export const LoadMore = ({ onLoadMoreEvt = {} }) => {
  return (
    <buton className="btn-load" onClick={() => onLoadMoreEvt()}>
      Load More
    </buton>
  );
};
export default LoadMore;

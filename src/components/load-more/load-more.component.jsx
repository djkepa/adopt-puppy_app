import React from 'react';

import Button from './../forms/button/button.component';

export const LoadMore = ({ onLoadMoreEvt = {} }) => {
  return <Button onClick={() => onLoadMoreEvt()}>Load More</Button>;
};
export default LoadMore;

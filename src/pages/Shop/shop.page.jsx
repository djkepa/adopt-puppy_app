import React from 'react';

import ProductResults from '../../components/products-results/product-results.component';

import useScrollTop from '../../customHooks/useScrollTop';

export const Shop = () => {
  useScrollTop();
  return (
    <>
      <ProductResults />
    </>
  );
};

export default Shop;

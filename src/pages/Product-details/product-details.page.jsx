import React from 'react';

// Components
import ProductCard from './../../components/product-card/product-card.component';

// Custom Hooks
import useScrollTop from '../../customHooks/useScrollTop';

// Styles
import './product-details.styles.scss';

const ProductDetails = () => {
  useScrollTop();

  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default ProductDetails;

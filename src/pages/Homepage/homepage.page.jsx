import React from 'react';

// Components
import Directory from '../../components/directory/directory.component';
import SAdoption from '../../components/sections/s-adoption/s-adoption.component';
import SAvailable from '../../components/sections/s-available/s-available.component';
import SServices from '../../components/sections/s-services/s-services.component';
import SStatistic from '../../components/sections/s-statistic/s-statistic.component';
import STerm from '../../components/sections/s-term/s-term.component';
import SShop from '../../components/sections/s-shop/s-shop.component';
import SBlog from '../../components/sections/s-blog/s-blog.component';

import ErrorBoundary from '../../utils/errorBoundary';

// Styles
import './homepage.styles.scss';

const Homepage = (props) => {
  return (
    <div>
      <ErrorBoundary>
        <Directory />
        <SAdoption />
        <SStatistic />
        <SServices />
        <SAvailable />
        <STerm />
        <SShop />
        <SBlog />
      </ErrorBoundary>
    </div>
  );
};
export default Homepage;

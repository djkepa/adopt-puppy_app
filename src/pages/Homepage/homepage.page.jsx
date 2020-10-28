import React from 'react';

// Components
import Directory from '../../components/directory/directory.component';
import SAdoption from '../../components/sections/s-adoption/s-adoption.component';
import SAvailable from '../../components/sections/s-available/s-available.component';
import SAbout from '../../components/sections/s-about/s-about.component';
import SSecond from '../../components/sections/s-second/s-second.component';
import SServices from '../../components/sections/s-services/s-services.component';
import SStatistic from '../../components/sections/s-statistic/s-statistic.component';
import STerm from '../../components/sections/s-term/s-term.component';
import STestimonials from '../../components/sections/s-testimonials/s-testimonials-component';
import SShop from '../../components/sections/s-shop/s-shop.component';

import ErrorBoundary from '../../utils/error-bundler';

// Styles
import './homepage.styles.scss';

const Homepage = (props) => {
  return (
    <div>
      <ErrorBoundary>
        <Directory />
        <SAbout />
        <SSecond />
        <SAdoption />
        <SStatistic />
        <SServices />
        <STestimonials />
        <SAvailable />
        <STerm />
      </ErrorBoundary>
      <SShop />
    </div>
  );
};
export default Homepage;

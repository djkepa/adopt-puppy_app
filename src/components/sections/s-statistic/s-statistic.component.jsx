import React from 'react';

//Icons
import { ReactComponent as Puppy } from './../../../assets/puppy.svg';
import { ReactComponent as AidKit } from './../../../assets/first-aid-kit.svg';

import './s-statistic.styles.scss';
export const SStatistic = () => {
  return (
    <>
      <div className="section-statistic">
        <div className="statistic-block">
          <div className="statistic-block-top">
            <Puppy className="statistic-block-top-icon1" />
            <div className="statistic-block-top-number">1282</div>
          </div>
          <div className="statistic-block-bottom">Happy dogs</div>
        </div>
        <div className="statistic-block">
          <div className="statistic-block-top">
            <AidKit className="statistic-block-top-icon2" />
            <div className="statistic-block-top-number">385</div>
          </div>
          <div className="statistic-block-bottom">Emergency Services</div>
        </div>
        <div className="statistic-block">
          <div className="statistic-block-top">
            <Puppy className="statistic-block-top-icon1" />
            <div className="statistic-block-top-number">582</div>
          </div>
          <div className="statistic-block-bottom">Caretakers</div>
        </div>
        <div className="statistic-block">
          <div className="statistic-block-top">
            <Puppy className="statistic-block-top-icon1" />
            <div className="statistic-block-top-number">1524</div>
          </div>
          <div className="statistic-block-bottom">Dog Rescues</div>
        </div>
      </div>
    </>
  );
};
export default SStatistic;

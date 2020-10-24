import React from 'react';

// Assets
import ShopFood from './../../assets/foodbg.jpg';
import ShopToy from './../../assets/toybg.jpg';

// Styles
import './directory.styles.scss';

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopFood})`,
          }}
        >
          <a>Shop Food</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopToy})`,
          }}
        >
          <a>Shop Toys</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;

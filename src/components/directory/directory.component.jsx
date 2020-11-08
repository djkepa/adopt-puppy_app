import React from 'react';

// Components
import Button from './../forms/button/button.component';

// Styles
import './directory.styles.scss';

const Directory = (props) => {
  return (
    <div className="directory">
      <header>
        <div className="aside">
          <h1 className="aside-h1">Don't buy, adopt!</h1>
          <p className="aside-p">
            The unknown truth is that these animals like us, are conscious
            beings with their own personality and feelings and therefore deserve
            our respect and should be treated as equals.
          </p>
          <Button>
            Puppies Available <span className="aside-button_icon">→</span>
          </Button>
        </div>
        <div className="torn"></div>
      </header>
    </div>
  );
};

export default Directory;

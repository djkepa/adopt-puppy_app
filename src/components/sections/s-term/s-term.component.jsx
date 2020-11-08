import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './s-term.styles.scss';

export const STerm = () => {
  return (
    <>
      <div className="section-term">
        <div className="section-term-text">
          <p className="section-term-text-0">Check our →</p>
          <Link to="/" className="section-term-text-1">
            Terms of Adoption.
          </Link>
        </div>
      </div>
    </>
  );
};
export default STerm;

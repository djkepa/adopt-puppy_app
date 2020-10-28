import React from 'react';

// Styles
import './button.styles.scss';

export const Button = ({ children, ...otherProps }) => {
  return (
    <button className="btn btn-white btn-animation-1" {...otherProps}>
      {children}
    </button>
  );
};
export default Button;

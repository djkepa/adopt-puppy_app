import React from 'react';

// Styles
import './button.styles.scss';

export const Button = ({ children, ...otherProps }) => {
  return (
    <button className="btn" {...otherProps}>
      {children}
    </button>
  );
};
export default Button;

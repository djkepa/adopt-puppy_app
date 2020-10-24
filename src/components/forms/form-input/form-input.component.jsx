import React from 'react';

// Styles
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="formRow">
      {label && <label htmlFor="">{label}</label>}

      <input className="formInput" onChange={handleChange} {...otherProps} />
    </div>
  );
};
export default FormInput;

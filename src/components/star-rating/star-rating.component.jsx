import React from 'react';

const StarRating = ({
  count,
  value,
  inactiveColor = '#ddd',
  size = 20,
  activeColor = '#e9ba10',
  onChange,
}) => {
  // short trick
  const stars = Array.from({ length: count }, () => '🟊');

  // Internal handle change function
  // eslint-disable-next-line no-unused-vars
  const handleChange = (value) => {
    onChange(value + 1);
  };

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style = activeColor;
        }
        return (
          <span
            className={'star'}
            key={index}
            style={{
              color: style,
              width: size,
              height: '0',
              lineHeight: '1.6rem',
              fontSize: '26px',
            }}
            // onClick={() => handleChange(index)}
          >
            {s}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;

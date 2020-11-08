import React, { useState } from 'react';

const CircularProgress = ({ style, visible, theme }) => {
  const className = () => {
    switch (theme) {
      case 'light':
        return 'circular-progress-light';
      case 'dark':
        return 'circular-progress-dark';
      default:
        return null;
    }
  };

  return visible ? <div className={className()} style={style} /> : null;
};

CircularProgress.defaultProps = {
  visible: true,
  theme: 'dark',
  style: {},
};

const ImageLoader = (props) => {
  const _loaded = {};
  const spinnerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
  };
  const [loaded, setLoaded] = useState(_loaded[props.src]);

  const onLoad = () => {
    _loaded[props.src] = true;
    setLoaded(true);
  };

  return (
    <>
      {!loaded && <CircularProgress style={spinnerStyle} />}
      <img
        alt={props.alt || ''}
        className={`${props.className || ''} ${
          loaded ? 'is-img-loaded' : 'is-img-loading'
        }`}
        onLoad={onLoad}
        src={props.src}
      />
    </>
  );
};
export default ImageLoader;

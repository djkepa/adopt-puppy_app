import React, { useState } from 'react';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import { SliderRail, Handle, Track, Tick } from './price-range';

import { ReactComponent as Dirrection } from '../../assets/transfer.svg';

import './price-range.styles.scss';

const sliderStyle = {
  position: 'relative',
  width: '100%',
};

const PriceRange = (props) => {
  const [state, setState] = useState({
    domain: [props.min, props.max],
    values: [props?.initMin || props.min, props?.initMax || props.max],
    update: [props.min, props.max].slice(),
    inputMin: props?.initMin || props.min || 0,
    inputMax: props?.initMax || props.max || 500,
    inputError: false,
    reversed: false,
  });

  const onUpdate = (update) => {
    setState(() => ({
      ...state,
      update,
      inputMin: update[0],
      inputMax: update[1],
    }));
  };

  const onChange = (values) => {
    setState(() => ({
      ...state,
      values,
      inputMin: values[0],
      inputMax: values[1],
    }));
    if (values[0] < values[1]) props.onPriceChange(...values);
  };

  return (
    <div style={{ height: 120, width: '100%' }}>
      <div className="price-range-control">
        <input
          className="price-range-input"
          disabled={props.productsLength === 0}
          max={props.max}
          min={props.min}
          type="number"
          readOnly
          value={state.inputMin}
        />
        <Dirrection className="price-range-icon" />
        <input
          className="price-range-input"
          disabled={props.productsLength === 0}
          max={props.max}
          min={props.min}
          type="number"
          readOnly
          value={state.inputMax}
        />
      </div>
      <Slider
        mode={1}
        step={1}
        domain={state.domain}
        rootStyle={sliderStyle}
        onUpdate={onUpdate}
        onChange={onChange}
        values={state.values}
      >
        <Rail>
          {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
        </Rail>
        <Handles>
          {({ handles, activeHandleID, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map((handle) => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={state.domain}
                  isActive={handle.id === activeHandleID}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
        <Ticks count={5}>
          {({ ticks }) => (
            <div className="slider-ticks">
              {ticks.map((tick) => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </div>
          )}
        </Ticks>
      </Slider>
    </div>
  );
};

export default PriceRange;

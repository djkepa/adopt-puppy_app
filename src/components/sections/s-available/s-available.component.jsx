import React from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Icons
import { ReactComponent as ArrowLeft } from './../../../assets/left-arrow.svg';
import { ReactComponent as ArrowRight } from './../../../assets/right-arrow.svg';

// Images
import av1 from './../../../assets/av1.jpg';
import av2 from './../../../assets/av2.jpg';
import av3 from './../../../assets/av3.jpg';
import av4 from './../../../assets/av4.jpg';

// Styles
import './s-available.styles.scss';

export const SAvailable = () => {
  return (
    <>
      <div className="section-available">
        <div className="section-available-header">
          <h4 className="section-available-header-h4">
            &#x268A; Adoption Available
          </h4>
          <h1 className="section-available-header-h1">
            Puppies available for adoption
          </h1>
        </div>

        <div className="section-available-caroseul">
          <div className="section-available-caroseul-point">
            <ArrowLeft className="section-available-caroseul-point-arrow" />
          </div>
          <div className="section-available-caroseul-block">
            <div className="section-available-caroseul-block-item">
              <div className="section-available-caroseul-block-item-link">
                <Link
                  to="/react"
                  className="section-available-caroseul-block-item-link-c"
                >
                  See puppy →
                </Link>
              </div>
              <div className="section-available-caroseul-block-item-birth">
                4yr
              </div>

              <img
                src={av1}
                alt="av1"
                className="section-available-caroseul-block-item-image"
              />
            </div>
            <div className="section-available-caroseul-block-item-name">
              Charlie
            </div>
          </div>
          <div className="section-available-caroseul-block">
            <div className="section-available-caroseul-block-item">
              <div className="section-available-caroseul-block-item-link">
                <Link
                  to="/react"
                  className="section-available-caroseul-block-item-link-c"
                >
                  See puppy →
                </Link>
              </div>
              <div className="section-available-caroseul-block-item-birth">
                10M
              </div>
              <img
                src={av2}
                alt="av2"
                className="section-available-caroseul-block-item-image"
              />
            </div>
            <div className="section-available-caroseul-block-item-name">
              Danny
            </div>
          </div>

          <div className="section-available-caroseul-block">
            <div className="section-available-caroseul-block-item">
              <div className="section-available-caroseul-block-item-link">
                <Link
                  to="/react"
                  className="section-available-caroseul-block-item-link-c"
                >
                  See puppy →
                </Link>
              </div>
              <div className="section-available-caroseul-block-item-birth">
                6M
              </div>
              <img
                src={av3}
                alt="av3"
                className="section-available-caroseul-block-item-image"
              />
            </div>
            <div className="section-available-caroseul-block-item-name">
              Beannie
            </div>
          </div>

          <div className="section-available-caroseul-block">
            <div className="section-available-caroseul-block-item">
              <div className="section-available-caroseul-block-item-link">
                <Link
                  to="/react"
                  className="section-available-caroseul-block-item-link-c"
                >
                  See puppy →
                </Link>
              </div>
              <div className="section-available-caroseul-block-item-birth">
                1yr
              </div>
              <img
                src={av4}
                alt="av4"
                className="section-available-caroseul-block-item-image"
              />
            </div>
            <div className="section-available-caroseul-block-item-name">
              Jenny
            </div>
          </div>

          <div className="section-available-caroseul-point">
            <ArrowRight className="section-available-caroseul-point-arrow" />
          </div>
        </div>
      </div>
    </>
  );
};
export default SAvailable;

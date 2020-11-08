import React from 'react';
import VanillaTilt from 'vanilla-tilt';

// Icons
import { ReactComponent as DogTraining } from './../../../assets/dogtraining.svg';
import { ReactComponent as Stetoscope } from './../../../assets/scope.svg';
import { ReactComponent as PetFood } from './../../../assets/pet-food.svg';

import { ReactComponent as HeartPet } from './../../../assets/heart.svg';
import { ReactComponent as Emergency } from './../../../assets/siren.svg';
import { ReactComponent as Reports } from './../../../assets/veterinary-4.svg';

// Styles
import './s-services.styles.scss';

function Tilt({ children }) {
  const tiltRef = React.useRef();
  React.useEffect(() => {
    const { current: tiltNode } = tiltRef;
    const vanillaTiltOptions = {
      max: 5,
      speed: 400,
      glare: true,
      'max-glare': 0.1,
    };
    VanillaTilt.init(tiltNode, vanillaTiltOptions);
    return () => tiltNode.vanillaTilt.destroy();
  }, []);

  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  );
}

const SServices = () => {
  return (
    <>
      <div className="section-services">
        <div className="section-services-top">
          <div className="section-services-top-block">
            <h4 className="section-services-top-block-h4">&#x268A; Services</h4>
            <h2 className="section-services-top-block-h2">
              We take care of all our pets
            </h2>
          </div>
        </div>
        <div className="section-services-bottom">
          <div className="section-services-bottom-lblock">
            <div className="section-services-bottom-lblock-1">
              <h4 className="section-services-bottom-lblock-1-h4">
                Dog Training Services
              </h4>
              <DogTraining className="section-services-bottom-lblock-1-icon1" />
            </div>
            <div className="section-services-bottom-lblock-2">
              <h4 className="section-services-bottom-lblock-2-h4">
                Dog Veterinary
              </h4>
              <Stetoscope className="section-services-bottom-lblock-2-icon2" />
            </div>
            <div className="section-services-bottom-lblock-3">
              <h4 className="section-services-bottom-lblock-3-h4">
                Dog Food and Nutrition
              </h4>
              <PetFood className="section-services-bottom-lblock-3-icon3" />
            </div>
          </div>
          <Tilt>
            <div className="section-services-bottom-image"></div>
          </Tilt>

          <div className="section-services-bottom-rblock">
            <div className="section-services-bottom-rblock-1">
              <HeartPet className="section-services-bottom-rblock-1-icon1" />
              <h4 className="section-services-bottom-rblock-1-h4">
                Dog Food and Nutrition
              </h4>
            </div>
            <div className="section-services-bottom-rblock-2">
              <Emergency className="section-services-bottom-rblock-2-icon2" />
              <h4 className="section-services-bottom-rblock-2-h4">
                Dog Training Services
              </h4>
            </div>
            <div className="section-services-bottom-rblock-3">
              <Reports className="section-services-bottom-rblock-3-icon3" />
              <h4 className="section-services-bottom-rblock-3-h4">
                Dog Training Services
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SServices;

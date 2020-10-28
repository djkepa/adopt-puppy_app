import React from 'react';

// Styles
import './s-adoption.styles.scss';

export const SAdoption = () => {
  return (
    <>
      <div className="section-adoption" id="about">
        <div className="section-adoption-top">
          <div className="section-adoption-top-block">
            <h4 className="section-adoption-top-block-h4">--- How we work</h4>
            <h2 className="section-adoption-top-block-h2">
              Pet adoption process
            </h2>
          </div>
        </div>
        <div className="section-adoption-bottom">
          <div className="section-adoption-bottom--block">
            <div className="section-adoption-bottom--block_picture">
              <h2 className="section-adoption-bottom--block_picture-h2">1</h2>
              <div className="section-adoption-bottom--block_picture-img"></div>
            </div>
            <div className="section-adoption-bottom--block-textblock">
              <h2 className="section-adoption-bottom--block-textblock-h2">
                Find your pet
              </h2>
              <p className="section-adoption-bottom--block-textblock-p">
                Vel adio persius vitupertaribus. No delenit detracto eum.
              </p>
            </div>
          </div>
          <div className="dots1"></div>
          <div className="section-adoption-bottom--block">
            <div className="section-adoption-bottom--block_picture">
              <h2 className="section-adoption-bottom--block_picture-h2">2</h2>
              <div className="section-adoption-bottom--block_picture-img2"></div>
            </div>
            <div className="section-adoption-bottom--block-textblock">
              <h2 className="section-adoption-bottom--block-textblock-h2">
                Find your pet
              </h2>
              <p className="section-adoption-bottom--block-textblock-p">
                Vel adio persius vitupertaribus. No delenit detracto eum.
              </p>
            </div>
          </div>
          <div className="dots2"></div>
          <div className="section-adoption-bottom--block">
            <div className="section-adoption-bottom--block_picture">
              <h2 className="section-adoption-bottom--block_picture-h2">3</h2>
              <div className="section-adoption-bottom--block_picture-img3"></div>
            </div>
            <div className="section-adoption-bottom--block-textblock">
              <h2 className="section-adoption-bottom--block-textblock-h2">
                Find your pet
              </h2>
              <p className="section-adoption-bottom--block-textblock-p">
                Vel adio persius vitupertaribus. No delenit detracto eum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SAdoption;

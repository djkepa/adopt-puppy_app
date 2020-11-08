import React from 'react';

// Styles
import './s-about.styles.scss';
export const SAbout = () => {
  return (
    <>
      <div className="section-top">
        <span className="section-top-arrow section-top-arrow-left"></span>
        <div className="section-top--block">
          <div className="section-top--block_text">
            <h4 className="section-top--block_text__h4">Grooming services</h4>
            <p className="section-top--block_text__p">
              Lorem ipsum dolor sit amet consecteur adipiscing alit.
            </p>
          </div>
        </div>
        <div className="section-top--block">
          <div className="section-top--block_text">
            <h4 className="section-top--block_text__h4">Veterinary 24/7</h4>
            <p className="section-top--block_text__p">
              Maecenas augue tortorum ultricies vitae pulvinar eutu.
            </p>
          </div>
        </div>
        <div className="section-top--block">
          <div className="section-top--block_text">
            <h4 className="section-top--block_text__h4">Fun Activity</h4>
            <p className="section-top--block_text__p">
              Nuc vestibul locus tris tique est tincidunt iaculis.
            </p>
          </div>
        </div>
        <span className="section-top-arrow section-top-arrow-right"></span>
      </div>

      <div className="section-bottom">
        <div className="section-bottom--left"></div>
        <div className="section-bottom--right">
          <h4 className="section-bottom--right_h4">&#x268A; About Us</h4>
          <h2 className="section-bottom--right_h2">The best for your pet!</h2>
          <p className="section-bottom--right_p1">
            Scripta salutatus repudiandao pro te e t vel adio persius
            vitupartaroi. No delenti detracto eum, vix no intrego taci mates
            persecuti.
          </p>
          <p className="section-bottom--right_p2">
            Eam od sale persius, id vis iudicabit cor rumpit. Usu ad modo illum
            assum.
          </p>
          <div className="section-bottom--right_block">
            <div className="section-bottom--right_block-in">
              <span className="section-bottom--right_block-in__icon">X</span>
              <p className="section-bottom--right_block-in__text">
                Vel adio persius vitupertaoribus
              </p>
            </div>
            <div className="section-bottom--right_block-in">
              <span className="section-bottom--right_block-in__icon">X</span>
              <p className="section-bottom--right_block-in__text">
                Vel adio persius vitupertaoribus
              </p>
            </div>
            <div className="section-bottom--right_block-in">
              <span className="section-bottom--right_block-in__icon">X</span>
              <p className="section-bottom--right_block-in__text">
                Vel adio persius vitupertaoribus
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SAbout;

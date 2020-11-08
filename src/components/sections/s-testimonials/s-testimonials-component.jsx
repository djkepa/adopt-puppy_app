import React from 'react';

// Icons
import adopted1 from './../../../assets/adopted1.jpg';
import adopted2 from './../../../assets/adopted2.jpg';

// Styles
import './s-testimonials.styles.scss';

export const STestimonials = () => {
  return (
    <>
      <div className="section-testimonials">
        <div className="section-testimonials-left">
          <div className="section-testimonials-left-block">
            <h4 className="section-testimonials-left-block--h4">
              &#x268A; Testimonials
            </h4>
            <h1 className="section-testimonials-left-block--h1">
              What our clients are saying?
            </h1>
            <p className="section-testimonials-left-block--p1">
              Per elit antiopam id, melius perfecto eam te, ex sint luptatum
              duo. Quio ubique accusata deterussie id, vis popuilo poatrices
              urbanito na, mei eros tandos menseraux ex.
            </p>
            <p className="section-testimonials-left-block--p2">
              Scripta salutatus repuidiado pro te, et vel adio persius vtupe
              rtorisu. No delenit detracto.
            </p>
            <p className="section-testimonials-left-block--p3">
              Eam od sale prius, id vis iudicabit cer rumpit. Usu ad modo illum
              assum.
            </p>
            <button className="section-testimonials-left-block--button">
              Show all
              <span className="section-testimonials-left-block--button_icon">
                →
              </span>
            </button>
          </div>
        </div>
        <div className="section-testimonials-right">
          <div className="section-testimonials-right-block">
            <div className="section-testimonials-right-block-top">
              <span className="section-testimonials-right-block-top-icon">
                &#8221;
              </span>
              <div className="section-testimonials-right-block-top-box">
                <img
                  alt="adopted1"
                  src={adopted1}
                  className="section-testimonials-right-block-top-box-image"
                />

                <div>
                  <h4 className="section-testimonials-right-block-top-box-h4">
                    Jared Kornoson
                  </h4>
                  <p className="section-testimonials-right-block-top-box-p">
                    / California
                  </p>
                  <i className="section-testimonials-right-block-top-box-i">
                    Adopted Teddy
                  </i>
                </div>
              </div>
            </div>
            <div className="section-testimonials-right-block-bottom">
              <p>
                Elit sanctus mea no. Ne duo vocnt vocibus consetetur. Singulis
                etom percula an vis, pri graeco partiendo te, ali odmodus
                copiose id sea.
              </p>
            </div>
          </div>

          <div className="section-testimonials-right-block">
            <div className="section-testimonials-right-block-top">
              <span className="section-testimonials-right-block-top-icon">
                &#8221;
              </span>
              <div className="section-testimonials-right-block-top-box">
                <img
                  alt="adopted1"
                  src={adopted2}
                  className="section-testimonials-right-block-top-box-image"
                />

                <div>
                  <h4 className="section-testimonials-right-block-top-box-h4">
                    Derrick James
                  </h4>
                  <p className="section-testimonials-right-block-top-box-p">
                    / New York
                  </p>
                  <i className="section-testimonials-right-block-top-box-i">
                    Adopted Rex
                  </i>
                </div>
              </div>
            </div>
            <div className="section-testimonials-right-block-bottom">
              <p>
                Elit sanctus mea no. Ne duo vocnt vocibus consetetur. Singulis
                etom percula an vis, pri graeco partiendo te, ali odmodus
                copiose id sea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default STestimonials;

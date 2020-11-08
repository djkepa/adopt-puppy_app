import React from 'react';

// Icons
import { ReactComponent as Location } from '../../assets/location.svg';
import { ReactComponent as Call } from '../../assets/call.svg';

// Styles
import './footer.styles.scss';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer-top">Logo</div>
      <div className="footer-mid">
        <div className="footer-mid-box">
          <div className="footer-mid-box-icon">
            <Location className="footer-mid-box-icon-1" />
          </div>
          <div className="footer-mid-box-text">
            516 Columbia Boulevard Baltimore, MD 21202
          </div>
        </div>
        <div className="footer-mid-box">
          <div className="footer-mid-box-icon">
            <Call className="footer-mid-box-icon-1" />
          </div>
          <div className="footer-mid-box-text">
            Office: 772-619-6309 Inquiries: 722-619-6432
          </div>
        </div>
        <div className="footer-mid-box">
          <div className="footer-mid-box-icon">
            <Location className="footer-mid-box-icon-1" />
          </div>
          <div className="footer-mid-box-text">
            Mon - Fri: 9:00am - 8:00pm Sat - Sun: Closed
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; Copyright 2020 by Branislav Grozdanovic. This does NOT apply if
        you plan to produce your own course or tutorials based on this project.
      </div>
    </footer>
  );
};

export default Footer;

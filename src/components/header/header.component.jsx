// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './header.styles.scss';

// Assets
import Logo from './../../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Adopt-puppy Logo" />
          </Link>
        </div>
        <div className="callToActions">
          <ul>
            <li>
              <Link to="/registration">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

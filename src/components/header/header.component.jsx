// Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Utils
import { auth } from './../../firebase/utils';

// Styles
import './header.styles.scss';

// Assets
import Logo from './../../assets/logo.png';

// Map func
const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Header = () => {
  const { currentUser } = useSelector(mapState);
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
            {currentUser && [
              <li key={1}>
                <Link to="/">Home</Link>
              </li>,
              <li key={2}>
                <span onClick={() => auth.signOut()}>LogOut</span>
              </li>,
            ]}

            {!currentUser && [
              <li key={1}>
                <Link to="/dashboard">Register</Link>
              </li>,
              <li key={2}>
                <Link to="/registration">Register</Link>
              </li>,
              <li key={3}>
                <Link to="/login">Login</Link>
              </li>,
            ]}
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;

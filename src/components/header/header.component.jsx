// Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { signOutUserStart } from './../../redux/User/user.actions';

// Styles
import './header.styles.scss';

// Assets
import Logo from './../../assets/logo.png';

// Map func
const mapState = (state) => ({
  currentUser: state.user.currentUser,
});

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="SimpleTut LOGO" />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        <div className="callToActions">
          <ul>
            {currentUser && [
              <li key={1}>
                <Link to="/dashboard">My Account</Link>
              </li>,
              <li key={2}>
                <span onClick={() => signOut()}>LogOut</span>
              </li>,
            ]}

            {!currentUser && [
              <li key={1}>
                <Link to="/registration">Register</Link>
              </li>,
              <li key={2}>
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

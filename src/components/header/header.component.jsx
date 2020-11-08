// Libraries
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { signOutUserStart } from './../../redux/User/user.actions';
import {
  selectCartItemsCount,
  selectCartHidden,
} from './../../redux/Cart/cart.selectors';

// Components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// Styles
import './header.styles.scss';

// Assets
import Logo from './../../assets/logo.png';
import { ReactComponent as RotateArrow } from './../../assets/rotatearrow.svg';
import { ReactComponent as Profile } from './../../assets/profile.svg';

import { ReactComponent as Facebook } from './../../assets/facebook.svg';
import { ReactComponent as Twitter } from './../../assets/twitter.svg';
import { ReactComponent as Instagram } from './../../assets/instagram.svg';
import { ReactComponent as Youtube } from './../../assets/youtube.svg';

// Map func
const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
  hidden: selectCartHidden(state),
});

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser, hidden } = useSelector(mapState);
  const [isActive, setActive] = useState('false');
  const [condition, setCondition] = useState(true);
  const [condition2, setCondition2] = useState(true);

  const handleToggle = () => {
    if (true) setActive(!isActive);
  };

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  // if (hidden) {
  //   setCondition2(false);
  // }

  return (
    <>
      <div className="social">
        <p className="social-text">
          Adopt Pet - For the millennial animal lover and premium product
          connoisseur!
        </p>
        <div className="social-right">
          <p className="social-text">Folow Adopt Pet on</p>
          <Facebook className="social-icon" />
          <Twitter className="social-icon" />
          <Instagram className="social-icon" />
          <Youtube className="social-icon" />
        </div>
      </div>
      <div className="navbar" id="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={Logo} alt="Adopt-dog LOGO" className="navbar-logo-img" />
          </Link>
        </div>
        <div className="navbar-routes">
          <ul className="navbar-routes--list">
            <li>
              <div
                className="navbar-routes--primary"
                onClick={() => setCondition(!condition)}
              >
                Dog
                <RotateArrow className={condition ? 'rotate' : 'rotate2'} />
              </div>
            </li>

            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-rightside">
          <div className="navbar-rightside-cart">
            <CartIcon className="navbar-rightside--cart_icon" />
          </div>

          {currentUser && [
            <div className="navbar-rightside-block" key={1}>
              <div
                className="profile-box"
                onClick={() => setCondition2(!condition2)}
              >
                <Profile className="profile-box-icon" />
                <div className="profile-box-name" onClick={handleToggle}>
                  {currentUser.displayName}
                </div>
              </div>
              <ul
                className={
                  condition2
                    ? 'profile-box-dropmenu'
                    : 'profile-box-dropmenu dropmenu-open'
                }
              >
                <li
                  onClick={() => history.push('/account')}
                  className="profile-box-dropmenu-item"
                >
                  Account info
                </li>

                <li
                  className="profile-box-dropmenu-item"
                  onClick={() => signOut()}
                >
                  Sign out
                </li>
              </ul>
            </div>,
          ]}

          {!currentUser && [
            <div key={1}>
              <Link to="/registration" className="navbar-router-buttons">
                Sign Up
              </Link>
            </div>,
            <div key={2}>
              <Link to="/login" className="navbar-router-buttons">
                Log in
              </Link>
            </div>,
          ]}
        </div>
        {hidden ? null : <CartDropdown />}
      </div>

      <>
        <ul
          className={condition ? 'bottombar-list' : 'bottombar-list show-menu'}
        >
          <li className="bottombar-list-li">
            <Link to="/">Adopt</Link>
          </li>
          <li className="bottombar-list-li">
            <Link className="bottombar-list-li-box" to="/">
              Training{' '}
            </Link>
          </li>
          <li className="bottombar-list-li">
            <Link to="/">Nutration</Link>
          </li>
          <li className="bottombar-list-li">
            <Link to="/">Vegetenary</Link>
          </li>
          <li className="bottombar-list-li">
            <Link to="/">Grooming</Link>
          </li>
          <li className="bottombar-list-li">
            <Link to="/">Emergency</Link>
          </li>
        </ul>
      </>
    </>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;

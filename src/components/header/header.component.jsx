// Libraries
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

// Map func
const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
  hidden: selectCartHidden(state),
});

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser, hidden } = useSelector(mapState);
  const [isActive, setActive] = useState('false');
  const [condition, setCondition] = useState(true);
  const [condition2, setCondition2] = useState(true);

  const [prva, setPrva] = useState(true);

  const active = 'active';
  const deactive = 'deactive';

  const handleToggle = () => {
    if (true) setActive(!isActive);
  };

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  const menu = active ? null : 'active';
  const menu2 = active ? null : 'show-menu';
  return (
    <>
      <div className="navbar" id="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={Logo} alt="Adopt-dog LOGO" className="navbar-logo-img" />
          </Link>
        </div>
        <div className="navbar-routes">
          <ul className="navbar-routes--list">
            <li>
              <Link to="/" onClick={() => setCondition(!condition)}>
                Dog
                <RotateArrow className={condition ? 'rotate' : 'rotate2'} />
              </Link>
            </li>
            <li>
              <Link to="/search">Shop</Link>
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
                  Bane Grozdanovic
                </div>
              </div>
              <ul
                className={
                  condition2
                    ? 'profile-box-dropmenu'
                    : 'profile-box-dropmenu dropmenu-open'
                }
              >
                <li className="profile-box-dropmenu-item">Account info </li>
                <li className="profile-box-dropmenu-item">Setting</li>
                <li className="profile-box-dropmenu-item">Sign out</li>
              </ul>
            </div>,
          ]}

          {!currentUser && [
            <div key={1}>
              <Link to="/registration">Sign Up</Link>
            </div>,
            <div key={2}>
              <Link to="/login">Log in</Link>
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
            <Link to="/">Activity</Link>
          </li>
          <li className="bottombar-list-li">
            <Link to="/">Nutration</Link>
          </li>
          <li className="bottombar-list-li">
            <Link to="/">Vegetenary</Link>
          </li>
          <li className="bottombar-list-li">
            <Link to="/">Resques</Link>
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
{
  /* <span onClick={() => signOut()}>Sign out</span> */
}

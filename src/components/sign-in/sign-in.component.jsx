import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as GooglePlus } from '../../assets/google-plus.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';

// Redux
import {
  emailSignInStart,
  googleSignInStart,
} from './../../redux/User/user.actions';

// Components
import Button from './../forms/button/button.component';
import AuthWrapper from './../auth-wrapper/auth-wrapper.component';
import FormInput from './../forms/form-input/form-input.component';

// Styles
import './sign-in.styles.scss';

// Initial selector
const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const SignIn = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector(mapState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push('/');
    }
  }, [currentUser]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };

  const configAuthWrapper = {
    headline: 'LogIn',
  };
  return (
    <AuthWrapper className="overlow" {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Your email"
            handleChange={(e) => setEmail(e.target.value)}
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            label="Your password"
            handleChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="links">
            <Link to="/recovery">Forgot Password?</Link>
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
          <div className="dwn-label">or Log in with:</div>
          <div className="socialSignin">
            <div className="row">
              <button className="social-btn">
                <Facebook className="social-icons" />
              </button>

              <button className="social-btn" onClick={handleGoogleSignIn}>
                <GooglePlus className="social-icons" />
              </button>
              <button className="social-btn">
                <Twitter className="social-icons" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;

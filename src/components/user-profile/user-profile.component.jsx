import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { displayDate } from './../../utils/displayDate';
import ImageLoader from './../image-loader/image-loader.component';
import Button from './../forms/button/button.component';

// Icons
import userIMG from './../../assets/user.png';

// Styles
import './user-profile.styles.scss';

const UserProfile = (props) => {
  let history = useHistory();
  const profile = useSelector((state) => state.user.currentUser);
  return (
    <div className="user-profile">
      <div className="user-profile-block">
        <div className="user-profile-details">
          <div className="user-profile-header">User Profile</div>
          <h2 className="user-profile-name">Display Name: </h2>
          <span className="user-profile-name-box">{profile.displayName}</span>
          <br />
          <span className="user-profile-name">Email</span>
          <br />
          <h5 className="user-profile-name-box">{profile.email}</h5>
          <span className="user-profile-name">Address</span>
          <br />
          {profile.address ? (
            <h5 className="user-profile-name-box">{profile.address}</h5>
          ) : (
            <h5 className="text-subtle text-italic">Address not set</h5>
          )}
          <span className="user-profile-name">Mobile</span>
          <br />
          {profile.mobile ? (
            <h5 className="user-profile-name-box">
              {profile.mobile ? profile.mobile : '+381'}
            </h5>
          ) : (
            <h5 className="text-subtle text-italic">Mobile not set</h5>
          )}
          <br />
          <br />

          <div className="user-profile-button">
            <Button onClick={() => history.push('/account/edit')}>
              Edit Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
// eslint-disable-next-line no-lone-blocks
{
  /* <h5>{displayDate(profile.createdDate)}</h5> */
}

// {profile.createdDate ? (
//   <h5>{displayDate(profile.createdDate.toDate())}</h5>
// ) : (
//   <h5 className="text-subtle text-italic">Not available</h5>
// )}

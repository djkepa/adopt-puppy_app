import React from 'react';

// Icons
import userIMG from './../../assets/user.png';

// Styles
import './user-profile.styles.scss';

const UserProfile = (props) => {
  const { currentUser } = props;
  const { displayName } = currentUser;

  return (
    <div className="userProfile">
      <ul>
        <li>
          <div className="img">
            <img src={userIMG} alt="user-phot" />
          </div>
        </li>
        <li>
          <span className="displayName">{displayName && displayName}</span>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;

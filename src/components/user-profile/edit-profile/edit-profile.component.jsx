import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import FormInput from '../../forms/form-input/form-input.component';
import Button from '../../forms/button/button.component';

import { updateProfile } from '../../../redux/User/user.actions';
import useFileHandler from '../../../customHooks/useFileHandler';

import './edit-profile.styles.scss';

const EditProfile = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { profile, auth, isLoading } = useSelector((state) => ({
    profile: state.user.currentUser,
    auth: state.auth,
  }));
  const [displayName, setDisplayName] = useState(
    profile.displayName ? profile.displayName : '',
  );
  const [email, setEmail] = useState(profile.email ? profile.email : '');
  const [address, setAddress] = useState(
    profile.address ? profile.address : '',
  );
  const [mobile, setMobile] = useState(profile.mobile ? profile.mobile : '');
  const [avatar, setAvatar] = useState(profile.avatar ? profile.avatar : '');

  const { imageFile, isFileLoading, onFileChange } = useFileHandler({
    avatar: {},
  });

  const onSubmitUpdate = () => {
    dispatch(
      updateProfile({
        updates: {
          displayName: displayName,

          address: address,
          mobile: mobile,
          avatar: avatar,
        },
        files: {
          avatarFile: imageFile.avatar.file,
        },
        credentials: {
          id: profile.id,
        },
      }),
    );
    history.push('/account');
  };

  return (
    <>
      <div className="edit-profile">
        <h3 className="edit-profile-header">Edit Account Details</h3>

        <div className="edit-profile-banner">
          <div className="edit-profile-avatar-wrapper">
            <input
              accept="image/x-png,image/jpeg"
              id="edit-avatar"
              onChange={(e) =>
                onFileChange(e, { name: 'avatar', type: 'single' })
              }
              type="file"
            />
            {isFileLoading ? (
              <div className="loading-wrapper"></div>
            ) : (
              <label
                className="edit-button edit-avatar-button"
                htmlFor="edit-avatar"
              >
                <i className="fa fa-pen" />
              </label>
            )}
          </div>
        </div>
        <div className="edit-profile-details">
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="* Full name"
            isRequired={true}
            handleChange={(e) => setDisplayName(e.target.value)}
          />
          <FormInput
            disabled
            type="email"
            name="email"
            value={email}
            label="* Email"
            isRequired={true}
            handleChange={(e) => setEmail(e.target.value)}
          />

          <FormInput
            type="text"
            name="address"
            value={address}
            label="Address"
            isRequired={false}
            handleChange={(e) => setAddress(e.target.value)}
          />

          <FormInput
            type="text"
            name="mobile"
            value={mobile}
            label="Phone"
            isRequired={false}
            handleChange={(e) => setMobile(e.target.value)}
          />

          <br />
          <div className="edit-profile-buttons">
            <Button
              disabled={isLoading}
              onClick={() => history.push('/account')}
            >
              Back to Profile
            </Button>
            <Button onClick={onSubmitUpdate}>Update Profile</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;

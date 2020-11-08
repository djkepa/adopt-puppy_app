import userTypes from './user.types';

export const setLoading = (bool = true) => ({
  type: userTypes.LOADING,
  payload: bool,
});

export const emailSignInStart = (userCredentials) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: userCredentials,
});

export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
});

export const signOutUserStart = () => ({
  type: userTypes.SIGN_OUT_USER_START,
});

export const signOutUserSuccess = () => ({
  type: userTypes.SIGN_OUT_USER_SUCCESS,
});

export const signUpUserStart = (userCredentials) => ({
  type: userTypes.SIGN_UP_USER_START,
  payload: userCredentials,
});

export const userError = (err) => ({
  type: userTypes.USER_ERROR,
  payload: err,
});

export const resetPasswordStart = (userCredentials) => ({
  type: userTypes.RESET_PASSWORD_START,
  payload: userCredentials,
});

export const resetPasswordSuccess = () => ({
  type: userTypes.RESET_PASSWORD_SUCCESS,
  payload: true,
});

export const resetUserState = () => ({
  type: userTypes.RESET_USER_STATE,
});

export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START,
});

export const clearProfile = () => ({
  type: userTypes.CLEAR_PROFILE,
});

export const setProfile = (user) => ({
  type: userTypes.SET_PROFILE,
  payload: user,
});

export const updateEmail = (password, newEmail) => ({
  type: userTypes.UPDATE_EMAIL,
  payload: {
    password,
    newEmail,
  },
});

export const updateProfile = (newProfile) => ({
  type: userTypes.UPDATE_PROFILE,
  payload: {
    updates: newProfile.updates,
    files: newProfile.files,
    credentials: newProfile.credentials,
  },
});

export const updateProfileSuccess = (updates) => ({
  type: userTypes.UPDATE_PROFILE_SUCCESS,
  payload: updates,
});

import userTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  signInSuccess: false,
  signUpSuccess: false,
  signUpError: [],
  resetPasswordSuccess: false,
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInSuccess: payload,
      };

    case userTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: payload,
      };

    case userTypes.SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: payload,
      };
    case userTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: payload,
      };

    case userTypes.RESET_PASSWORD_ERROR:
      return {
        ...state,
        resetPasswordError: payload,
      };
    default:
      return state;
  }
};

export default userReducer;

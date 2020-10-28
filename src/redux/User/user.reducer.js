import userTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  resetPasswordSuccess: false,
  userErr: [],
  editUser: {
    error: null,
    loading: false,
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userErr: [],
      };

    case userTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: action.payload,
      };

    case userTypes.USER_ERROR:
      return {
        ...state,
        userErr: action.payload,
      };

    case userTypes.RESET_USER_STATE:
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
      };

    case userTypes.EDIT_USER_START:
      return {
        ...state,
        editUser: { ...state.editUser, loading: true },
      };

    case userTypes.EDIT_USER_SUCCESS:
      return {
        ...state,
        editUser: { ...state.editUser, loading: false, error: false },
      };

    case userTypes.EDIT_USER_ERROR:
      return {
        ...state,
        editUser: {
          ...state.editUser,
          loading: false,
          error: action.payload,
        },
      };

    case userTypes.CLEAN_UP:
      return {
        editUser: {
          ...state.editUser,
          loading: false,
          error: null,
        },
      };
    default:
      return state;
  }
};

export default userReducer;

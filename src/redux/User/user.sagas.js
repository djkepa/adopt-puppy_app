import { takeLatest, call, all, put } from 'redux-saga/effects';
import {
  auth,
  handleUserProfile,
  getCurrentUser,
  GoogleProvider,
} from './../../firebase/utils';
import userTypes from './user.types';
import {
  signInSuccess,
  signOutUserSuccess,
  resetPasswordSuccess,
  userError,
  updateProfileSuccess,
  setLoading,
} from './user.actions';
import {
  handleResetPasswordAPI,
  handleUpdateEmail,
  handleStoreImage,
  handleUpdateProfile,
} from './user.helpers';

import { displayActionMessage } from '../../utils/displayActionMessage';

export function* getSnapshotFromUserAuth(user, additionalData = {}) {
  try {
    yield put(setLoading(true));
    const userRef = yield call(handleUserProfile, {
      userAuth: user,
      additionalData,
    });
    const snapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data(),
      }),
    );
    yield put(setLoading(false));
  } catch (err) {
    console.log(err);
  }
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    yield put(setLoading(true));
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
    yield put(setLoading(false));
  } catch (err) {
    console.log(err);
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
  try {
    yield put(setLoading(true));

    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
    yield put(setLoading(false));
  } catch (err) {
    console.log(err);
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
  try {
    yield auth.signOut();
    yield put(signOutUserSuccess());
  } catch (err) {
    console.log(err);
  }
}

export function* onSignOutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* signUpUser({
  payload: { displayName, email, password, confirmPassword },
}) {
  if (password !== confirmPassword) {
    const err = ["Password Don't match"];
    yield put(userError(err));
    return;
  }

  try {
    yield put(setLoading(true));
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const additionalData = { displayName };
    yield getSnapshotFromUserAuth(user, additionalData);
    yield put(setLoading(false));
  } catch (err) {
    console.log(err);
  }
}

export function* onSignUpUserStart() {
  yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);
}

export function* resetPassword({ payload: { email } }) {
  try {
    yield call(handleResetPasswordAPI, email);
    yield put(resetPasswordSuccess());
  } catch (err) {
    yield put(userError(err));
  }
}

export function* onResetPasswordStart() {
  yield takeLatest(userTypes.RESET_PASSWORD_START, resetPassword);
}

export function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(GoogleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    console.log(err);
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* updateEmail({ payload }) {
  try {
    yield call(handleUpdateEmail, payload.newEmail);
    yield call(displayActionMessage, 'Email Updated Successfully', 'success');
  } catch (err) {
    console.log(err.message);
  }
}

export function* onUpdateEmail() {
  yield takeLatest(userTypes.UPDATE_EMAIL, updateEmail);
}

export function* updateProfile({ payload }) {
  try {
    yield put(setLoading(true));

    const { id } = payload.credentials;
    const { avatarFile } = payload.files;

    if (avatarFile) {
      const avatarURL = avatarFile
        ? yield call(handleStoreImage, id, 'avatar', avatarFile)
        : payload.updates.avatar;
      const updates = {
        ...payload.updates,
        avatar: avatarURL,
      };

      yield call(handleUpdateProfile, id, updates);
      yield put(updateProfileSuccess(updates));
    } else {
      yield call(handleUpdateProfile, id, payload.updates);
      yield put(updateProfileSuccess(payload.updates));
    }

    yield call(
      displayActionMessage,
      'Profile Updated Successfully!',
      'success',
    );
    yield put(setLoading(false));
  } catch (err) {
    console.log(err.message);
  }
}

export function* onUpdateProfile() {
  yield takeLatest(userTypes.UPDATE_PROFILE, updateProfile);
}

export default function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutUserStart),
    call(onSignUpUserStart),
    call(onResetPasswordStart),
    call(onGoogleSignInStart),
    call(onUpdateEmail),
    call(onUpdateProfile),
  ]);
}

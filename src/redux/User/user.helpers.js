import {
  auth,
  storage,
  reauthenticate,
  firestore,
} from './../../firebase/utils';

// const user = auth.currentUser;

// user.updatePassword

export const handleResetPasswordAPI = (email) => {
  const config = {
    url: 'http://localhost:3000/login',
  };

  return new Promise((resolve, reject) => {
    auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        resolve();
      })
      .catch(() => {
        const err = ['Email not found. Please try again.'];
        reject(err);
      });
  });
};

export const handleUpdateEmail = (newEmail) => {
  return new Promise((resolve, reject) => {
    reauthenticate()
      .then(() => {
        const user = auth.currentUser;
        user
          .updateEmail(newEmail)
          .then(() => {
            resolve('Email Successfully updated');
          })
          .catch((error) => reject(error));
      })
      .catch((error) => reject(error));
  });
};

export const handleStoreImage = async (id, folder, imageFile) => {
  const snapshot = await storage.ref(folder).child(id).put(imageFile);
  const downloadURL = await snapshot.ref.getDownloadURL();

  return downloadURL;
};

export const handleUpdateProfile = (id, updates) =>
  firestore.collection('users').doc(id).update(updates);

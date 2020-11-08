import { firestore } from './../../firebase/utils';

export const handleAddBlog = (data) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('blogs')
      .doc()
      .set(data)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleFetchBlogs = () => {
  return new Promise((resolve, reject) => {
    let ref = firestore.collection('blogs');
    ref
      .get()
      .then((snapshot) => {
        const data = [
          ...snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              documentID: doc.id,
            };
          }),
        ];

        resolve({
          data,
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleDeleteBlog = (documentID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('blogs')
      .doc(documentID)
      .delete()
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleFetchBlog = (blogID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('blogs')
      .doc(blogID)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          resolve({
            ...snapshot.data(),
            documentID: blogID,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        console.err(err);
        reject(err);
      });
  });
};

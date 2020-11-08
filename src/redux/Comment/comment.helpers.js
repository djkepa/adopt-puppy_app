import { firestore } from './../../firebase/utils';

export const handleAddComment = (data) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('comments')
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

export const handleDeleteComment = (data) => {
  return new Promise((resolve, reject) => {
    let ref = firestore
      .collection('comments')
      .where('articleId', '==', data.articleId)
      .where('content', '==', data.content);

    ref
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref.delete();
        });
      })
      .then(() => {
        resolve();
      })

      .catch((err) => {
        reject(err);
      });
  });
};

export const handleFetchComments = () => {
  return new Promise((resolve, reject) => {
    // const pageSize = 6;

    let ref = firestore.collection('comments');
    // .orderBy('createdAt');
    // .limit(pageSize);

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
        console.log(err);
      });
  });
};

export const deleteBlog = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('blogs')
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: 'BLOG_DELETION', id: id });

        firestore
          .collection('comments')
          .where('articleId', '==', id)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              doc.ref.delete();
            });
          })
          .then(() => {
            dispatch({ type: 'COMMENT_DELETION' });
          })
          .catch((err) => {
            alert('WTF Failure');
            dispatch({ type: 'COMMENT_DELETION_ERROR', err });
          });
        return;
      })
      .catch((err) => {
        dispatch({ type: 'BLOG_DELETION_ERROR', err });
      });
  };
};

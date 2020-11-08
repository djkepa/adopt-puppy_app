import React from 'react';
import { useDispatch } from 'react-redux';

// Redux
import { signOutUserStart } from './../redux/User/user.actions';

// Components
import Header from './../components/header/header.component';

import Footer from './../components/footer/footer.component';

const AdminLayout = (props) => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <div className="adminLayout">
      <Header {...props} />
      <div className="controlPanel">
        <div className="content">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;

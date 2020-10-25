import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Utils
import { checkUserIsAdmin } from './../../utils/index';

// Styles
import './admin-toolbar.styles.scss';

// Map func
const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const AdminToolbar = (props) => {
  const { currentUser } = useSelector(mapState);

  const isAdmin = checkUserIsAdmin(currentUser);
  if (!isAdmin) return null;

  return (
    <div className="adminToolbar">
      <ul>
        <li>
          <Link to="/admin">My admin</Link>
        </li>
      </ul>
    </div>
  );
};
export default AdminToolbar;

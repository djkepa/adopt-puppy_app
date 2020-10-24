import React from 'react';

// Components
import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';

const MainLayout = (props) => {
  return (
    <div>
      <Header {...props} />
      <div className="main">{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;

// Libraries
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// HOC
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';

// Hooks
import useScrollHandler from './customHooks/useScrollHandler';
import useWindowSize from './customHooks/useWindowSize';

// Redux
import { checkUserSession } from './redux/User/user.actions';

// Components
import AdminToolbar from './components/admin-toolbar/admin-toolbar.component';
import CreateBlog from './components/blog-results/create/create-blog.component';
import BlogPreview from './components/blog-preview/blog-preview.component';
import UserProfile from './components/user-profile/user-profile.component';
import EditProfile from './components/user-profile/edit-profile/edit-profile.component';
import Loader from './components/loader/loader.component';

// Layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import DashboardLayout from './layouts/DashboardLayout';
import AdminLayout from './layouts/AdminLayout';

// Pages
import Homepage from './pages/Homepage/homepage.page';
import Registration from './pages/Registration/registraton.page';
import Login from './pages/Login/login.page';
import Recovery from './pages/Recovery/recovery.page';
import Dashboard from './pages/Dashboard/dashboard.page';
import Admin from './pages/Admin/admin.page';
import Shop from './pages/Shop/shop.page';
import ProductDetails from './pages/Product-details/product-details.page';
import Checkout from './pages/Checkout/checkout.page';
import Blog from './pages/Blog/blog.page';

import { gsap } from 'gsap';

// Icons
import { ReactComponent as ScrollBtn } from './assets/rotatearrow.svg';

// Styles
import './fonts.scss';
import './default.scss';

function App({ hideLoader }) {
  const dispatch = useDispatch();
  const scroll = useScrollHandler(400);
  const [isLoading, setIsLoading] = useState(true);

  const handleScrollClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    dispatch(checkUserSession());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="App">
      <AdminToolbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          exact
          path="/shop"
          render={() => (
            <MainLayout>
              <Shop />
            </MainLayout>
          )}
        />

        <Route
          path="/shop/:filterType"
          render={() => (
            <MainLayout>
              <Shop />
            </MainLayout>
          )}
        />
        <Route
          path="/product/:productID"
          render={() => (
            <MainLayout>
              <ProductDetails />
            </MainLayout>
          )}
        />
        <Route
          path="/checkout"
          render={() => (
            <MainLayout>
              <Checkout />
            </MainLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
        <Route
          path="/recovery"
          render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
        />
        <Route
          path="/blog"
          exact
          render={() => (
            <MainLayout>
              <Blog />
            </MainLayout>
          )}
        />
        <Route
          path="/create-blog"
          render={() => (
            <WithAuth>
              <MainLayout>
                <CreateBlog />
              </MainLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/blog/:blogID"
          render={() => (
            <MainLayout>
              <BlogPreview />
            </MainLayout>
          )}
        />
        <Route
          path="/dashboard"
          render={() => (
            <WithAuth>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </WithAuth>
          )}
        />
        <Route
          exact
          path="/account"
          render={() => (
            <WithAuth>
              <MainLayout>
                <UserProfile />
              </MainLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/account/edit"
          render={() => (
            <WithAuth>
              <MainLayout>
                <EditProfile />
              </MainLayout>
            </WithAuth>
          )}
        />

        <Route
          path="/admin"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />
      </Switch>

      <div
        onClick={handleScrollClick}
        className={`scrollBtn ${scroll ? 'hide' : 'show'}`}
      >
        <ScrollBtn className="scrollBtn-icon" />
      </div>
    </div>
  );
}
export default App;

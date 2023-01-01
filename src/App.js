import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './styles/global.scss';
import './styles/responsive.scss';
import HomePage from './pages/home-page/home-page';
import ShopPage from './pages/shop-page/shop-page';
import CheckoutPage from './pages/checkout-page/checkout-page';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import Header from './components/header/header';
import { selectCurrentUser } from './redux/user/user-selectors';
import { checkUserSession } from './redux/user/user-actions';

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}>
          </Route>
          <Route path="shop/*" element={<ShopPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route
            path="sign"
            element={
              currentUser
                ? <Navigate to="/" />
                : <SignInAndSignUpPage />
            }
          />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

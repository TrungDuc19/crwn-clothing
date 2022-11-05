import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header';
import { auth } from './utils/firebase/firebase';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header currentUser={this.state.currentUser} />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/sign' element={<SignInAndSignUpPage />} />
          </Routes>
        </div>
      </BrowserRouter >
    )
  }
}

export default App;

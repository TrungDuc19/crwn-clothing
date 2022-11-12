import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'
import { onSnapshot } from 'firebase/firestore';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header';
import { auth } from './utils/firebase/firebaseApp';
import createUserProfileDocument from './utils/firebase/createUserProfileDocument';

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
    this.unsubcribeFromAuth = onAuthStateChanged(auth, async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        onSnapshot(userRef, snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      else {
        this.setState({ currentUser: user });
      }
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

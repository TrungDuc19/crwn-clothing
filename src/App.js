import React from 'react';
import './App.css';

import HomePage from './page/homepage';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';


const HatsPage = () => {
  return (
    <div>
      <h1>HAST PAGE</h1>
    </div>
  )
}

const Jackets = () => {
  return (
    <div>
      <h1>JACKETS PAGE</h1>
    </div>
  )
}

const Sneakers = () => {
  return (
    <div>
      <h1>JACKETS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop/hats' element={<HatsPage />} />
          <Route path='/shop/jackets' element={<Jackets />} />
          <Route path='/shop/sneakers' element={<Sneakers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

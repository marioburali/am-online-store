import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Checkout from './Pages/Checkout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/cart" element={ <Cart /> } />
      <Route path="/product/*" element={ <Product /> } />
      <Route path="/checkout" element={ <Checkout /> } />
    </Routes>
  );
}

export default App;

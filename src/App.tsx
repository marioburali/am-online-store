import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import List from './Pages/List';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <List /> } />
    </Routes>
  );
}

export default App;

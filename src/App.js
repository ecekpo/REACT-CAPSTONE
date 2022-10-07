/* eslint-disable import/no-cycle */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import './index.css';
import CountryDetails from './components/CountryDetails';
import HomePage from './components/HomePage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:id" element={<CountryDetails />} />
    </Routes>
  </Router>

);

export default App;

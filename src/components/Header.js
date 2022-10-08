/* eslint-disable react/prop-types */
import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import Navbar from './Navbar';
import '../App.css';
import '../index.css';

const Header = ({ year }) => (
  <header className="header">
    <div className="year-chevron">
      <Navbar />
      <h2 className="header-year">{year}</h2>
    </div>
    <h2 className="header-heading">WORLD COUNTRIES STATISTICS</h2>
    <div className="header-icons">
      <FaMicrophone className="header-icon" />
      <AiOutlineSetting className="header-icon" />
    </div>
  </header>
);

Header.defaultProps = {
  year: '2022',
};

export default Header;

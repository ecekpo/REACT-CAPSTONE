/* eslint-disable react/prop-types */
import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import Navbar from './Navbar';
import '../App.css';
import '../index.css';

const Header = ({ year }) => (
  <header>
    <Navbar />
    <h2>{year}</h2>
    <h2 className="header-heading">WORLD COUNTRIES STATISTICS</h2>
    <div className="header-icons">
      <FaMicrophone className="icon" />
      <AiOutlineSetting className="icon" />
    </div>
  </header>
);

Header.defaultProps = {
  year: '2022',
};

export default Header;

import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutSetting } from 'react-icons/ai';
import { Navbar } from './Navbar';

const Header = ({ year }) => (
  <header>
    <Navbar />
    <h2>{year}</h2>
    <h2>COUNTRIES</h2>
    <FaMicrophone />
    <AiOutSetting />
  </header>
);

Header.defaultProps = { year: '2022' };

export default Header;

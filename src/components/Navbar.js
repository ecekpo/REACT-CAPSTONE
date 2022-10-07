import React from 'react';
import { FaLessThan } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../App.css';
import '../index.css';

const Navbar = () => (
  <nav>
    <NavLink to="/"><FaLessThan className="Nav_Link" /></NavLink>
  </nav>
);

export default Navbar;

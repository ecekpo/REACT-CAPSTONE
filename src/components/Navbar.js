import React from 'react';
import { FaLessThan } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  <nav>
    <ul className="nav-items">
      <li className="nav-item">
        <NavLink to="/"><FaLessThan /></NavLink>
      </li>
    </ul>
  </nav>;
};

export default Navbar;

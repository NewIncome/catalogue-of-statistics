import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav id="navbar">
    <div><Link to="/">{'<'}</Link></div>
    <div>Navbar</div>
  </nav>
);

export default Navbar;

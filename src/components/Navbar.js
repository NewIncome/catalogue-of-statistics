import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = props => {
  const { backLink } = props;

  return (
    <nav id="navbar">
      <div className="back-icon"><Link to={backLink}>{'<'}</Link></div>
      <div className="nav-title">Navbar</div>
    </nav>
  );
};

Navbar.propTypes = {
  backLink: PropTypes.string.isRequired,
};

export default Navbar;

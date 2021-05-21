/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/navbar.css';

const Navbar = props => {
  const { backLink, title } = props;

  return (
    <nav id="navbar">
      <div className="back-icon"><Link to={backLink}>{'<'}</Link></div>
      <div className="nav-title">{title}</div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: '',
};

Navbar.propTypes = {
  backLink: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Navbar;

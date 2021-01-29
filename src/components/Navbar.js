import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = props => {
  const { backLink } = props;

  return (
    <nav id="navbar">
      <div><Link to={backLink}>{'<'}</Link></div>
      <div>Navbar</div>
    </nav>
  );
};

Navbar.propTypes = {
  backLink: PropTypes.string.isRequired,
};

export default Navbar;

/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/navbar.css';

const Navbar = props => {
  const { backLink, title } = props;

  // if (title === 'Companies') {
  //   return (
  //     <nav id="navbar">
  //       <a href="/" className="back-icon">{'<'}</a>
  //       <div className="nav-title">{title}</div>
  //     </nav>
  //   );
  // }

  return (
    <nav id="navbar">
      {/* {title === 'Companies' ? <a href="/" className="back-icon">{'<'}</a>
        : <div className="back-icon"><Link to={backLink}>{'<'}</Link></div>} */}
      <div className="back-icon"><Link to={backLink}>{'<'}</Link></div>
      <div className="nav-title">{title}</div>
    </nav>
  );
};

Navbar.propTypes = {
  backLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Navbar;

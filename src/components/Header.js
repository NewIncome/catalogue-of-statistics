import React from 'react';
import PropTypes from 'prop-types';
import '../styles/header.css';

const Header = props => {
  const { title } = props;

  return (
    <header id="header">
      <div className="header-img h-i">
        <img src="country" alt="Item" />
      </div>
      <div className="header-info h-i">
        <h2 className="header-title">{title}</h2>
        <p className="header-detail">header detail</p>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

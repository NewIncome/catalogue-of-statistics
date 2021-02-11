import React from 'react';
import PropTypes from 'prop-types';
import '../styles/header.css';

const Header = props => {
  const { title, titleInfo } = props;

  return (
    <header id="header">
      <div className="header-img h-i" />
      <div className="header-info h-i">
        <h2 className="header-title">{title}</h2>
        <p className="header-detail">{titleInfo}</p>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  titleInfo: PropTypes.shape().isRequired,
};

export default Header;

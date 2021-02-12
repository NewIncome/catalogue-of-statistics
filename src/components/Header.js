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

Header.defaultProps = {
  title: '',
  titleInfo: '',
};

Header.propTypes = {
  title: PropTypes.string,
  titleInfo: PropTypes.string,
};

export default Header;

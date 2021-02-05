import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ItemDetails from '../containers/ItemDetails';

const Details = props => {
  const { itemSym, hdName, itemInfo } = props;

  return (
    <>
      <Navbar backLink="/items" title="Company Stats" />
      <Header title={hdName} titleInfo={`${itemInfo} details`} />
      <div className="page-desc">List of <u>Details</u></div>
      <ItemDetails sym={itemSym} />
    </>
  );
};

Details.propTypes = {
  itemSym: PropTypes.number.isRequired,
  hdName: PropTypes.isRequired,
  itemInfo: PropTypes.isRequired,
};

export default Details;

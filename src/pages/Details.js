import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ItemDetails from '../containers/ItemDetails';

const Details = props => {
  const { itemNo, hdName } = props;

  return (
    <>
      <Navbar backLink="/items" />
      <Header title={hdName} />
      <div>List of <u>Details</u></div>
      <ItemDetails id={itemNo} />
    </>
  );
};

Details.propTypes = {
  itemNo: PropTypes.number.isRequired,
  hdName: PropTypes.isRequired,
};

export default Details;

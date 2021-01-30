import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ItemDetails from '../containers/ItemDetails';

const Details = props => {
  const { itemNo } = props;

  return (
    <>
      <Navbar backLink="/items" />
      <Header title="Item Details" />
      <div>This is the <u>List of Details</u> available for the selected Item:</div>
      <ItemDetails id={itemNo} />
    </>
  );
};

Details.propTypes = {
  itemNo: PropTypes.number.isRequired,
};

export default Details;

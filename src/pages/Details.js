import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ItemDetails from '../containers/ItemDetails';

const Details = () => (
  <>
    <Navbar backLink="/items" />
    <Header />
    <div>This is the <u>List of Details</u> available for the selected Item:</div>
    <ItemDetails />
  </>
);

export default Details;

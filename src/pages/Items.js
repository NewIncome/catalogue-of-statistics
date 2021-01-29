import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ItemList from '../containers/ItemList';

const Items = () => (
  <>
    <Navbar />
    <Header />
    <div>This is the <u>List of Items</u> available</div>
    <ItemList />
  </>
);

export default Items;

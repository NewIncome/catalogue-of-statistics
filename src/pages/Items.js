import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ItemList from '../containers/ItemList';
import { items as initialItems } from '../utils';

const Items = () => (
  <>
    <Navbar backLink="/" />
    <Header title="ITEMS search result" />
    <div>This is the <u>List of Items</u> available</div>
    <Link to="/details"><ItemList items={initialItems} /></Link>
  </>
);

export default Items;

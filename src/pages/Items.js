import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ItemList from '../containers/ItemList';

const Items = () => (
  <>
    <Navbar />
    <Header />
    <div>This is the <u>List of Items</u> available</div>
    <Link to="/details"><ItemList /></Link>
  </>
);

export default Items;

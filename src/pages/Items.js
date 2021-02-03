import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ItemList from '../containers/ItemList';
import { items as initialItems } from '../utils';

const Items = () => (
  <>
    <Navbar backLink="/" />
    <Header title="ITEMS search result" />
    <div className="page-desc">Stats by ...</div>
    <ItemList items={initialItems} />
  </>
);

export default Items;

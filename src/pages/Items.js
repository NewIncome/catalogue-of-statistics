import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ItemList from '../containers/ItemList';
import { items as initialItems } from '../utils';

const Items = () => (
  <>
    {console.log('Items initialItems')}
    {console.log(initialItems)}
    <Navbar backLink="/" />
    <Header title="ITEMS search result" titleInfo={`${initialItems.length} found`} />
    <div className="page-desc">Stats by ...</div>
    <ItemList items={initialItems} />
  </>
);

export default Items;

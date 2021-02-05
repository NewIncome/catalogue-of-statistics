/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { items as initialItems, populateFilterOptions, filterItems } from '../utils';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ItemList from '../containers/ItemList';
// import Select from '../components/ParameterFilter';

const Items = () => {
  const [filter, setFilter] = useState('');
  const [newItems, setNewItems] = useState(initialItems);

  const options = populateFilterOptions(initialItems);
  console.log('ITEMS OPTIONS');
  console.log(options);

  const filterSelect = event => setFilter(event.target.value);

  useEffect(() => {
    console.log(filter);
    console.log(typeof filter);
    setNewItems(filter === '' ? initialItems : filterItems(filter));

    console.log('ITEMS TO SHOW (newItems)');
    console.log(newItems);
  }, [filter]);

  return (
    <>
      {console.log('Items newItems')}
      {console.log(newItems)}
      <Navbar backLink="/" title="Companies" />
      <Header title="ITEMS search result" titleInfo={`${newItems.length} found`} />
      <div className="page-desc">
        {/* <Select options={populateFilterOptions(itemsToShow)}/> */}
        <span>Stats by {filter.split(',')[0]}:</span>
        <select
          id="selectFilter"
          onChange={filterSelect}
        >
          <option value="">All</option>
          <optgroup label="Currency">
            {options.currency.map(op => <option value={['currency', op]} key={op}>{op}</option>)}
          </optgroup>
          <optgroup label="StockExchange">
            {options.stockExchange.map(op => <option value={['stockExchange', op]} key={op}>{op}</option>)}
          </optgroup>
        </select>
      </div>
      {/* You NEED TO SEND A STATE!!! So it re-renders */}
      <ItemList itemsProp={newItems} />
    </>
  );
};

export default Items;

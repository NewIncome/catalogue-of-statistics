/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { populateFilterOptions, filterItems } from '../utils';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ItemList from '../containers/ItemList';
// import Select from '../components/ParameterFilter';

const Items = props => {
  const { items } = props;
  console.log('ITEMS in Items');
  console.log(items);

  const [filter, setFilter] = useState('');
  const [newItems, setNewItems] = useState(items);

  const options = populateFilterOptions(items);
  console.log('ITEMS OPTIONS');
  console.log(options);

  const filterSelect = event => setFilter(event.target.value);

  useEffect(() => {
    console.log(filter);
    console.log(typeof filter);
    setNewItems(filter === '' ? items : filterItems(filter));

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

const mapState = ({ items }) => ({ items });

Items.propTypes = {
  items: PropTypes.isRequired,
};

export default connect(mapState)(Items);

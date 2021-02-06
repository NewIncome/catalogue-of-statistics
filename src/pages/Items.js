/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { populateFilterOptions, filterItems } from '../utils';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ItemList from '../containers/ItemList';
import { updateFilter } from '../actions';
// import Select from '../components/ParameterFilter';

const Items = props => {
  const {
    items,
    filter,
    updateFilter,
  } = props;
  console.log('ITEMS in Items');
  console.log(items);

  // const [filter, setFilter] = useState('');
  // const [newItems, setNewItems] = useState(items);

  const options = populateFilterOptions(items);
  console.log('ITEMS OPTIONS');
  console.log(options);

  const filterSelect = event => updateFilter(event.target.value);

  let filteredItms = items;

  useEffect(() => {
    console.log('filter');
    console.log(filter);
    console.log(typeof filter);

    filteredItms = filter === '' ? items : filterItems(filter, items);

    console.log('--- qNtoFilter ---');
    console.log(filteredItms);

    console.log('ITEMS TO SHOW (filteredItms)');
    console.log(filteredItms);
  }, [filter]);

  return (
    <>
      {console.log('Items filteredItms')}
      {console.log(filteredItms)}
      <Navbar backLink="/" title="Companies" />
      <Header title="ITEMS search result" titleInfo={`${filteredItms.length} found`} />
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
      <ItemList itemsProp={filteredItms} />
    </>
  );
};

const mapState = ({ items, filter }) => ({ items, filter });

const mapDispatchToProps = dispatch => ({
  updateFilter: filter => dispatch(updateFilter(filter)),
});

Items.propTypes = {
  items: PropTypes.isRequired,
  filter: PropTypes.isRequired,
  updateFilter: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatchToProps)(Items);

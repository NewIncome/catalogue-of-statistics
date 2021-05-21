import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { populateFilterOptions } from '../utils';
import ItemList from '../containers/ItemList';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ParameterFilter from '../components/ParameterFilter';
import { updateFilter, filterItems } from '../actions';

const Items = props => {
  const {
    items,
    filter,
    updateFilter,
    filteredItems,
    filterItems,
  } = props;

  const options = populateFilterOptions(items);

  const filterSelect = event => updateFilter(event.target.value);

  useEffect(() => {
    filterItems(filter, items, filteredItems);
  }, [filter]);

  return (
    <>
      <Navbar backLink="/" title="Companies" />
      <Header title="ITEMS search result" titleInfo={`${(filteredItems || items).length} found`} />
      <ParameterFilter filter={filter} options={options} onChange={filterSelect} />
      <ItemList itemsProp={filter === '' ? items : filteredItems} />
    </>
  );
};

const mapState = ({ items, filter, filteredItems }) => ({ items, filter, filteredItems });

const mapDispatchToProps = dispatch => ({
  updateFilter: filter => dispatch(updateFilter(filter)),
  filterItems: (
    filter,
    items,
    filteredItems,
  ) => dispatch(filterItems(filter, items, filteredItems)),
});

Items.defaultProps = {
  filteredItems: {},
};

Items.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  filter: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired,
  filteredItems: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  filterItems: PropTypes.func.isRequired,
};

export default withRouter(connect(mapState, mapDispatchToProps)(Items));

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ItemDetails from '../containers/ItemDetails';
import { getItemDetails } from '../utils';

const Details = props => {
  const { routerProps, items } = props;

  const { symbol } = routerProps.match.params;
  const details = getItemDetails(symbol, items)[0];

  return (
    <>
      <Navbar backLink="/items" title="Company Stats" />
      <Header title={details.name} titleInfo={`${Object.keys(details).length} details`} />
      <div className="page-desc">
        List of
        <u>Details</u>
      </div>
      <ItemDetails details={details} />
    </>
  );
};

const mapState = ({ items }) => ({ items });

Details.propTypes = {
  routerProps: PropTypes.objectOf(PropTypes.any).isRequired,
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default connect(mapState)(Details);

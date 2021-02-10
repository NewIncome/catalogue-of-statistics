import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Items from '../pages/Items';
import Home from '../pages/Home';
import Error from '../pages/Error';
// import { items } from '../utils';
import Details from '../pages/Details';

const Routes = props => {
  const { items } = props;

  const renderItems = routerProps => {
    const renderItemSymbol = routerProps.match.params.symbol;
    console.log('routerProps');
    console.log(routerProps);
    console.log('Routes items');
    console.log(items);
    const foundItem = items.find(i => i.symbol === renderItemSymbol);
    console.log('FOUND Item');
    console.log(foundItem);

    return (foundItem ? (
      <Details
        itemSym={renderItemSymbol}
        hdName={foundItem.name || foundItem.symbol}
        itemInfo={Object.keys(foundItem).length}
      />
    ) : <Error />);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/items" component={Items} />
        <Route path="/details/:symbol" render={renderItems} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

const mapState = ({ items }) => ({ items });

Routes.propTypes = {
  items: PropTypes.isRequired,
};

export default connect(mapState, null)(Routes);

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Items from '../pages/Items';
import Home from '../pages/Home';
import Error from '../pages/Error';
import { items } from '../utils';
import Details from '../pages/Details';

const Routes = () => {
  const renderItems = routerProps => {
    const renderItemSymbol = routerProps.match.params.symbol;
    console.log('routerProps');
    console.log(routerProps);
    const foundItem = items.find(i => i.symbol === renderItemSymbol);

    return (foundItem ? (
      <Details
        itemSym={renderItemSymbol}
        hdName={foundItem.name}
        itemInfo={foundItem.marketCap}
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
export default Routes;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Items from '../pages/Items';
import Home from '../pages/Home';
import Error from '../pages/Error';
import { items } from '../utils';
import Details from '../pages/Details';

const Routes = () => {
  const renderItems = routerProps => {
    const renderItemId = parseInt(routerProps.match.params.id, 10);
    const foundItem = items.find(i => i.id === renderItemId);

    return (foundItem ? <Details itemNo={renderItemId} /> : <Error />);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/items" component={Items} />
        <Route path="/details/:id" render={renderItems} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;

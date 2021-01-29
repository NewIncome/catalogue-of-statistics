import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Details from '../pages/Details';
import Items from '../pages/Items';
import Home from '../pages/Home';
import Error from '../pages/Error';

const Routes = () => {
  const renderItems = routerProps => {
    console.log('routerProps');
    console.log(routerProps);
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

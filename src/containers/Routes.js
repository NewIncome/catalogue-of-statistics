import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Items from '../pages/Items';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Details from '../pages/Details';

const Routes = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/items" component={Items} />
      <Route path="/details/:symbol" render={routerProps => (<Details routerProps={routerProps} />)} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

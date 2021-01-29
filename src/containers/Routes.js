import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Details from '../pages/Details';
import Items from '../pages/Items';
import Home from '../pages/Home';
import Error from '../pages/Error';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/items" component={Items} />
      <Route path="/details" component={Details} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

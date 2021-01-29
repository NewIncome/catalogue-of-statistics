/* eslint-disable no-unused-vars, react/no-unused-prop-types */
import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from '../components/Item';
import Details from '../pages/Details';

const ItemList = ({ items: initialItems }) => {
  const [state, setItems] = useState(initialItems);

  const { items } = state;
  console.log(state);
  console.log(items);

  return (
    <section id="item-list">
      <BrowserRouter>
        <Switch>
          {items.map(item => (
            <>
              {/* <Link to={`/details/${item.name}`}> */}
              <Item key={item.name} name={item.name} />
              {/* </Link>

              <Route exact path={`/details/${item.name}`} component={Details} /> */}
            </>
          ))}
        </Switch>
      </BrowserRouter>
    </section>
  );
};

ItemList.propTypes = {
  items: PropTypes.isRequired,
};

export default ItemList;

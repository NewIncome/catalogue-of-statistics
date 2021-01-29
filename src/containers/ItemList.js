/* eslint-disable no-unused-vars, react/no-unused-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Item from '../components/Item';

const ItemList = ({ items: initialItems }) => {
  const [state, setItems] = useState(initialItems);

  const { items } = state;
  console.log(state);
  console.log(items);

  return (
    <section id="item-list">
      {items.map(item => (
        <Item key={item.name} name={item.name} />
      ))}
    </section>
  );
};

ItemList.propTypes = {
  items: PropTypes.isRequired,
};

export default ItemList;

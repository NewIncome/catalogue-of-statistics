/* eslint-disable no-unused-vars, react/no-unused-prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from '../components/Item';

const ItemList = ({ items: initialItems }) => {
  const [items, setItems] = useState(initialItems);

  console.log(items);

  return (
    <section id="item-list">
      {items.map(item => (
        <Link key={item.id} to={`/details/${item.id}`}>
          <Item key={item.id} name={item.name} />
        </Link>
      ))}
    </section>
  );
};

ItemList.propTypes = {
  items: PropTypes.isRequired,
};

export default ItemList;

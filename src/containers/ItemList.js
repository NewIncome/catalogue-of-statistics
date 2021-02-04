/* eslint-disable no-unused-vars, react/no-unused-prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from '../components/Item';
import '../styles/itemList.css';

const ItemList = ({ items: initialItems }) => {
  const [items, setItems] = useState(initialItems);
  console.log('ItemsList items');
  console.log(items);

  return (
    <section id="item-list">
      {items.map(item => (
        <div className="item" key={`div${item.symbol}`}>
          <Link
            key={item.symbol}
            to={`/details/${item.symbol}`}
            className="item-link"
          >
            <Item key={item.symbol} name={item.name || 'Unregistered'} id={item.symbol} />
          </Link>
        </div>
      ))}
    </section>
  );
};

ItemList.propTypes = {
  items: PropTypes.isRequired,
};

export default ItemList;

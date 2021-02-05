/* eslint-disable no-unused-vars, react/no-unused-prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from '../components/Item';
import '../styles/itemList.css';

const ItemList = props => {
  const { itemsProp } = props;
  console.log('itemsProp');
  console.log(itemsProp);
  const [items, setItems] = useState(itemsProp);
  console.log('ItemsList items');
  console.log(items);

  const updateItems = () => setItems(itemsProp);

  useEffect(() => {
    console.log('...Checking for changes...');
    updateItems();
  }, [itemsProp]);

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
  itemsProp: PropTypes.isRequired,
};

export default ItemList;

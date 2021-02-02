/* eslint-disable no-unused-vars, react/no-unused-prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from '../components/Item';
import '../styles/itemList.css';

const ItemList = ({ items: initialItems }) => {
  const [items, setItems] = useState(initialItems);

  return (
    <section id="item-list">
      {items.map(item => (
        <div className="item" key={`div${item.id}`}>
          <Link
            key={item.id}
            to={`/details/${item.id}`}
            className="item-link"
          >
            <Item key={item.id} name={item.name} id={item.id} />
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

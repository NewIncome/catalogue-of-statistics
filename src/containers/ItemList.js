import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Item from '../components/Item';
import '../styles/itemList.css';

const ItemList = props => {
  const { itemsProp } = props;
  const [items, setItems] = useState(itemsProp);

  useEffect(() => {
    setItems(itemsProp);
  }, [itemsProp]);

  return (
    <section id="item-list">
      {items.map((item, i) => (
        <div className="item" key={`div-${item.symbol || i}`}>
          <Link
            key={`link-${item.symbol || i}`}
            to={`/details/${item.symbol || i}`}
            className="item-link"
          >
            <Item key={`item-${item.symbol || i}`} name={item.name || 'Unregistered'} id={item.symbol || i} />
          </Link>
        </div>
      ))}
    </section>
  );
};

ItemList.propTypes = {
  itemsProp: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default ItemList;

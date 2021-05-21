import React from 'react';
import PropTypes from 'prop-types';

const Item = props => {
  const { name, id } = props;
  return (
    <>
      <h2 className="item-title">{name}</h2>
      <p className="item-dit">{id}</p>
    </>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Item;

import React from 'react';
import PropTypes from 'prop-types';

const Item = props => {
  const { name } = props;
  return (
    <>
      This item is called: {name}.
    </>
  );
};

Item.propTypes = {
  name: PropTypes.isRequired,
};

export default Item;

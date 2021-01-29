import React from 'react';
import PropTypes from 'prop-types';

const Item = props => {
  const { name } = props;
  return (
    <div className="item">
      This item is called: {name}.
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.isRequired,
};

export default Item;

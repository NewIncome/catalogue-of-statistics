import React from 'react';
import PropTypes from 'prop-types';

const Detail = props => {
  const { id, num, detail } = props;

  return (
    <div className="detail">
      This is an Item {id}&#39;s Detail {num}.
      <p>Info: {detail}</p>
    </div>
  );
};

Detail.propTypes = {
  id: PropTypes.number.isRequired,
  num: PropTypes.number.isRequired,
  detail: PropTypes.string.isRequired,
};

export default Detail;

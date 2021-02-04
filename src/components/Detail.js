import React from 'react';
import PropTypes from 'prop-types';

const Detail = props => {
  const { detailName, detail } = props;

  return (
    <div className="detail">
      <h2 className="detail-name">{detailName}</h2>
      <p className="detail-p">{detail || '-'}</p>
    </div>
  );
};

Detail.propTypes = {
  detailName: PropTypes.isRequired,
  detail: PropTypes.isRequired,
};

export default Detail;

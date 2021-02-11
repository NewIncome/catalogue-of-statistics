import React from 'react';
import PropTypes from 'prop-types';
import Detail from '../components/Detail';
import '../styles/itemDetails.css';

const ItemDetails = props => {
  const { details } = props;

  return (
    <section id="item-details">
      {Object.keys(details).map(detailKey => {
        const upcaseDetail = detailKey[0].toUpperCase() + detailKey.substring(1);

        return (
          <Detail
            key={`detailNo${details.symbol}`}
            detailName={upcaseDetail}
            detail={details[detailKey]}
          />
        );
      })}
    </section>
  );
};

ItemDetails.propTypes = {
  details: PropTypes.shape().isRequired,
};

export default ItemDetails;

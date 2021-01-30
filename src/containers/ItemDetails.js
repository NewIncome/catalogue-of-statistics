import React from 'react';
import PropTypes from 'prop-types';
import Detail from '../components/Detail';
import { getItemDetails } from '../utils';

const ItemDetails = props => {
  const { id } = props;
  const details = getItemDetails(id);

  return (
    <section id="item-details">
      {details.map((detail, i) => (
        <Detail
          key={`detailNo${id}`}
          id={id}
          num={i}
          detail={detail.detail}
        />
      ))}
    </section>
  );
};

ItemDetails.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ItemDetails;

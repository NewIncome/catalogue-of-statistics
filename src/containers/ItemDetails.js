import React from 'react';
import PropTypes from 'prop-types';
import Detail from '../components/Detail';
import { getItemDetails } from '../utils';
import '../styles/itemDetails.css';

const ItemDetails = props => {
  const { id } = props;
  const details = getItemDetails(id);

  return (
    <section id="item-details">
      {details.map(detail => (
        <Detail
          key={`detailNo${id}`}
          detailName={Object.keys(detail)}
          detail={Object.values(detail)}
        />
      ))}
    </section>
  );
};

ItemDetails.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ItemDetails;

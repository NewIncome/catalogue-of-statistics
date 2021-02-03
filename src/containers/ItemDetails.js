import React from 'react';
import PropTypes from 'prop-types';
import Detail from '../components/Detail';
import { getItemDetails } from '../utils';
import '../styles/itemDetails.css';

const ItemDetails = props => {
  const { sym } = props;
  const details = getItemDetails(sym)[0];
  console.log('DETAILs');
  console.log(details);

  return (
    <section id="item-details">
      {Object.keys(details).map(detailKey => {
        const upcaseDetail = detailKey[0].toUpperCase() + detailKey.substring(1);

        return (
          <Detail
            key={`detailNo${sym}`}
            detailName={upcaseDetail}
            detail={details[detailKey]}
          />
        );
      })}
    </section>
  );
};

ItemDetails.propTypes = {
  sym: PropTypes.number.isRequired,
};

export default ItemDetails;

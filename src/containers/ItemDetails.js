import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Detail from '../components/Detail';
import { getItemDetails } from '../utils';
import '../styles/itemDetails.css';

const ItemDetails = props => {
  const { sym, items } = props;
  const details = getItemDetails(sym, items)[0];
  console.log('DETAILs');
  console.log(details);
  console.log(sym);
  console.log(items);

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

const mapState = ({ items }) => ({ items });

ItemDetails.propTypes = {
  sym: PropTypes.number.isRequired,
  items: PropTypes.isRequired,
};

export default connect(mapState)(ItemDetails);

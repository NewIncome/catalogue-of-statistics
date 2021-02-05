import React from 'react';
import PropTypes from 'prop-types';

const Select = props => {
  const { options } = props;
  console.log('Select Options');
  console.log(options);

  return (
    <select id="selectFilter">
      <option value="">All</option>
      <optgroup label="Currency">
        {options.currency.map(op => <option value={op} key={op}>{op}</option>)}
      </optgroup>
      <optgroup label="StockExchange">
        {options.stockExchange.map(op => <option value={op} key={op}>{op}</option>)}
      </optgroup>
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.isRequired,
};

export default Select;

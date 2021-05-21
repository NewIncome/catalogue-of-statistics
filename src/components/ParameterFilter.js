import React from 'react';
import PropTypes from 'prop-types';

const Select = props => {
  const { filter, options, onChange } = props;

  return (
    <div className="page-desc">
      <span>
        Stats by
        {filter.split(',')[0] || filter}
        :
      </span>
      <select
        id="selectFilter"
        onChange={onChange}
      >
        <option value="">All</option>
        <optgroup label="Currency">
          {options.currency.map(op => <option value={['currency', op]} key={`cur-${op}`}>{op}</option>)}
        </optgroup>
        <optgroup label="StockExchange">
          {options.stockExchange.map(op => <option value={['stockExchange', op]} key={`sEx${op}`}>{op}</option>)}
        </optgroup>
      </select>
    </div>
  );
};

Select.propTypes = {
  filter: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.any).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;

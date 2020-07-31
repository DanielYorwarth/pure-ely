import React from 'react';
import PropTypes from 'prop-types';

const Price = ({price, text, padding}) => (
  <div className={padding}>
    <span className="text-3xl font-semibold text-primary block">{price}</span>
    {text && <span>{text}</span>}
  </div>
);

Price.propTypes = {
  text: PropTypes.string,
  price: PropTypes.string,
  padding: PropTypes.string
}

export default Price;

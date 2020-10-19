import React from 'react';
import PropTypes from 'prop-types';

const Price = ({price, text, padding, small}) => (
  <div className={`${padding} ${small && 'leading-tight'} `}>
    <span className={`${small ? ' text-xl' : ' text-3xl'} font-semibold text-primary block`}>{price}</span>
    {text && <span>{text}</span>}
  </div>
);

Price.propTypes = {
  text: PropTypes.string,
  price: PropTypes.string,
  padding: PropTypes.string,
  small: PropTypes.bool
}

export default Price;

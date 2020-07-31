import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({text}) => (
  <div className="flex flex-wrap mb-3">
    <span className="block bg-primary rounded-full w-2 h-2 mt-1 mr-2"></span>
    <p className="flex-1 leading-tight">{text}</p>
  </div>
);

ListItem.propTypes = {
  text: PropTypes.string
}

export default ListItem;
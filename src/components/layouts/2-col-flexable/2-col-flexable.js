import React from 'react';
import PropTypes from 'prop-types';

const TwoColFlexable = ({colOne, colTwo}) => (
  <div className="flex flex-wrap lg:items-center w-full max-w-screen-xl mx-auto mb-10 md:mb-32 px-4 ">
    <div className={`${colOne.size} px-4 leading-relaxed ${colOne.classList && colOne.classList}`}>
      {colOne.content}
    </div>
    <div className={`${colTwo.size} px-4 leading-relaxed ${colTwo.classList && colTwo.classList}`}>
      {colTwo.content}
    </div>
  </div>
);


TwoColFlexable.propTypes = {
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
}

export default TwoColFlexable;
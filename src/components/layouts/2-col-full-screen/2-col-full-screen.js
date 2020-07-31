import React from 'react';
import PropTypes from 'prop-types';

const TwoColFullScreen = ({cols}) => (
  <div className="flex flex-wrap w-full">
    {cols.map((column, i) => (
      <div key={i} style={column.bgImage && {backgroundImage: `url(${column.bgImage})`}} className={`w-full md:w-1/2 px-4 py-8 sm:p-8 lg:p-16 xl:p-32 flex flex-wrap flex-col justify-center leading-relaxed ${column.bgImage && 'image-bg'} ${column.bg}`}>
        {column.content}
      </div>
    ))}
  </div>
);


TwoColFullScreen.propTypes = {
  cols: PropTypes.array,
}

export default TwoColFullScreen;
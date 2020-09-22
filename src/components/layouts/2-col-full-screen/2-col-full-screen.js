import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image'

const TwoColFullScreen = ({cols}) => (
  <div className="flex flex-wrap w-full">
    {cols.map((column, i) => (
      <div className="flex flex-wrap w-full md:w-1/2" key={i}>
        {column.bgImage ? 
        <BackgroundImage
          Tag="div"
          fluid={column.bgImage}
          className={`w-full px-4 py-8 sm:p-8 lg:p-16 xl:p-32 flex flex-wrap flex-col justify-center leading-relaxed ${column.bgImage && 'image-bg'} ${column.bg}`}
        >
          {column.content}
        </BackgroundImage>
        :
        <div style={column.bgImage && {backgroundImage: `url(${column.bgImage})`}} className={`w-full px-4 py-8 sm:p-8 lg:p-16 xl:p-32 flex flex-wrap flex-col justify-center leading-relaxed ${column.bgImage && 'image-bg'} ${column.bg}`}>
          {column.content}
        </div>}
      </div>
    ))}
  </div>
);


TwoColFullScreen.propTypes = {
  cols: PropTypes.array,
}

export default TwoColFullScreen;
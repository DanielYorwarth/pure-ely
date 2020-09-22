import React from "react";
import PropTypes from "prop-types";
import Img from 'gatsby-image';

const Logos = ({logos}) => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-between items-center mx-auto max-w-md py-8 md:py-16">
      {logos && logos.map((logo, i) => (
        <div key={i} className="w-1/3 md:mb-0 px-2 md:px-4">
          <Img className="w-full max-w-sm" fluid={logo} />
        </div>
      ))}
    </div>

  );
}

Logos.propTypes = {
  logos: PropTypes.array,
};

export default Logos;

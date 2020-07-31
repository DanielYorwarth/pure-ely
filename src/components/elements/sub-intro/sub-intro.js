import React from 'react';
import PropTypes from "prop-types";

const SubIntro = ({text}) => (
  <div className="max-w-4xl mx-auto px-4 md:px-4 mb-16 md:mb-32">
    <div className="font-light text-lg leading-loose text-center">
      {text}
    </div>
  </div>
);

SubIntro.propTypes = {
  text: PropTypes.string,
};


export default SubIntro;
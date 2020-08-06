import React from "react";
import PropTypes from "prop-types";

import './bordered-btn.style.scss'

const ButtonBordered = ({text, link, windowed}) => {
  return (
    <a target={windowed && '_blank'} className="bordered-btn uppercase text-white text-sm px-3 py-2" href={link}>
      <span className="z-10 relative bordered-btn__text">{text}</span>
    </a>
  );
}


ButtonBordered.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  windowed: PropTypes.bool
};

export default ButtonBordered;

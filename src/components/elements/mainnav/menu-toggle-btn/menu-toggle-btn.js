import React from 'react';
import PropTypes from "prop-types";

import './menu-toggle-btn.style.scss';

const MenuToggleBtn = ({toggled, toggleMenu}) => {

  const handleClick = () => {
    toggleMenu()
  }

  const toggleText = toggled ? 'BACK' : 'MENU'

  return (
    <div onClick={handleClick} className="menu-toggle-btn md:hidden z-10 text-white mt-1 flex flex-wrap justify-center items-center cursor-pointer text-xs">
      <div className="menu-toggle-btn__textwrapper">
        <span>{toggleText}</span>
        <div>{toggleText}</div>
      </div>
    </div>
  );
}

MenuToggleBtn.propTypes = {
  toggled: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

export default MenuToggleBtn;
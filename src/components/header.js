import React, {useState, useEffect, useRef} from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import gsap, {Power3} from 'gsap';

import ButtonBordered from './elements/button-bordered/button-bordered';
import Socials from './elements/socials/socials';
import MainNav from './elements/mainnav/mainnav';
import MenuToggleBtn from './elements/mainnav/menu-toggle-btn/menu-toggle-btn';

import mainLogo from "../images/logo-main.png";
import beautyLogo from "../images/pure-beauty-logo.png";
import aestheticsLogo from "../images/pure-aesthetics-logo.png";
import academyLogo from "../images/pure-academy-logo.png";
import mobileLogo from "../images/header-icon.svg";

const Header = ({loaded, logoType}) => {
  let logoImage 
  switch (logoType) {
    case 'beauty':
      logoImage = beautyLogo
      break;
    case 'aesthetics':
      logoImage = aestheticsLogo
      break;
    case 'academy':
      logoImage = academyLogo
      break;
    default:
      logoImage = mainLogo
      break;
  }
  const logo = useRef(null);
  const bookBtn = useRef(null);
  const socials = useRef(null);

  const [toggled, setToggled] = useState(false)
  const handleToggleMenu = () => {
    setToggled((toggle) => !toggle);
  }

  useEffect(() => {
    if(loaded) {  
      gsap.fromTo(socials.current, {y: -15, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: .3, ease: Power3.easeInOut})
      gsap.fromTo(logo.current, {y: -15, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: .5, ease: Power3.easeInOut}, 'logo')
      gsap.fromTo(bookBtn.current, {y: -15, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: .7, ease: Power3.easeInOut})
    }
  }, [loaded]);

  return (
    <header className="relative z-50">
      <div className="max-w-screen-xl py-2 px-2 sm:p-4 mx-auto md:p-4 w-full">
        <div className="flex flex-wrap items-center justify-between">
          <div ref={socials} className="hidden md:block w-1/4">
            <Socials />
          </div>
          <div className="flex md:flex-1 flex-wrap flex-col items-center">
            <Link className="md:mb-8" to="/">
              <img ref={logo} className="hidden md:block" src={logoImage} />
              <img className="w-16 md:hidden" src={mobileLogo} />
            </Link>
          </div>
          <div ref={bookBtn} className="hidden md:block w-1/4 text-right">
              <ButtonBordered text="Book Online" link="#" />
          </div>
          <MenuToggleBtn toggled={toggled} toggleMenu={handleToggleMenu} />
        </div>
        <div className="flex flex-wrap justify-center">
          <MainNav loaded={loaded} toggled={toggled}/>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  loaded: PropTypes.bool,
  logoType: PropTypes.string,
};

export default Header;

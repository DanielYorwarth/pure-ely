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
  let addressText 
  switch (logoType) {
    case 'beauty':
      logoImage = beautyLogo
      addressText = <p className="text-white text-xs text-right mt-4">
      4-8 Three Cups Walk, <br/>
      Ely, CB7 4AN <br/>
      United Kingdom 
      </p>
      break;
    case 'aesthetics':
      logoImage = aestheticsLogo
      addressText = <p className="text-white text-xs text-right mt-4">
      1 High st Passage, <br/>
      Ely,  CB7 4NB <br/>
      United Kingdom 
      </p>
      break;
    case 'academy':
      logoImage = academyLogo
      addressText = <p className="text-white text-xs text-right mt-4">
      1 High st Passage, <br/>
      Ely,  CB7 4NB <br/>
      United Kingdom 
      </p>
      break;
    case 'hair':
      logoImage = mainLogo
      addressText = <p className="text-white text-xs text-right mt-4">
      1 High st Passage, <br/>
      Ely,  CB7 4NB <br/>
      United Kingdom 
      </p>
      break;
    default:
      logoImage = mainLogo
      addressText = null
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
              <img ref={logo} className="hidden md:block" alt="logo" src={logoImage} />
              <img height="58" width="64" className="w-16 md:hidden" alt="logo" src={mobileLogo} />
            </Link>
          </div>
          <div ref={bookBtn} className={`hidden md:block w-1/4 text-right ${addressText && 'md:mt-16'}`}>
              <ButtonBordered windowed text="Book Online" link="https://online.premiersoftware.co.uk/Book-Online-3G-V2/index2.php?i=21cea48d674d25790ce2f157548cf742&siteID=2" />
                {
                  addressText && addressText
                }
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

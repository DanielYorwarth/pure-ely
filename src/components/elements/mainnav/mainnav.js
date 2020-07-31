import React, {useRef, useEffect} from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import gsap from 'gsap';

import MobileMainNav from './mobile-menu/mobile-menu';

import './mainnav.style.scss';

const MainNav = ({menu = [
  {
    route: `#`,
    title: `Home`,
  },
  {
    route: `#`,
    title: `Beauty`,
  },
  {
    route: `#`,
    title: `Aesthetics`,
  },
  {
    route: `#`,
    title: `Academy`,
  },
  {
    route: `#`,
    title: `About`,
  },
  {
    route: `#`,
    title: `Contact`,
  }
], toggled, loaded}) => {

  let nav = useRef(null);

  useEffect(() => {
    if(loaded) {  
      gsap.fromTo(nav.current.children, {y: -15, opacity: 0}, {
        opacity: 1, 
        y: 0,
        duration: 0.5,
        delay: 0.8,
        stagger: { // wrap advanced options in an object
          each: 0.15,
          ease: "power3.easeInOut",
        }
      }, 'logo')
    }
  }, [loaded]);

  return (
    <div>
      <nav ref={nav}
        className={`mainnav hidden md:block md:flex sm:items-center w-full md:w-auto`}
      >
        {menu.map((link) => (
          <div key={link.title} className="md:px-6">
            <Link
              className="mainnav__item block text-white no-underline md:inline-block uppercase text-sm"
              to={link.route}
            >
              {link.title}
            </Link>
            </div>
        ))}
      </nav>
      <MobileMainNav menu={menu} toggled={toggled} />
    </div>
  );
}


MainNav.propTypes = {
  menu: PropTypes.array,
  toggled: PropTypes.bool,
  loaded:  PropTypes.bool
};

export default MainNav;

import React, {useRef, useEffect} from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink"

import PropTypes from "prop-types";

import gsap from 'gsap';

import MobileMainNav from './mobile-menu/mobile-menu';

import './mainnav.style.scss';

const MainNav = ({menu = [
  {
    route: `/`,
    title: `Home`,
  },
  {
    route: `/beauty`,
    title: `Beauty`,
    sub: [
      {
        route: `/beauty`,
        title: `Overview`,
      },
      {
        route: `/beauty/hands-and-feet`,
        title: `Hands & Feet`,
      },
      {
        route: `/beauty/massage`,
        title: `Massage`,
      },
      {
        route: `/beauty/waxing`,
        title: `Waxing`,
      },
      {
        route: `/beauty/eye-treatments`,
        title: `Eye Treatments`,
      },
      {
        route: `/beauty/laser-hair-removal`,
        title: `Laser Hair Removal`,
      },
      {
        route: `/beauty/pure-facials`,
        title: `Pure Facials`,
      },
      {
        route: `/beauty/plasma-technology`,
        title: `Plasma Technology`,
      }
    ]
  },
  {
    route: `/aesthetics`,
    title: `Aesthetics`,
    sub: [
      {
        route: `/aesthetics`,
        title: `Aesthetics`,
      },
      {
        route: `/aesthetics/permanent-makeup`,
        title: `Permanent Makeup`,
      },
      {
        route: `/aesthetics/medical-tattooing`,
        title: `Medical Tattooing`,
      },
    ]
  },
  {
    route: `/academy`,
    title: `Academy`,
  },
  {
    route: `#`,
    title: `Hair`,
  },
  {
    route: `#`,
    title: `About`,
    sub: [
      {
        route: `/about/finance`,
        title: `Finance`,
      },
    ]
  },
  {
    route: `/contact`,
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
          <div key={link.title} className="md:px-6 relative mainnav__itemwrapper">
            <AniLink
              cover   
              top="entry"
              direction="up"
              duration={1.2}
              bg="#11B3BA"
              className="mainnav__item block text-white no-underline md:inline-block uppercase text-sm"
              to={link.route}
            >
              {link.title}
            </AniLink>
            {link.sub && <div className="mainnav__sub py-4">{link.sub.map(link => (
              <div key={link.title} className="md:px-6 mb-2">
                <AniLink
                  cover   
                  top="entry"
                  direction="up"
                  duration={1.2}
                  bg="#11B3BA"
                  className="mainnav__item block text-white no-underline md:inline-block uppercase text-sm"
                  to={link.route}
                >
                  {link.title}
                </AniLink>
              </div>
            )) }</div>}
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

import React, {useRef, useEffect} from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types";
import {TimelineLite, Expo} from 'gsap';

import Socials from '../../socials/socials';
import ButtonBordered from '../../button-bordered/button-bordered';

import './mobile-menu.style.scss';

const MobileMainNav = ({menu, toggled}) => {
  let mobileMenuWrapper = useRef(null);
  let mobileList = useRef(null);
  let socials = useRef(null);
  let bookNow = useRef(null);

  let tlOpen = new TimelineLite();
  let tlClose = new TimelineLite();

  useEffect(() => {
     if (toggled) {
      tlOpen.to(mobileMenuWrapper.current, {opacity: 1, visibility: 'visible', duration: 0.5, ease: Expo}, 'open')
      tlOpen.to([mobileList.current.children, socials.current, bookNow.current], {
        opacity: 1, 
        y: 0,
        duration: 0.5,
        stagger: { // wrap advanced options in an object
          each: 0.15,
          ease: "power2.easeInOut",
        }
      }, 'open')
   
    } else {
      tlClose.to([mobileList.current.children, socials.current, bookNow.current], {
        opacity: 0, 
        y: -30,
        duration: 0.5,
        stagger: { // wrap advanced options in an object
          each: 0.15,
          ease: "power2.easeInOut",
        }
      }, 'close')
      tlClose.to(mobileMenuWrapper.current, {opacity: 0, duration: 0.5, delay: 0.7, ease: Expo}, 'close')
        .to( mobileMenuWrapper.current, {visibility: 'hidden'})
    }
  }, [toggled]);

  return (
    <div ref={mobileMenuWrapper} className="mobile-nav md:hidden opacity-0 flex flex-wrap flex-col items-center justify-center">
      <div ref={mobileList} className="text-center mb-2">
        {menu.map((link) => (
          <div key={link.title} className="md:px-6">
            <AniLink
              cover   
              top="entry"
              direction="up"
              duration={1.2}
              bg="#11B3BA"
              className="mainnav__item block text-white no-underline md:inline-block uppercase mb-4 text-xl"
              to={link.route}
            >
              {link.title}
            </AniLink>
            </div>
        ))}
      </div>
      <div ref={socials} className="mb-8">
        <Socials />
      </div>
      <div ref={bookNow}>
        <ButtonBordered text="Book Online" link="#" />
      </div>
    </div>

  );
}


MobileMainNav.propTypes = {
  menu: PropTypes.array,
  toggled: PropTypes.bool
};

export default MobileMainNav;

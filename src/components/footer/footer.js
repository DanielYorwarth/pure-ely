import React from 'react';
import {Link} from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Socials from '../elements/socials/socials';

import './footer.styles.scss';

const Footer = () => {
  return (
    <div className="relative text-primary-dark">
      <div className="max-w-screen-xl mx-auto px-4 md:px-4 py-8 md:py-16 relative z-10 flex flex-wrap">
        <div className="w-full md:w-2/3 text-center md:text-left">
          <div className="mb-8 md:mb-10 flex justify-center md:justify-start">
            <Socials primary />
          </div>
          <div className="mb-8 md:mb-10">
            <span className="pr-6"><a href="mailto:info@pureely.co.uk">info@pureely.co.uk</a></span>
            <a href="tel:01353661321">01353 661 321</a>
          </div>
          <ul className="flex flex-wrap mb-6 md:mb-0 justify-center md:justify-start leading-loose">
            {[
              {
                route: `/`,
                title: `Home`,
              },
              {
                route: `/beauty`,
                title: `Beauty`,
              },
              {
                route: `/aesthetics`,
                title: `Aesthetics`,
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
              },
              {
                route: `/contact`,
                title: `Contact`,
              }
            ].map(menuItem => (
              <li className="pr-8 uppercase mb-2 md:mb-0" key={menuItem.title}>
                <AniLink 
                  cover   
                  top="entry"
                  direction="up"
                  duration={1.2}
                  bg="#11B3BA" 
                  to={menuItem.route}>
                  {menuItem.title}
                </AniLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right leading-relaxed">
          <b>Mon:</b> Aesthetics Clinic Only <br/>
          <b>Tue - Wed:</b> 10am – 6pm <br/>
          <b>Thu:</b> 9.30am – 5.30pm <br/>
          <b>Fri:</b> 10am – 6pm <br/>
          <b>Sat:</b> 9am – 3pm <br/>
          <b>Sun:</b> Aesthetics Clinic Only
        </div>
      </div>
      <div className="py-3 md:py-6 border-white border-solid border-t-2 relative z-10 font-light">
        <div className="md:flex flex-wrap text-center justify-between max-w-screen-xl mx-auto px-4 md:px-4">
            <span className="text-xs block">Copyright © 2020 Pure Ely ltd  |  Website by <a className="font-semibold" href="">volley.digital</a></span>
            <span className="text-xs block"><Link to='#'>Terms and Conditions</Link> |  <Link to='#'>Privacy Policy</Link> </span>
        </div>
      </div>
      <div className="inset-0 absolute bg-primary-dark opacity-10"/>
    </div>
  )
};

export default Footer;
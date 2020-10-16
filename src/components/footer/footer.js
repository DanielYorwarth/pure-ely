import React from 'react';
import {Link} from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types";

import Socials from '../elements/socials/socials';

import './footer.styles.scss';

const Footer = ({logoType}) => {
  let email;
  switch (logoType) {
    case 'beauty':
      email = 'info@pureely.co.uk'
      break;
    case 'aesthetics':
      email = 'info@oureelyaesthetics.co.uk'
      break;
    case 'academy':
      email = 'info@pureely.co.uk'
      break;
    case 'hair':
      email = 'info@pureelyhair.co.uk'
      break;
    default:
      email = 'info@pureely.co.uk'
      break;
  }
  return (
    <div className="relative text-primary-dark">
      <div className="max-w-screen-xl mx-auto px-4 md:px-4 py-6 md:py-16 relative z-10 flex flex-wrap">
        <div className="w-full text-center md:text-left flex flex-col flex-wrap items-center">
          <div className="mb-3 md:mb-8 flex justify-center md:justify-start">
            <Socials primary />
          </div>
          <div className="mb-3 md:mb-8">
            <span className="pr-6"><a href={`mailto:${email}`}>{email}</a></span>
            <a href="tel:01353661321">01353 661 321</a>
          </div>
          <ul className="flex flex-wrap mb-8 md:mb-0 justify-center md:justify-start leading-loose">
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
                route: `/hair`,
                title: `Hair`,
              },
              {
                route: `/about`,
                title: `About`,
              },
              {
                route: `/contact`,
                title: `Contact`,
              }
            ].map(menuItem => (
              <li className="pr-8 uppercase mb-2 md:mb-0" key={menuItem.title}>
                <AniLink 
                  paintDrip   
                  duration={1.2}
                  hex="#11B3BA" 
                  to={menuItem.route}>
                  {menuItem.title}
                </AniLink>
              </li>
            ))}
          </ul>
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

Footer.propTypes = {
  logoType: PropTypes.string,
};

export default Footer;
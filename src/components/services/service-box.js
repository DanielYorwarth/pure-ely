import React from "react";
import PropTypes from "prop-types";
import BackgroundImage from 'gatsby-background-image'

import AniLink from "gatsby-plugin-transition-link/AniLink"

import './service-box.style.scss';

const ServiceBox = ({service, height}) => {
  return (
    <AniLink  
      paintDrip   
      duration={1.2}
      hex="#11B3BA"
      to={service.link}
      rel="preload" as="image" href={service.image}
    >
      <div className={`service-box service-box--${height} text-center relative flex flex-wrap items-center justify-center`}>
        <div className="z-10 relative">
          <h2 className="relative text-3xl font-light leading-tight mb-1 text-white">{service.title}</h2>
          <span className="service-box__text relative text-white">{service.text}</span>
          <div className="service-box__circle absolute" />
        </div>
        <BackgroundImage
          Tag="section"
          fluid={service.image}
          className="service-box__image bg-image top-0 left-0 w-full h-full"
        >
        </BackgroundImage>
        <div className="service-box__overlay overlay-bg absolute top-0 left-0 w-full h-full" />
      </div>
    </AniLink>
  );
}

ServiceBox.propTypes = {
  service: PropTypes.object,
  height: PropTypes.string
};

export default ServiceBox;

import React from "react";
import PropTypes from "prop-types";

import {Link} from 'gatsby';

import './service-box.style.scss';

const ServiceBox = ({service, height}) => {
  return (
    <Link to={service.link}>
      <div className={`service-box service-box--${height} text-center relative flex flex-wrap items-center justify-center`}>
        <div className="z-10 relative">
          <h2 className="relative text-3xl font-light leading-tight mb-1 text-white">{service.title}</h2>
          <span className="service-box__text relative text-white">{service.text}</span>
          <div className="service-box__circle absolute" />
        </div>
        <div style={{backgroundImage: `url(${service.image})`}} className="service-box__image bg-image absolute top-0 left-0 w-full h-full" />
        <div className="service-box__overlay overlay-bg absolute top-0 left-0 w-full h-full" />
      </div>
    </Link>
  );
}

ServiceBox.propTypes = {
  service: PropTypes.object,
  height: PropTypes.string
};

export default ServiceBox;

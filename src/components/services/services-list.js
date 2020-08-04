import React from "react";
import PropTypes from "prop-types";

import ServiceBox from './service-box';

import './services-list.style.scss'

import servicesDots from '../../images/services-dots.png';

const ServiceList = ({services, height}) => {
  return (
    <div className="relative">
      <div className="w-full">
        <h3 className="uppercase max-w-screen-xl mx-auto text-4xl text-primary-dark leading-tight mb-8 px-4 md:px-4">Pamper yourself with some <br />
        of our wide variety of treatments.</h3>
        <div className="flex flex-wrap">
        {services.map(({title, image, text, link}, i) => (
          <div key={i} className="w-full sm:w-1/2 md:w-1/3">
            <ServiceBox height={height} service={{title, image, text, link}} />
          </div>
        ))}
        </div>
      </div>
      <img className="absolute hidden md:block services-list__dots" src={servicesDots} />
    </div>
  );
}

ServiceList.propTypes = {
  services: PropTypes.array,
  height: PropTypes.string
};


export default ServiceList;

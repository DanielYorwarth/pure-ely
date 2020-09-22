import React from "react";
import PropTypes from "prop-types";
import Img from 'gatsby-image';

const BeautyIntro = ({image}) => {
  return (
    <div className="relative">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-6xl mb-16 md:mb-32 px-4 md:px-4">
        <div className="blue-strip blue-strip--large hidden md:block absolute w-full h-full bg-primary" />
        <div className=" w-full md:w-2/5 mb-5 md:mb-0">
          <Img className="w-full" fluid={image} />
        </div>
        <div className="md:pl-16 w-full md:w-3/5">
          <h3 className="uppercase text-4xl text-primary-dark leading-tight mb-4">Pure Ely is a Beauty Salon in the heart of Ely.</h3>
          <p className="font-light">
            Our stunning location tucked away behind the Cathedral provides a tranquil and relaxing environment for all your beauty treatments.
            <br/><br/>
            Pure Ely Beauty offers a range of treatments from Gel Polish Nails & Toes, Eyelash Extensions, Massage, Spa Pedicures, LVL Lashlift and Dermaplaning.
          </p>
        </div>
      </div>
    </div>
  );
}

BeautyIntro.propTypes = {
  image: PropTypes.object,
};

export default BeautyIntro;

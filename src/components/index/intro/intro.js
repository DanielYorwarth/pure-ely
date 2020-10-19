import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import introDots from '../../../images/intro-dots.svg';

import './intro.style.scss';

const Intro = ({image}) => {
  return (
    <div className="relative px-4">
      <div className="flex flex-wrap justify-center mx-auto max-w-screen-xl mb-10 md:mb-32 text-center">
        <h1 className="uppercase text-4xl text-primary-dark leading-tight">The Pure Ely Story</h1>
      </div>
      <img style={{top: '-8.5%'}} className="absolute hidden lg:block left-0" src={introDots} />
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-5xl mb-16 md:mb-32">
        <div className="blue-strip hidden md:block absolute w-full h-full bg-primary" />
        <div className=" w-full md:w-1/3 mb-5 md:mb-0">
          {image &&<Img className="w-full" fluid={image} />}
        </div>
        <div className="md:pl-16 w-full md:w-2/3 text-center max-w-2xl mx-auto">
          <h3 className="uppercase text-4xl text-primary-dark leading-tight mb-4"> Pure Ely Beauty, Pure Ely Aesthetics & Training Academy & Pure Ely Hair</h3>
          <p className="font-light">Pure Ely strives to bring you the latest in Beauty, Hair and Aesthetics treatments. 2020 has seen our second clinic open in Ely, where our Aesthetics, Training Academy and Hair Stylists will be based. Our new Training Academy will be across both clinics, bringing you specially designed courses to enhance your career opportunities under our care and guidance. Pure Ely gives you the  convenience of having all your treatments under one trusted brand.</p>
        </div>
      </div>
    </div>
  );
}


Intro.propTypes = {
  image: PropTypes.object,
};


export default Intro;

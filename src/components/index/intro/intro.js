import React from "react";

import introDots from '../../../images/intro-dots.svg';
import pureSlippers from '../../../images/pure-ely-beauty-salon-slippers.jpg';

import './intro.style.scss';

const Intro = () => {
  return (
    <div className="relative px-4">
      <div className="flex flex-wrap justify-center mx-auto max-w-screen-xl mb-10 md:mb-32 text-center">
        <h1 className="uppercase text-4xl text-primary-dark leading-tight">Welcome to pure ely</h1>
      </div>
      <img style={{top: '-8.5%'}} className="absolute hidden lg:block left-0" src={introDots} />
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-5xl mb-16 md:mb-32">
        <div className="blue-strip hidden md:block absolute w-full h-full bg-primary" />
        <div className=" w-full md:w-1/3 mb-5 md:mb-0">
          <img className="w-full" src={pureSlippers} />
        </div>
        <div className="md:pl-16 w-full md:w-2/3 text-center max-w-2xl mx-auto">
          <h3 className="uppercase text-4xl text-primary-dark leading-tight mb-4">We love to help people look and feel great</h3>
          <p className="font-light">Situated within a beautiful new building with stunning gardens, tucked away from the hustle and bustle of Ely. You can truly enjoy a relaxing and pampering experience for nails, pedi’s, eye treatments and more. Come visit us for your beauty and nails in Ely.</p>
        </div>
      </div>
    </div>
  );
}
export default Intro;

import React from "react";

import pureSalon from '../../../images/pure-beauty-salon-ely.jpg';

const BeautyIntro = () => {
  return (
    <div className="relative">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-6xl mb-16 md:mb-32 px-4 md:px-4">
        <div className="blue-strip blue-strip--large hidden md:block absolute w-full h-full bg-primary" />
        <div className=" w-full md:w-2/5 mb-5 md:mb-0">
          <img className="w-full" src={pureSalon} />
        </div>
        <div className="md:pl-16 w-full md:w-3/5">
          <h3 className="uppercase text-4xl text-primary-dark leading-tight mb-4">Pure Ely is a Beauty and Nail Salon based In Three Cups Walk, Ely.</h3>
          <p className="font-light">Situated within a beautiful new building with stunning gardens, tucked away from the hustle and bustle of Ely. You can truly enjoy a relaxing and pampering experience for nails, pedi’s, eye treatments and more. Come visit us for your beauty and nails in Ely.</p>
        </div>
      </div>
    </div>
  );
}
export default BeautyIntro;

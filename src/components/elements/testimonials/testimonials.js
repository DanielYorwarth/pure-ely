import React from 'react';

import './testimonials.style.scss';

const Testimonials = () => (
  <div className="flex flex-wrap">
    <div className="w-full md:w-1/2 flex flex-wrap items-center justify-center bg-primary-dark">
      <div className="relative">
        <div className="testimonals__circlequote absloute flex items-center justify-center font-bold">
          <span className="testimonals__circlequote-text block mt-5">&quot;</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white uppercase text-center py-8 md:py-40 px-4 md:px-4 relative">What our <br/>customers <br/>are saying</h2>
      </div>
    </div>
    <div className="w-full md:w-1/2 flex flex-wrap items-center justify-center relative">
      <div className="max-w-xl mx-auto w-full py-8 px-4 md:px-4 text-center px-2 md:px-4">
        <div className="relative z-10">
          <h3 className="text-3xl font-semibold leading-relaxed mb-4">Super professional, clean, convenient location </h3>
          <p className="leading-loose mb-5 relative font-light">Super professional, clean, convenient location (right next to free car park), and kind staff. Got a wax there and will be back for other services! Currently booked in for a lash lift soon.</p>
          <span className="font-semibold block">Kayla DesChane</span>
          <span  className="font-light block opacity-75 italic">Happy Client</span>
        </div>
      </div>
      <div className="inset-0 absolute bg-primary-dark opacity-10"/>
    </div>
  </div>
);

export default Testimonials;
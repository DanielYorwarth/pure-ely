import React from 'react';

import './quote-snippet.style.scss';

const QuoteSnippet = () => (
  <div className="relative overflow-hidden">
    <div className="max-w-6xl mx-auto w-full py-16 md:py-24 px-2 md:px-4 text-center">
      <div className="quote-snippet relative z-10">
        <p className="leading-loose mb-3 relative">Super professional, clean, convenient location (right next to free car park), and kind staff. Got a wax there and will be back for other services! Currently booked in for a lash lift soon.</p>
        <span className="font-semibold">-- Kayla DesChane</span>
      </div>
    </div>
    <div className="inset-0 absolute bg-primary-dark opacity-10"/>
  </div>
);

export default QuoteSnippet;
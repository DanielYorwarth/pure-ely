import React from "react";

import bupa from '../../../images/bupa-logo.jpg';
import fsb from '../../../images/fsb-logo.jpg';
import nouveau from '../../../images/nouvea-logo.jpg';

const Logos = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-between items-center mx-auto max-w-md py-8 md:py-16">
      <div className="w-1/3 md:mb-0 px-2 md:px-4">
        <img className="w-full max-w-sm" src={bupa} />
      </div>
      <div className="w-1/3 md:mb-0 px-2 md:px-4">
        <img className="w-full" src={fsb} />
      </div>
      <div className="w-1/3 md:mb-0 px-2 md:px-4">
        <img className="w-full" src={nouveau} />
      </div>
    </div>

  );
}

export default Logos;

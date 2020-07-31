import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";

import { Parallax } from 'react-parallax';
import gsap, {Power3} from 'gsap';

import beautyImage from '../../../images/pure-ely-beauty-hoverover.jpg';

import './hero-full.style.scss';

const HeroFull = ({loaded}) => {

  let heroImageEl = useRef(null);
  let textWrapper = useRef(null);

  useEffect(() => {
    if(loaded) {  
      gsap.fromTo(heroImageEl.current, {y: -20, opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: Power3.easeInOut})
      gsap.fromTo(textWrapper.current, {y: -20, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: 1.4, ease: Power3.easeInOut})
    }
  }, [loaded]);

  return (
    <div ref={heroImageEl} className="subhero-full flex flex-wrap w-full mb-10 md:mb-32">
     <Parallax
      blur={0}
      bgImage={beautyImage}
      bgClassName="max-w-none"
      bgImageAlt="bg-image"
      strength={400}
      className="w-full"
    >
      <div className="flex flex-wrap w-full relative z-10 px-4 md:px-4">
        <div className="min-h-screen flex flex-col justify-center items-center max-w-screen-xl mx-auto text-center h-full relative sm:pt-32 md:pt-0 md:mt-24">
          <div ref={textWrapper} className="text-white mt-24 pb-8 relative z-10">
            <h2 className="uppercase relative text-3xl md:text-4xl xl:text-5xl font-light mb-4">Relax and unwind at our tranquil beauty salon
tucked away in the heart of Ely.</h2>
            <p className="font-light leading-relaxed max-w-3xl mx-auto">Treat yourself to one of our wide range of treatments including manicures, pedicures, laser hair and tattoo removal, massages, waxing, tinting, spray tanning and much more</p>
          </div>
        </div>
      </div>
      <div className="overlay-bg absolute top-0 left-0 w-full h-full" />
      </Parallax>
    </div>
  );
}


HeroFull.propTypes = {
  loaded: PropTypes.bool,
};

export default HeroFull;

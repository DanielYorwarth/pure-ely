import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";

import { Parallax } from 'react-parallax';
import gsap, {Power3} from 'gsap';

import './small-hero.style.scss';

const SmallHero = ({loaded, bgImage, marginBottom, title}) => {

  let heroImageEl = useRef(null);
  let textWrapper = useRef(null);

  useEffect(() => {
    if(loaded) {  
      gsap.fromTo(textWrapper.current, {y: -20, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: 1.4, ease: Power3.easeInOut})
    }
  }, [loaded]);

  return (
    <div ref={heroImageEl} className={`small-hero relative flex flex-wrap w-full ${marginBottom && 'mb-16 md:mb-32'}`}>
     <Parallax
      strength={400}
      bgClassName="max-w-none	"
      bgImage={bgImage}
      className="w-full"
    >
      <div className="flex flex-wrap w-full relative z-10">
        <div className="flex flex-col justify-center max-w-screen-xl py-2 px-4 w-full mx-auto h-full relative sm:mt-24">
          <div ref={textWrapper} className="text-white mt-32 md:mt-48 pb-8 relative z-10">
            <div className="small-hero__circle"/>
            {title && <h1 className="uppercase relative text-3xl md:text-4xl lg:text-5xl font-light max-w-4xl">{title}</h1>}
          </div>
        </div>
      </div>
      <div className="overlay-bg absolute top-0 left-0 w-full h-full" />
      </Parallax>
    </div>
  );
}


SmallHero.propTypes = {
  loaded: PropTypes.bool,
  bgImage: PropTypes.string,
  marginBottom: PropTypes.bool,
  title: PropTypes.string
};

export default SmallHero;

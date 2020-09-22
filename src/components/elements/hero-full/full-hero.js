import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";
import BackgroundImage from 'gatsby-background-image'

import gsap, {Power3} from 'gsap';

import './hero-full.style.scss';

const HeroFull = ({loaded, image}) => {

  let heroImageEl = useRef(null);
  let textWrapper = useRef(null);

  useEffect(() => {
    if(loaded) {  
      gsap.fromTo(textWrapper.current, {y: -20, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: 1.4, ease: Power3.easeInOut})
    }
  }, [loaded]);

  return (
    <div ref={heroImageEl} className="subhero-full flex flex-wrap w-full mb-10 md:mb-32">
     <BackgroundImage
      Tag="div"
      fluid={image}
      className="w-full"
    >
      <div className="flex flex-wrap w-full relative z-10 px-4 md:px-4">
        <div className="min-h-screen flex flex-col justify-center items-center max-w-screen-xl mx-auto text-center h-full relative sm:pt-32 md:pt-0 md:mt-24">
          <div ref={textWrapper} className="text-white mt-24 pb-8 relative z-10">
            <h2 className="uppercase relative text-3xl md:text-4xl xl:text-5xl font-light mb-4">THE PURE ELY EXPERIENCE</h2>
            <p className="font-light leading-relaxed max-w-3xl mx-auto">At Pure Ely, we redefine your salon experience, with beautiful surroundings, leading in-salon technology, and impeccable treatments. 
Pop in for a gel polish manicure or relax with a friend in our state-of-the-art luxury spa pedicure chairs. 
</p>
          </div>
        </div>
      </div>
      <div className="overlay-bg absolute top-0 left-0 w-full h-full" />
      </BackgroundImage>
    </div>
  );
}


HeroFull.propTypes = {
  loaded: PropTypes.bool,
  image: PropTypes.object,
};

export default HeroFull;

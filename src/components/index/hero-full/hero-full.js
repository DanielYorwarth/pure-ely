import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BackgroundImage from 'gatsby-background-image'

import gsap, {Power3} from 'gsap';

import './hero-full.style.scss';

const HeroFull = ({loaded, herofull, hero1, hero2, hero3, hero4}) => {
  let heroImageEl = useRef(null);
  let sectorsWrapper = useRef(null);
  let imageHovers = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ]

  useEffect(() => {
    if(loaded) {  
      gsap.fromTo(heroImageEl.current, {y: -20, opacity: 0}, {y: 0, scale: 1, opacity: 1, duration: 1, ease: Power3.easeInOut})
      gsap.fromTo(sectorsWrapper.current.children, {y: -15, opacity: 0}, {
        opacity: 1, 
        y: 0,
        duration: 0.5,
        delay: 1.8,
        stagger: { // wrap advanced options in an object
          each: 0.25,
          ease: "power3.easeInOut",
        }
      })
      gsap.fromTo([imageHovers[0].current, imageHovers[1].current, imageHovers[2].current, imageHovers[3].current], {
        opacity: 0}, {opacity: 1, duration: 1, delay: 2.8, ease: Power3.easeInOut
      })
    }
  }, [loaded]);

  return (
    <div className="hero-full flex flex-wrap w-full mb-10 md:mb-24">
      <div ref={sectorsWrapper} className="flex flex-wrap w-full relative z-10">
        <div className="hero-full__sub  h-screen  flex flex-col justify-center items-center w-full sm:w-1/2 lg:w-1/4 text-center h-full relative">
          <AniLink    
            paintDrip   
            duration={1.2}
            hex="#11B3BA"
            to='/beauty'
          >
            <div className="hero-full__sub-wrapper uppercase text-white sm:mt-24 relative z-10">
              <div className="hero-full__sub-circle"/>
              <h2 className="hero-full__sub-title relative text-3xl xl:text-4xl font-light mb-2">Beauty</h2>
              <span className="hero-full__sub-text relative font-light text-sm">Discover</span>
            </div>
            <div ref={imageHovers[0]}>
              <BackgroundImage
                Tag="div"
                fluid={hero1}
                className="hero-full__sub-image bg-image inset-0 opacity-0"
              />
              <div className="hero-full__sub-overlay overlay-bg absolute inset-0" />
            </div>
          </AniLink>
        </div>
        <div className="hero-full__sub h-screen flex flex-col justify-center items-center w-full sm:w-1/2 lg:w-1/4 text-center h-full relative">
          <AniLink    
            paintDrip   
            duration={1.2}
            hex="#11B3BA"
            to='/aesthetics'
          >
            <div className="hero-full__sub-wrapper uppercase text-white sm:mt-24 relative z-10">
              <div className="hero-full__sub-circle"/>
              <h2 className="hero-full__sub-title relative text-3xl xl:text-4xl font-light mb-2">Aesthetics</h2>
              <span className="hero-full__sub-text relative font-light text-sm">Discover</span>
            </div>
            <div ref={imageHovers[1]}>
              <BackgroundImage
                Tag="div"
                fluid={hero2}
                className="hero-full__sub-image bg-image inset-0 opacity-0"
              />
              <div className="hero-full__sub-overlay overlay-bg absolute inset-0" />
            </div>
          </AniLink>
        </div>
        <div className="hero-full__sub h-screen flex flex-col justify-center items-center w-full sm:w-1/2 lg:w-1/4 text-center h-full relative">
          <AniLink    
            paintDrip   
            duration={1.2}
            hex="#11B3BA"
            to='/academy'
          >
            <div className="hero-full__sub-wrapper uppercase text-white sm:mt-24 relative z-10">
              <div className="hero-full__sub-circle"/>
              <h2 className="hero-full__sub-title relative text-3xl xl:text-4xl font-light mb-2">ACADEMY</h2>
              <span className="hero-full__sub-text relative font-light text-sm">Discover</span>
            </div>
            <div ref={imageHovers[2]}>
              <BackgroundImage
                Tag="div"
                fluid={hero3}
                className="hero-full__sub-image bg-image inset-0 opacity-0"
              />
              <div className="hero-full__sub-overlay overlay-bg absolute inset-0" />
            </div>
          </AniLink>
        </div>
        <div className="hero-full__sub h-screen flex flex-col justify-center items-center w-full sm:w-1/2 lg:w-1/4 text-center h-full relative">
          <AniLink    
            paintDrip   
            duration={1.2}
            hex="#11B3BA"
            to='/hair'
          >
            <div className="hero-full__sub-wrapper uppercase text-white sm:mt-24 relative z-10">
              <div className="hero-full__sub-circle"/>
              <h2 className="hero-full__sub-title relative text-3xl xl:text-4xl font-light mb-2">HAIR</h2>
              <span className="hero-full__sub-text relative font-light text-sm">Discover</span>
            </div>
            <div ref={imageHovers[3]}>
              <BackgroundImage
                Tag="div"
                fluid={hero4}
                className="hero-full__sub-image bg-image inset-0 opacity-0"
              />
              <div className="hero-full__sub-overlay overlay-bg absolute inset-0" />
            </div>
          </AniLink>
        </div>
      </div>
      <div ref={heroImageEl} className="absolute inset-0" >
        <BackgroundImage
          Tag="div"
          fluid={herofull}
          className="realtive bg-image w-full h-full"
        />
      </div>
      <div className="overlay-bg absolute top-0 left-0 w-full h-full" />
    </div>
  );
}

HeroFull.propTypes = {
  loaded: PropTypes.bool,
  herofull: PropTypes.object,
  hero1: PropTypes.object,
  hero2: PropTypes.object,
  hero3: PropTypes.object,
  hero4: PropTypes.object,

};

export default HeroFull;

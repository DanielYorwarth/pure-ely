import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";
import AniLink from "gatsby-plugin-transition-link/AniLink"

import gsap, {Power3} from 'gsap';

import './hero-full.style.scss';

import heroImage from '../../../images/main-bg.jpg';
import beautyImage from '../../../images/pure-ely-beauty-hoverover.jpg';
import aestheticsImage from '../../../images/pure-ely-Aesthetics-hoverover.jpg';
import academyImage from '../../../images/pure-ely-academy-hoverover.jpg';
import hairImage  from '../../../images/pure-ely-hair-hoverover.jpg';

const HeroFull = ({loaded}) => {
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
            cover   
            top="entry"
            direction="up"
            duration={1}
            bg="#11B3BA" to='/beauty'
          >
            <div className="hero-full__sub-wrapper uppercase text-white sm:mt-24 relative z-10">
              <div className="hero-full__sub-circle"/>
              <h2 className="hero-full__sub-title relative text-3xl xl:text-4xl font-light mb-2">Beauty</h2>
              <span className="hero-full__sub-text relative font-light text-sm">Discover</span>
            </div>
            <div ref={imageHovers[0]}>
              <div style={{backgroundImage: `url(${beautyImage})`}}  className="hero-full__sub-image bg-image absolute top-0 left-0 w-full h-full opacity-0"/>
              <div className="hero-full__sub-overlay overlay-bg absolute top-0 left-0 w-full h-full" />
            </div>
          </AniLink>
        </div>
        <div className="hero-full__sub h-screen flex flex-col justify-center items-center w-full sm:w-1/2 lg:w-1/4 text-center h-full relative">
          <AniLink    
            cover   
            top="entry"
            direction="up"
            duration={1}
            bg="#11B3BA" to='/aesthetics'
          >
            <div className="hero-full__sub-wrapper uppercase text-white sm:mt-24 relative z-10">
              <div className="hero-full__sub-circle"/>
              <h2 className="hero-full__sub-title relative text-3xl xl:text-4xl font-light mb-2">Aesthetics</h2>
              <span className="hero-full__sub-text relative font-light text-sm">Discover</span>
            </div>
            <div ref={imageHovers[1]}>
              <div style={{backgroundImage: `url(${aestheticsImage})`}}  className="hero-full__sub-image bg-image absolute top-0 left-0 w-full h-full opacity-0"/>
              <div className="hero-full__sub-overlay overlay-bg absolute top-0 left-0 w-full h-full" />
            </div>
          </AniLink>
        </div>
        <div className="hero-full__sub h-screen flex flex-col justify-center items-center w-full sm:w-1/2 lg:w-1/4 text-center h-full relative">
          <AniLink    
            cover   
            top="entry"
            direction="up"
            duration={1}
            bg="#11B3BA" to='/academy'
          >
            <div className="hero-full__sub-wrapper uppercase text-white sm:mt-24 relative z-10">
              <div className="hero-full__sub-circle"/>
              <h2 className="hero-full__sub-title relative text-3xl xl:text-4xl font-light mb-2">ACADEMY</h2>
              <span className="hero-full__sub-text relative font-light text-sm">Discover</span>
            </div>
            <div ref={imageHovers[2]}>
              <div style={{backgroundImage: `url(${academyImage})`}}  className="hero-full__sub-image bg-image absolute top-0 left-0 w-full h-full opacity-0"/>
              <div className="hero-full__sub-overlay overlay-bg absolute top-0 left-0 w-full h-full" />
            </div>
          </AniLink>
        </div>
        <div className="hero-full__sub h-screen flex flex-col justify-center items-center w-full sm:w-1/2 lg:w-1/4 text-center h-full relative">
          <AniLink    
            cover   
            top="entry"
            direction="up"
            duration={1}
            bg="#11B3BA" to='#'
          >
            <div className="hero-full__sub-wrapper uppercase text-white sm:mt-24 relative z-10">
              <div className="hero-full__sub-circle"/>
              <h2 className="hero-full__sub-title relative text-3xl xl:text-4xl font-light mb-2">HAIR</h2>
              <span className="hero-full__sub-text relative font-light text-sm">Discover</span>
            </div>
            <div ref={imageHovers[3]}>
              <div style={{backgroundImage: `url(${hairImage})`}}  className="hero-full__sub-image bg-image absolute top-0 left-0 w-full h-full opacity-0"/>
              <div className="hero-full__sub-overlay overlay-bg absolute top-0 left-0 w-full h-full" />
            </div>
          </AniLink>
        </div>
      </div>
      <div ref={heroImageEl} style={{backgroundImage: `url(${heroImage})`}} className="bg-image absolute top-0 left-0 w-full h-full" />
      <div className="overlay-bg absolute top-0 left-0 w-full h-full" />
    </div>
  );
}

HeroFull.propTypes = {
  loaded: PropTypes.bool,
};

export default HeroFull;

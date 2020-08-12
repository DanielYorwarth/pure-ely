import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";

import { Parallax } from 'react-parallax';
import gsap, {Power3} from 'gsap';

import './sub-hero.style.scss';

const SubFull = ({loaded, bgImage, marginBottom, data}) => {

  let heroImageEl = useRef(null);
  let textWrapper = useRef(null);

  useEffect(() => {
    if(loaded) {  
      gsap.fromTo(textWrapper.current, {y: -20, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: 1.4, ease: Power3.easeInOut})
    }
  }, [loaded]);

  return (
    <div ref={heroImageEl} className={`sub-hero relative flex flex-wrap w-full ${marginBottom && 'mb-16 md:mb-32'}`}>
     <Parallax
      strength={400}
      bgClassName="max-w-none	"
      bgImage={bgImage}
      className="w-full"
    >
      <div className="flex flex-wrap w-full relative z-10">
        <div className="min-h-screen flex flex-col justify-center max-w-screen-xl py-2 px-4 w-full mx-auto h-full relative sm:mt-24">
          <div ref={textWrapper} className="text-white mt-32 md:mt-48 pb-8 relative z-10">
            <div className="sub-hero__circle"/>
            {data.title && <h2 className="uppercase relative text-3xl md:text-4xl lg:text-5xl font-light max-w-4xl">{data.title}</h2>}
            {data.subTitle && <p className="font-thin leading-relaxed max-w-lg">{data.subTitle}</p>}
            {data.fourCol &&
              <div className="flex flex-wrap justify-between pt-8 sm:pt-16">
                <div className="w-full lg:w-1/4 mb-5 lg:mb-0">
                  {data.fourCol.title && <h3 className="text-3xl font-light uppercase leading-tight">{data.fourCol.title}</h3>}
                </div>
                  {data.fourCol.textList && data.fourCol.textList.map((text, i) => (
                    <div key={i} className="w-full sm:w-1/3 lg:w-1/4 sm:pl-6">
                      {text}
                    </div>
                  ))}
              </div>
            }
            {data.twoCol &&
              <div className="flex flex-wrap justify-between pt-8 sm:pt-16 max-w-5xl ml-auto">
                  {data.twoCol && data.twoCol.map((text, i) => (
                    <div key={i} className="w-full sm:w-1/2 sm:pl-6">
                      {text}
                    </div>
                  ))}
              </div>
            }
            {data.threeCol &&
              <div className="flex flex-wrap justify-between pt-8 sm:pt-16 max-w-5xl ml-auto">
                  {data.threeCol && data.threeCol.map((text, i) => (
                    <div key={i} className="w-full sm:w-1/3 sm:pl-6">
                      {text}
                    </div>
                  ))}
              </div>
            }
            {data.oneCol &&
              <div className="flex flex-wrap justify-between pt-8 sm:pt-16 max-w-5xl ml-auto">
                <div className="w-full lg:w-3/4">
                  {data.oneCol}
                </div>
              </div>
            }
          </div>
        </div>
      </div>
      <div className="overlay-bg absolute top-0 left-0 w-full h-full" />
      </Parallax>
    </div>
  );
}


SubFull.propTypes = {
  loaded: PropTypes.bool,
  bgImage: PropTypes.string,
  marginBottom: PropTypes.bool,
  data: PropTypes.object
};

export default SubFull;

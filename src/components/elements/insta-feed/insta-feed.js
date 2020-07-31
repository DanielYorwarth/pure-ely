import React from 'react';

import Socials from '../socials/socials';

import './insta-feed.styles.scss';

const InstaFeed = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto mb-8 px-4 md:px-4">
        <h3 className="uppercase text-3xl">the latest from our INSTAGRAM</h3>
        <Socials dark />
      </div>
      <div className="bg-primary w-full text-center text-white text-3xl flex items-center justify-center" style={{height: '250px'}} >
        <span className="opacity-75">CUSTOM INSTAGRAM FEED TO GO HERE</span>
      </div>
    </div>
  )
};

export default InstaFeed;
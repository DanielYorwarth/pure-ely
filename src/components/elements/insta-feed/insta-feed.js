import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import InstaImage from './insta-image';
import Socials from '../socials/socials';

import './insta-feed.styles.scss';

const InstaFeed = ({token}) => {
  let [gallery, setGallery] = useState(null);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    if(!token) return
    fetch(`https://graph.instagram.com/me/media?fields=id,caption,permalink,media_url,images,media_type,thumbnail_url&access_token=${token}&limit=6`)
    .then(response => response.json())
    .then(data => 
      {
        setGallery(data.data)
        setLoading(false)
      })
    .catch(error => console.log(error))
  }, [token]);

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto mb-8 px-4 md:px-4">
        <h3 className="uppercase text-3xl">the latest from our INSTAGRAM</h3>
        <Socials dark />
      </div>
      <div className="bg-primary w-full text-center text-white text-3xl flex flex-wrap items-center justify-center" >
        {!loading && 
          gallery.map(image => 
            <InstaImage 
              key={image.id} 
              link={image.permalink} 
              caption={image.caption}
              isVideo={image.media_type}
              videoTumbnail={image.thumbnail_url}
              imageUrl={image.media_url}
              />
          )          
        }
      </div>
    </div>
  )
};

InstaFeed.propTypes = {
  token: PropTypes.string,
}

export default InstaFeed;
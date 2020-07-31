import React from "react";
import PropTypes from "prop-types";

import facebookLight from "../../../images/facebook.svg";
import instagramLight from "../../../images/instagram.svg";
import twitterLight from "../../../images/twitter.svg";
import facebookDark from "../../../images/facebook-dark.svg";
import instagramDark from "../../../images/instagram-dark.svg";
import twitterDark from "../../../images/twitter-dark.svg";
import facebookPrimary from "../../../images/facebook-primary.svg";
import instagramPrimary from "../../../images/instagram-primary.svg";
import twitterPrimary from "../../../images/twitter-primary.svg";

import './socials.style.scss';

const Socials = ({dark, primary}) => {
  let twitterIcon, instaIcon, facebookIcon
  if (dark) {
    twitterIcon = twitterDark;
    instaIcon = instagramDark;
    facebookIcon = facebookDark;
  } else if (primary) {
    twitterIcon = twitterPrimary;
    instaIcon = instagramPrimary;
    facebookIcon = facebookPrimary;
  } else {
    twitterIcon = twitterLight;
    instaIcon = instagramLight;
    facebookIcon = facebookLight;
  }
  return (
    <div className="flex flex-wrap">
       <a className="social-link" href="#">
          <img src={twitterIcon} />
        </a>
        <div className="px-8">
        <a className="social-link" href="#">
          <img src={instaIcon} />
        </a>
        </div>
        <a className="social-link" href="#">
          <img src={facebookIcon} />
        </a>
    </div>
  );
}

Socials.propTypes = {
  dark: PropTypes.bool,
  primary: PropTypes.bool
};

export default Socials;

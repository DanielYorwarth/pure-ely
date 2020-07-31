import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import SubHero from '../../components/elements/sub-hero/sub-hero';
import TwoColFullScreen from '../../components/layouts/2-col-full-screen/2-col-full-screen';
import ListItem from '../../components/elements/list-item/list-item';
import BookCta from '../../components/elements/book-cta/book-cta';

import laserhairBgImage from '../../images/best-laser-hair-removal-in-ely.jpg';

const ServicePage = () => {
  return (
    <Layout pageType='beauty'>
      <SEO
        keywords={[`LASER HAIR REMOVAL Ely`]}
        title="LASER HAIR REMOVAL"
      />
      <SubHero 
        loaded
        bgImage={laserhairBgImage}
        data={{
          title: 'LASER HAIR REMOVAL',
          oneCol: <div className="mb-10 md:mb-0" key={1}>
            <p className="font-thin">
              tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation tetur adipiscing elit, sed do eiusmod tempor incididunt ut la
              <br /><br />
              Laser hair removal treatments will need a patch test and consultation where treatment objectives can be discussed before the treatment can take place. See below for pricing.
            </p>
          </div>
        }}
      />
      <TwoColFullScreen 
        cols={[
          {
            bg: 'text-white bg-primary-darker',
            content: <div>
              <h3 className="text-4xl uppercase mb-5">WOMENS</h3>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2">
                  <ListItem text={<span>Upper Lip: <b>£60</b></span>} />
                  <ListItem text={<span>Sideburns: <b>£70</b></span>} />
                  <ListItem text={<span>Eyebrows: <b>£65</b></span>} />
                  <ListItem text={<span>Lower Legs: <b>£150</b></span>} />
                  <ListItem text={<span>Upper Legs: <b>£170</b></span>} />
                  <ListItem text={<span>Full Legs: <b>£250</b></span>} />
                  <ListItem text={<span>Lower Arms: <b>£100</b></span>} />
                  <ListItem text={<span>Upper Arms: <b>£100</b></span>} />
                  <ListItem text={<span>Full Arms: <b>£150</b></span>} />
                </div>
                <div className="w-full sm:w-1/2">
                  <ListItem text={<span>Underarm: <b>£80</b></span>} />
                  <ListItem text={<span>Brazilian: <b>£145</b></span>} />
                  <ListItem text={<span>Bikini Line: <b>£110</b></span>} />
                  <ListItem text={<span>Extended Bikini: <b>£130</b></span>} />
                  <ListItem text={<span>Tummy Line: <b>£65</b></span>} />
                  <ListItem text={<span>Face: <b>£140</b></span>} />
                  <ListItem text={<span>Chin: <b>£70</b></span>} />
                  <ListItem text={<span>Neck: <b>£80</b></span>} />
                  <ListItem text={<span>Hands or Feet: <b>£60</b></span>} />
                </div>
              </div>
            </div>
          },
          {
            bg: 'bg-white',
            content: <div>
              <h3 className="text-4xl uppercase mb-5">Mens</h3>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2">
                  <ListItem text={<span>Chest: <b>£130</b></span>} />
                  <ListItem text={<span>Back: <b>£250</b></span>} />
                  <ListItem text={<span>Abdomen: <b>£100</b></span>} />
                  <ListItem text={<span>Cheeks: <b>£75</b></span>} />
                  <ListItem text={<span>Full Arms: <b>£150</b></span>} />
                  <ListItem text={<span>Full Legs: <b>£260</b></span>} />
                  <ListItem text={<span>Hands or Feet: <b>£65</b></span>} />
                  <ListItem text={<span>Shoulders: <b>£80</b></span>} />
                </div>
                <div className="w-full sm:w-1/2">
                  <ListItem text={<span>Neck: <b>£80</b></span>} />
                  <ListItem text={<span>Full Beard: <b>£140</b></span>} />
                  <ListItem text={<span>Lower Arms: <b>£100</b></span>} />
                  <ListItem text={<span>Lower Legs: <b>£150</b></span>} />
                  <ListItem text={<span>Upper Legs: <b>£175</b></span>} />
                  <ListItem text={<span>Ears: <b>£55</b></span>} />
                  <ListItem text={<span>Glabella: <b>55</b></span>} />
                </div>
              </div>
            </div>
          }
        ]}
      />
      <BookCta />
    </Layout>
  );
}

export default ServicePage;
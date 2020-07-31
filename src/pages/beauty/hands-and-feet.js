import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import SubHero from '../../components/elements/sub-hero/sub-hero';
import ListItem from '../../components/elements/list-item/list-item';
import SubIntro from '../../components/elements/sub-intro/sub-intro';
import BookCta from '../../components/elements/book-cta/book-cta';

import handsBgImage from '../../images/hands-bg.jpg';

const ServicePage = () => {
  return (
    <Layout pageType='beauty'>
      <SEO
        keywords={[`Nails Ely`, `Gel Polish Ely`, `Pedicure Ely`, `Spa Pedicure Ely`]}
        title="Hands & Feet"
      />
      <SubHero 
        marginBottom
        loaded
        bgImage={handsBgImage}
        data={{
          title: 'HANDS & FEET',
          twoCol: [
            <div className="font-thin" key={1}>
              <ListItem text={<span>Gel polish hands or feet: <b className="font-semibold">£30</b></span>} />
              <ListItem text={<span>Gel polish removal: <b className="font-semibold">£15</b></span>} />
              <ListItem text={<span>Gel polish and removal from another salon: <b className="font-semibold">£45</b></span>} />
              <ListItem text={<span>Gel polish and builder gel: <b className="font-semibold">£35</b></span>} />
              <ListItem text={<span>Dip Powder Extensions: <b className="font-semibold">£45</b></span>} />
            </div>,
            <div className="font-thin" key={2}>
              <ListItem text={<span>Dip Powder Rebalance: <b className="font-semibold">£30</b></span>} />
              <ListItem text={<span>Dip Powder overlay on natural nail: <b className="font-semibold">£40</b></span>} />
              <ListItem text={<span>Luxury Spa Pedicure, including gel polish: <b className="font-semibold">£65</b></span>} />
              <ListItem text={<span>Prescriptive Spa Pedi: <b className="font-semibold">£70</b></span>} />
              <span className="text-sm">*Our Spa Pedicures use a state of the art Spa Pedi chair, with Whirlpool & include a cheeky glass of fizz!</span>
            </div>
          ]
        }}
      />
      <SubIntro 
        text={<p>tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation tetur adipiscing elit, sed do eiusmod tempor incididunt ut la</p>}
      />
      <BookCta />
    </Layout>
  );
}

export default ServicePage;

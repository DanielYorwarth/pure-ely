import React, { useEffect, useState } from "react";
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import SubHero from '../../components/elements/sub-hero/sub-hero';
import ListItem from '../../components/elements/list-item/list-item';
import SubIntro from '../../components/elements/sub-intro/sub-intro';
import BookCta from '../../components/elements/book-cta/book-cta';

const ServicePage = ({ data }) => {
 
  let [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Layout pageType='beauty'>
      <SEO
        keywords={[`Nails Ely`, `Gel Polish Ely`, `Pedicure Ely`, `Spa Pedicure Ely`]}
        title="Hands & Feet"
      />
      <SubHero 
        marginBottom
        loaded={loaded}
        bgImage={data.hero.childImageSharp.fluid}
        data={{
          title: 'HANDS & FEET',
          subTitle: '(Our Spa Pedicures use state of the art Spa Pedi chairs, with whirlpool & a cheeky glass of a fizz!)',
          twoCol: [
            <div className="font-thin" key={1}>
              <ListItem text={<span>Gel polish hands or feet: <b className="font-semibold">£30</b></span>} />
              <ListItem text={<span>Gel polish removal: <b className="font-semibold">£15</b></span>} />
              <ListItem text={<span>Gel polish and removal from another salon: <b className="font-semibold">£45</b></span>} />
              <ListItem text={<span>Gel polish and builder gel: <b className="font-semibold">£35</b></span>} />
              <ListItem text={<span>Dip Powder Extensions: <b className="font-semibold">£45</b></span>} />
              <ListItem text={<span>Callus Peel <span className="text-sm">(added to mini Pedi)</span>: <b className="font-semibold">£20</b></span>} />
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
        text={<p>Over 1,000 Gel Bottle colours available to choose from to make your nails and toes look perfect.  Whether you are a classic red, or a bright pop of colour with the latest designs and trends, we have got a colour for you!</p>}
      />
      <BookCta />
    </Layout>
  );
}

ServicePage.propTypes = {
  data: PropTypes.object,
};

const indexQuery = graphql`
  query {
    hero: file(relativePath: { eq: "hands-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const ServiceComponent = props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ServicePage props data={data} {...props} />
    )}
  />
)

ServiceComponent.displayName = "ServiceComponent"

export default ServiceComponent
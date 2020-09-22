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
        keywords={[`Massage Ely`, `Massaging Ely`, `HEad Massage Ely`, `Back Massage Ely`, `Hot Stone Massage Ely`]}
        title="Massage"
      />
      <SubHero 
        marginBottom
        loaded={loaded}
        bgImage={data.hero.childImageSharp.fluid}
        data={{
          title: 'Massage',
          twoCol: [
            <div className="font-thin" key={1}>
              <ListItem text={<span>Head Massage <span className="text-sm">(20 mins)</span>: <b className="font-semibold">£25</b></span>} />
              <ListItem text={<span>Half Body Massage <span className="text-sm">(30 mins)</span>: <b className="font-semibold">£35</b></span>} />
              <ListItem text={<span>Full Body Massage <span className="text-sm">(60 mins)</span>: <b className="font-semibold">£65</b></span>} />
            </div>,
            <div className="font-thin" key={2}>
              <ListItem text={<span>Half Body Hot Stone Massage <span className="text-sm">(30 mins)</span>: <b className="font-semibold">£42.50</b></span>} />
              <ListItem text={<span>Full Body Hot Stone Massage <span className="text-sm">(60 mins)</span>: <b className="font-semibold">£70</b></span>} />
              <ListItem text={<span>Hopi Ear Candle & Massage <span className="text-sm">(45 mins)</span>: <b className="font-semibold">£45</b></span>} />
            </div>
          ]
        }}
      />
      <SubIntro 
        text={<p>Relax and unwind at Pure Ely with one of our luxurious massages. Ranging from 20 minutes to 60 minutes, enjoy everything from a head massage to a full body hot stone massage experience. </p>}
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
    hero: file(relativePath: { eq: "massage-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
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

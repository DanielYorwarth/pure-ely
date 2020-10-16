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
        keywords={[`Eye Treatments Ely`, `Eyebrow Tinting Ely`, `Eyelash Tinting Ely`, `Eyelash Extentions Ely`, `LVL Lash Lift Ely`]}
        title="Eye Treatments"
      />
      <SubHero 
        marginBottom
        loaded={loaded}
        bgImage={data.hero.childImageSharp.fluid}
        data={{
          title: 'Eye Treatments',
          twoCol: [
            <div className="font-thin" key={1}>
              <ListItem text={<span>Eyebrow tint: <b className="font-semibold">£12.50</b></span>} />
              <ListItem text={<span>Eyelash & Eyebrow tint: <b className="font-semibold">£24.50</b></span>} />
              <ListItem text={<span>LVL Lash Lift: <b className="font-semibold">£65</b></span>} />
              <ListItem text={<span>Eyelash tint: <b className="font-semibold">£19</b></span>} />
            </div>,
            <div className="font-thin" key={2}>
              <ListItem text={<span>Eyelash Extensions <span className="text-sm">(Full set)</span>: <b className="font-semibold">£55</b></span>} />
              <ListItem text={<span>2 Week Eyelash infills <span className="text-sm">(30 mins)</span>: <b className="font-semibold">£22</b></span>} />
              <ListItem text={<span>3 Week Eyelash infills <span className="text-sm">(45 mins)</span>: <b className="font-semibold">£35</b></span>} />
              <span className="text-sm">*Patch Tests for these treatments will need to be completed 48 hours prior to treatment</span>
            </div>
          ]
        }}
      />
      <SubIntro 
        text={<p>Enhance your natural eyelashes and eyebrows with our range of treatments including LVL lash lift and tinting. Eyelash extensions are also available, including infills every two to three weeks. <i>Please note, patch tests will need to be completed 48 hours prior to your appointment.</i></p>}
      />
      <BookCta bg={data.bookbg.childImageSharp.fluid} />
    </Layout>
  );
}

ServicePage.propTypes = {
  data: PropTypes.object,
};

const indexQuery = graphql`
  query {
    hero: file(relativePath: { eq: "eyelash-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    bookbg: file(relativePath: { eq: "booking-bg-blurry.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1920) {
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
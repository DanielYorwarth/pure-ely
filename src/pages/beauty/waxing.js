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
        keywords={[`Waxing Ely`, `Bikini Wax Ely`, `Brazilian Waxing Ely`, `Hollywood Wax Ely`]}
        title="Waxing"
      />
      <SubHero 
        marginBottom
        loaded={loaded}
        bgImage={data.hero.childImageSharp.fluid}
        data={{
          title: 'Waxing',
          threeCol: [
            <div className="font-thin" key={1}>
              <ListItem text={<span>Full leg and bikini: <b className="font-semibold">£36</b></span>} />
              <ListItem text={<span>Half leg and bikini: <b className="font-semibold">£31</b></span>} />
              <ListItem text={<span>Full leg: <b className="font-semibold">£28</b></span>} />
              <ListItem text={<span>Half leg: <b className="font-semibold">£22</b></span>} />
              <ListItem text={<span>Bikini: <b className="font-semibold">£21</b></span>} />
              <ListItem text={<span>Brazilian <span className="text-sm">(Leaves a strip)</span>: <b className="font-semibold">£28</b></span>} />
            </div>,
            <div className="font-thin" key={2}>
              <ListItem text={<span>Hollywood <span className="text-sm">(All intimate hair removed)</span>: <b className="font-semibold">£35</b></span>} />
              <ListItem text={<span>Face <span className="text-sm">(Sides of face/full face)</span>: <b className="font-semibold">£15</b></span>} />
              <ListItem text={<span>Eyebrow: <b className="font-semibold">£10.50</b></span>} />
              <ListItem text={<span>Lip: <b className="font-semibold">£9.50</b></span>} />
              <ListItem text={<span>Chin: <b className="font-semibold">£11</b></span>} />
            </div>,
            <div className="font-thin" key={2}>
              <ListItem text={<span>Forearm: <b className="font-semibold">£17</b></span>} />
              <ListItem text={<span>Full arm: <b className="font-semibold">£22</b></span>} />
              <ListItem text={<span>Underarm: <b className="font-semibold">£16</b></span>} />
              <ListItem text={<span>Back: <b className="font-semibold">£25</b></span>} />
              <ListItem text={<span>Chest: <b className="font-semibold">£20</b></span>} />
            </div>
          ]
        }}
      />
      <SubIntro 
        text={<p>Remove unwanted hair quickly and easily at Pure Ely with our hot wax treatments. </p>}
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
    hero: file(relativePath: { eq: "waxing-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1920) {
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

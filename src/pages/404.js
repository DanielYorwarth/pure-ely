import React, { useEffect, useState } from "react";
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types";
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout";
import SEO from "../components/seo";

import SubHero from '../components/elements/sub-hero/sub-hero';

const FourZeroFourPage = ({ data }) => {
  
  let [loaded, setLoaded] = useState(true)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Layout>
      <SEO
        title="404 - Page not found"
      />
      <SubHero 
        loaded={loaded}
        bgImage={data.herofull.childImageSharp.fluid}
        data={{
          title: '404 Not Found',
          subTitle: 'Whoops, looks like the page your are looking for cannot be found!',
          fourCol: {
            title:  <AniLink    
            paintDrip   
            duration={1.2}
            hex="#11B3BA"
            to='/'
          >
            Back to home
          </AniLink>,
          }
        }}
      />
    </Layout>
  );
}

FourZeroFourPage.propTypes = {
  data: PropTypes.object,
};

const indexQuery = graphql`
  query {
    herofull: file(relativePath: { eq: "main-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
const FourZeroFourComponent = props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <FourZeroFourPage props data={data} {...props} />
    )}
  />
)

FourZeroFourComponent.displayName = "FourZeroFourComponent"

export default FourZeroFourComponent
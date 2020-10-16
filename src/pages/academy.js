import React, { useEffect, useState } from "react";
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";

import SubHero from '../components/elements/sub-hero/sub-hero';
import ListItem from '../components/elements/list-item/list-item';
import ButtonBordered from '../components/elements/button-bordered/button-bordered';

const AcademyPage = ({ data }) => {
  
  let [loaded, setLoaded] = useState(true)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Layout pageType='academy'>
      <SEO
        keywords={[`Beauty Academy Ely`, `Beauty Training Ely`, `Hair Training Ely`, `Beauty Academy Ely`]}
        title="Academy"
      />
      <SubHero 
        loaded={loaded}
        bgImage={data.herofull.childImageSharp.fluid}
        data={{
          title: 'COMING SOON',
          subTitle: 'Our highly skilled therapists and hairdressers at our Training Academy will be offering a wide range of courses. Including; Beauty therapy courses ranging from Gel polish Manicures, to LVL lash lifts',
          fourCol: {
            title: <ButtonBordered text="Register interest" link="#" />,
            textList: [
              <div key={1}><ListItem text="Beauty therapy courses ranging from Gel polish Manicures, to LVL lash lifts" /></div>,
              <div key={3}><ListItem text="Hair dressing courses, ranging from cutting to product sales skills. " /></div>,
              <div key={2}><ListItem text="Semi-Permanent Make up" /></div>,
            ]
          }
        }}
      />
    </Layout>
  );
}

AcademyPage.propTypes = {
  data: PropTypes.object,
};

const indexQuery = graphql`
  query {
    herofull: file(relativePath: { eq: "academy-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 60, maxWidth: 1920) {
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
const AcademyComponent = props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AcademyPage props data={data} {...props} />
    )}
  />
)

AcademyComponent.displayName = "AcademyComponent"

export default AcademyComponent
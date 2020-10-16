import React, { useEffect, useState } from "react";
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types";
import Img from 'gatsby-image';

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import SubHero from '../../components/elements/sub-hero/sub-hero';
import TwoColFlexable from '../../components/layouts/2-col-flexable/2-col-flexable';
import ServiceInfo from '../../components/services/service-info/service-info';
import BookCta from '../../components/elements/book-cta/book-cta';

const ServicePage = ({ data }) => {

  let [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Layout pageType='aesthetics'>
      <SEO
        keywords={[`Medical Tattooing Ely`]}
        title="Medical Tattooing "
      />
      <SubHero 
        marginBottom
        loaded={loaded}
        bgImage={data.hero.childImageSharp.fluid}
        data={{
          title: 'Medical Tattooing ',
          oneCol: <p className="font-thin">
            National Award Winner Laura Marshall works with and is recommended by local surgeons, NHS and Private sector hospitals as well as BUPA to achieve first class results with discreet service. 
            <br/><br/>
            We can also help with treatments following breast reduction or uplift surgery, pre and post gender reassignment surgery, or gynaecomastia surgery. 
            <br/><br/>
            Our speciality is treatment which is outside of the triggering medical institutions, and in a completely private luxury environment.
          </p>
        
        }}
      />
      <TwoColFlexable 
        colOne={{
          size: "w-full md:w-1/3 mb-5 md:mb-0",
          classList: "md:pr-4 lg:pr-8",
          content: <Img className="w-full" fluid={data.restoration.childImageSharp.fluid} />
        }}
        colTwo={{
          size: "w-full md:w-2/3",
          content: <ServiceInfo 
            key={1}
            title="Areola Restoration"
            priceList={[
              {
                price: '£345',
                text: 'Single',
                padding: 'pr-6'
              },
              {
                price: '£650',
                text: 'Double',
                padding: 'pr-6'
              }
            ]}
            alignPrice="bottom"
            upperText={<p>Your comfort and safety is at the top of our priorities, so rest assured all items used are medical grade, fully disposable and above the strict PPE compliance regulations- as standard. 
                <br/><br/>
                Consultations to be taken before treatment, in person or via private video call.
              </p>
            }
          />
        }}
      />
      <BookCta link="https://online.premiersoftware.co.uk/Book-Online-3G-V2/index2.php?i=21cea48d674d25790ce2f157548cf742&siteID=3" bg={data.bookbg.childImageSharp.fluid}/>
    </Layout>
  );
}

ServicePage.propTypes = {
  data: PropTypes.object,
};

const indexQuery = graphql`
  query {
    hero: file(relativePath: { eq: "medical-tattoing-ely.jpg" }) {
      childImageSharp {
        fluid(quality: 65, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    restoration: file(relativePath: { eq: "medical-tattooing-in-ely.jpg" }) {
      childImageSharp {
        fluid(quality: 70, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
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


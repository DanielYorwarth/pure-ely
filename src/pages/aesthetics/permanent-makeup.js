import React, { useEffect, useState } from "react";
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types";
import Img from 'gatsby-image';

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import SubHero from '../../components/elements/sub-hero/sub-hero';
import ListItem from '../../components/elements/list-item/list-item';
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
        keywords={[`Permanent Makeup Ely`, `Permanent Eyeliner Ely`, `Permanent Lips Ely`, `Permanent cosmetics Ely`]}
        title="Permanent Makeup"
      />
      <SubHero 
        marginBottom
        loaded={loaded}
        bgImage={data.hero.childImageSharp.fluid}
        data={{
          title: 'Permanent Make Up',
          subTitle: 'Services include 1 perfecting appointment to be taken 4-6 weeks after initial appointment. Patch test needed before treatment.',
          threeCol: [
            <div key={1}>
              <h4 className="text-2xl mb-2">EYEBROWS</h4>
              <div className="font-thin">
                <ListItem text={<span>Combination shading and realistic hair strokes: <b className="font-semibold">£350</b></span>} />
                <ListItem text={<span>Ombre or Powder Shading: <b className="font-semibold">£295</b></span>} />
                <ListItem text={<span>Microblading: <b className="font-semibold">£295 </b></span>} />
              </div>
            </div>,
            <div key={1}>
              <h4 className="text-2xl mb-2">EYELINER</h4>
              <div className="font-thin" key={2}>
                <ListItem text={<span>Stardust Shaded Glam Liner: <b className="font-semibold">£395</b></span>} />
                <ListItem text={<span>Latino Winged: <b className="font-semibold">£375</b></span>} />
                <ListItem text={<span>Classic liner top and bottom: <b className="font-semibold">£350 </b></span>} />
                <ListItem text={<span>Classic liner top OR bottom only: <b className="font-semibold">£250 </b></span>} />
              </div>
            </div>,
            <div key={1}>
              <h4 className="text-2xl mb-2">LIPS</h4>
              <div className="font-thin" key={2}>
                <ListItem text={<span>Gloss and Go ™ Lip Blushing: <b className="font-semibold">£350</b></span>} />
                <ListItem text={<span>Lip Liner only: <b className="font-semibold">£175</b></span>} />
              </div>
            </div>
          ]
        }}
      />
      <TwoColFlexable 
        colOne={{
          size: "w-full md:w-1/2 mb-5 md:mb-0",
          classList: "md:pr-4pr-4 lg:pr-16",
          content: <Img className="w-full" fluid={data.colour.childImageSharp.fluid} />
        }}
        colTwo={{
          size: "w-full md:w-1/2",
          content: <ServiceInfo 
            key={1}
            title="COLOUR BOOSTING"
            priceList={[
              {
                price: '£75',
                text: 'Up to 6 months',
                padding: 'pr-6'
              },
              {
                price: '£145',
                text: '6 Months-12 Months',
                padding: 'pr-6'
              },
              {
                price: '£200',
                text: '12-24 Months',
                padding: 'pr-6'
              }
            ]}
            alignPrice="bottom"
            upperText={<p>Already enjoyed a permanent makeup treatment from us in the past? Keeps 
                your permanent make up looking fresh and crisp, perfect for that upcoming 
                event, photoshoot or time away. 
                <br/><br/>
                We will only colour boost previous clients due to shade matching technology 
                used in our pigments. If you need a boost but have been treated elsewhere 
                beforehand you will be treated as a new client. 
                <br/><br/>
                *Consultation necessary for Colour Boost’s after 24 months from the first 
                treatment. This is to assess the skins integrity and colour saturation levels*
              </p>
            }
          />
        }}
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
    hero: file(relativePath: { eq: "permanent-makeup-ely.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    colour: file(relativePath: { eq: "Permanent-makeup.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bookbg: file(relativePath: { eq: "booking-bg-blurry.jpg" }) {
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


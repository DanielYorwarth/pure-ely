import React, { useEffect, useState } from "react";
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import SubHero from '../../components/elements/sub-hero/sub-hero';
import TwoColFullScreen from '../../components/layouts/2-col-full-screen/2-col-full-screen';
import ListItem from '../../components/elements/list-item/list-item';
import BookCta from '../../components/elements/book-cta/book-cta';

const ServicePage = ({ data }) => {

  let [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Layout pageType='beauty'>
      <SEO
        keywords={[`Laser Hair Removal Ely`]}
        title="Laser Hair Removal"
      />
      <SubHero 
        loaded={loaded}
        bgImage={data.hero.childImageSharp.fluid}
        data={{
          title: 'LASER HAIR REMOVAL',
          subTitle: '*Laser hair removal treatments will need a patch test and consultation where treatment objectives can be discussed before the treatment can take place. See below for pricing.',
          oneCol: <div className="mb-10 md:mb-0" key={1}>
            <p className="font-thin">
            
            Laser hair removal is a permanent solution for your unwanted body hair. Laser hair removal  treatment is available all over your body for both men and women and will be charged per session. Please note, you will need a patch test and an initial consultation to discuss your treatment plan. 
            </p>
          </div>
        }}
      />
      <TwoColFullScreen 
        cols={[
          {
            bg: 'text-white bg-primary-darker',
            content: <div>
              <h3 className="text-4xl uppercase mb-5">WOMENS <span className="text-sm block">(Prices per session)</span></h3>
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
                  <ListItem text={<span>Breast: <b>£80</b></span>} />
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
                  <ListItem text={<span>Hollywood: <b>£200</b></span>} />
                </div>
              </div>
            </div>
          },
          {
            bg: 'bg-white',
            content: <div>
              <h3 className="text-4xl uppercase mb-5">Mens <span className="text-sm block">(Prices per session)</span></h3>
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
                  <ListItem text={<span>Upper Arms: <b>£100</b></span>} />
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
      <BookCta bg={data.bookbg.childImageSharp.fluid}/>
    </Layout>
  );
}

ServicePage.propTypes = {
  data: PropTypes.object,
};

const indexQuery = graphql`
  query {
    hero: file(relativePath: { eq: "best-laser-hair-removal-in-ely.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
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

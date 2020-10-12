import React, { useEffect, useState } from "react";
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import SubHero from '../../components/elements/sub-hero/sub-hero';
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
        keywords={[`Facials Ely`, `Relaxing Facials Ely`, `Pure Facials Ely`, `Spa Facials Ely`]}
        title="Pure Facials"
      />
      <SubHero 
        marginBottom
        loaded={loaded}
        bgImage={data.hero.childImageSharp.fluid}
        data={{
          title: 'Pure Facials',
          subTitle: '*Time allocated includes consultation and cleaning of facility after treatment for Covid 19 as per guidelines',
          twoCol: [
            <div className="mb-10 md:mb-0" key={1}>
              <div className="mb-5">
                <h4 className="text-xl mb-2">PURE DERMAPLANING <b>£65 (60 mins)</b></h4>
                <p className="font-light">This treatment is purely dermaplaning. Working on all skin types, reducing any dullness, fine lines, and acne scarring and getting rid of fine hairs and dead skin cells on the surface of the skin, helping the luxurious Avant finishing products to absorb even deeper into the skin.</p>
              </div>
              <div>
                <h4 className="text-xl mb-2">PURE RELAX FACIALL <b>£65 (45 mins)</b></h4>
                <p className="font-light">The Pure Relax facial treatment focuses on relaxation, starting with a cleanse, tone, exfoliation and moisturising mask, followed by a scalp, neck and arm massage.</p>
              </div>
            </div>,
            <div key={2}>
              <div className="mb-5">
                <h4 className="text-xl mb-2">PURE REJUVENATION & DERMAPLANING <b>£80 (70 mins)</b></h4>
                <p className="font-light">Be totally rejuvenated and fresh faced with our rejuvenation facial including dermaplaning. Starting with a deep cleanse from the dermaplaning, followed by rejuvenating glow products and finishing with a head and shoulder massage, ensuring you are completely revitalized.</p>
              </div>
              <div>
                <h4 className="text-xl mb-2">Pure Dermaplaning <b>£65 (50 mins)</b></h4>
              </div>
              <div>
                <h4 className="text-xl mb-2">Pure Relax <b>£65 (45 mins)</b></h4>
              </div>
            </div>
          ]
        }}
      />
      <SubIntro 
        text={<p>Pamper and cleanse your skin with one of our luxury facials. From a cleansing treatment to soothe and exfoliate your face to dermaplaning reducing dullness, fine lines, and acne scarring, we have a facial treatment for everyone. </p>}
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
    hero: file(relativePath: { eq: "pure-facials-bg.jpg" }) {
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


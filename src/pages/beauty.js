import React, { useEffect, useState } from "react";
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";

import HeroFull from '../components/elements/hero-full/full-hero';
import BeautyIntro from '../components/beauty/intro/intro';
import ServiceList from '../components/services/services-list';
import Logos from '../components/elements/logos/logos';
import Testimonials from '../components/elements/testimonials/testimonials';

import BookCta from '../components/elements/book-cta/book-cta';
import InstaFeed from '../components/elements/insta-feed/insta-feed';

const BeautyPage = ({ data }) => {

  let [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const serviceList = [
    {
      title: 'Hands & Feet',
      text: 'Discover',
      image: data.hands.childImageSharp.fluid,
      link: '/beauty/hands-and-feet'
    },
    {
      title: 'Massage',
      text: 'Discover',
      image: data.massage.childImageSharp.fluid,
      link: '/beauty/massage'
    },
    {
      title: 'Waxing',
      text: 'Discover',
      image: data.waxing.childImageSharp.fluid,
      link: '/beauty/waxing'
    },
    {
      title: 'Eye Treatments & Extensions',
      text: 'Discover',
      image: data.eye.childImageSharp.fluid,
      link: '/beauty/eye-treatments'
    },
    {
      title: 'Laser Hair Removal',
      text: 'Discover',
      image: data.laser.childImageSharp.fluid,
      link: '/beauty/laser-hair-removal'
    },
    {
      title: 'Plasma Technology',
      text: 'Discover',
      image: data.plasma.childImageSharp.fluid,
      link: '/beauty/plasma-technology'
    }
    ,
    {
      title: 'Pure Facials',
      text: 'Discover',
      image: data.facials.childImageSharp.fluid,
      link: '/beauty/pure-facials'
    }
    ,
    {
      title: 'Other Treatments',
      text: 'Discover',
      image: data.other.childImageSharp.fluid,
      link: '/beauty/other-treatments'
    }
  ]

  return (
    <Layout pageType='beauty'>
      <SEO
        keywords={[`Beauty Ely`, `Massage Salon Ely`, `Beauty Treatments Ely`]}
        title="Beauty"
      />
      <HeroFull image={data.herofull.childImageSharp.fluid} loaded={loaded}/>
      <BeautyIntro image={data.intro.childImageSharp.fluid} />
      <ServiceList 
        height="45" 
        services={serviceList}
        title={"Pamper yourself with some <br /> of our wide variety of treatments."}
      />
      <Logos logos={[data.logo1.childImageSharp.fluid, data.logo2.childImageSharp.fluid, data.logo3.childImageSharp.fluid]} />
      <Testimonials />
      <BookCta marginBottom  />
      <InstaFeed token="IGQVJWSFBsWDctOXpzeVo4S1VNYjJOc0hHbnY4OHR4ZAUZAPc193c3pJRGY1M2NNVS16RnpRaHpJeEF3Yy1HRjN4OVQ2QndlZAzdhWFlsYkhoYTVOcmZA4cTYyMzFNOVBtdnBmX0VEbE5yVHFabkNka1VDdAZDZD" />
    </Layout>
  );
}

BeautyPage.propTypes = {
  data: PropTypes.object,
};

const indexQuery = graphql`
  query {
    herofull: file(relativePath: { eq: "beauty-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    intro: file(relativePath: { eq: "pure-beauty-salon-ely.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logo1: file(relativePath: { eq: "bupa-logo.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logo2: file(relativePath: { eq: "fsb-logo.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logo3: file(relativePath: { eq: "nouvea-logo.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    hands: file(relativePath: { eq: "hands-and-feet.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    massage: file(relativePath: { eq: "massage.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    waxing: file(relativePath: { eq: "waxing.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    eye: file(relativePath: { eq: "eye-treatments-and-extentions.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    laser: file(relativePath: { eq: "laser-hair-removal.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    plasma: file(relativePath: { eq: "plasma-cta.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    facials: file(relativePath: { eq: "facials-cta.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    other: file(relativePath: { eq: "other-treatments-cta.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const BeautyComponent = props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BeautyPage props data={data} {...props} />
    )}
  />
)

BeautyComponent.displayName = "BeautyComponent"

export default BeautyComponent

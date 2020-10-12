import React, { useEffect, useState } from "react";
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";

import HeroFull from '../components/index/hero-full/hero-full';
import Intro from '../components/index/intro/intro';
import ServiceList from '../components/services/services-list';
import Testimonials from '../components/elements/testimonials/testimonials';
import BookCta from '../components/elements/book-cta/book-cta';
import InstaFeed from '../components/elements/insta-feed/insta-feed';



const IndexPage = ({ data }) => {
  
  let [loaded, setLoaded] = useState(true)

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
    <StaticQuery
    query={indexQuery}
    render={data => (
      <Layout>
        <SEO
          keywords={[`Beauty Ely`, `Hair Salon Ely`, `Beauty Salon Ely`, `Nails Ely`, 'Nail Bar Ely']}
          title="Home"
        />
        <HeroFull
          herofull={data.herofull.childImageSharp.fluid} 
          hero1={data.hero1.childImageSharp.fluid}
          hero2={data.hero2.childImageSharp.fluid}
          hero3={data.hero3.childImageSharp.fluid}
          hero4={data.hero4.childImageSharp.fluid}
          loaded={loaded} 
        />
        <Intro image={data.about.childImageSharp.fluid} />
        <ServiceList 
          height="45" 
          services={serviceList}
          title={"Pamper yourself with some <br /> of our wide variety of treatments."}
        />
        <Testimonials />
        <BookCta bg={data.bookbg.childImageSharp.fluid} marginBottom />
        <InstaFeed token="IGQVJWSFBsWDctOXpzeVo4S1VNYjJOc0hHbnY4OHR4ZAUZAPc193c3pJRGY1M2NNVS16RnpRaHpJeEF3Yy1HRjN4OVQ2QndlZAzdhWFlsYkhoYTVOcmZA4cTYyMzFNOVBtdnBmX0VEbE5yVHFabkNka1VDdAZDZD" />
      </Layout>
    )}
    />
  );
}

IndexPage.propTypes = {
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
    hero1: file(relativePath: { eq: "pure-ely-beauty-hoverover.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    hero2: file(relativePath: { eq: "pure-ely-Aesthetics-hoverover.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    hero3: file(relativePath: { eq: "pure-ely-academy-hoverover.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    hero4: file(relativePath: { eq: "pure-ely-hair-hoverover.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    about: file(relativePath: { eq: "pure-ely-beauty-salon-slippers.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    hands: file(relativePath: { eq: "spa-pedi.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    massage: file(relativePath: { eq: "room-2.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    waxing: file(relativePath: { eq: "waxing-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    eye: file(relativePath: { eq: "waxing.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    laser: file(relativePath: { eq: "eye-treatments-and-extentions.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    plasma: file(relativePath: { eq: "plasma-cta.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    facials: file(relativePath: { eq: "facials-cta.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    other: file(relativePath: { eq: "other-treatments-cta.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 600) {
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


export default IndexPage


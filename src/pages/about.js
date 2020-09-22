import React, { useEffect, useState } from "react";
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";

import SmallHero from '../components/elements/small-hero/small-hero';
import BookCta from '../components/elements/book-cta/book-cta';
import SubIntro from '../components/elements/sub-intro/sub-intro';

const AboutPage = ({ data }) => {
  
  let [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Layout>
      <SEO
        keywords={[`About Pure Ely`]}
        title="About"
      />
      <SmallHero 
        marginBottom
        loaded={loaded}
        bgImage={data.herofull.childImageSharp.fluid}
        title='About Pure Ely'
      />
      <SubIntro 
        text={<div>
          <h2 className="mb-8 text-3xl">Luxury Beauty Salon in the heart of Cambridgeshire </h2>
          <p>
          We have come a long way since we first opened our doors back in May 2016. 
          <br /><br />
          Our luxury salon in the heart of Ely, Cambridgeshire offers a range of the latest beauty treatments, all under one roof. 
          <br /><br />
          2020 has seen the expansion of <b>Pure Ely</b> as we’ve opened the doors at our brand new <b>Pure Ely Aesthetics clinic</b>, which will also be home to <b>Pure Ely Hair</b> and our <b>Training Academy.</b>
          <br /><br />
          Treatments including nails, spray tanning and waxing will still be available at our current salon, with cosmetic procedures including botox, dermal filler and medical tattooing moving to the new aesthetics clinic.
          <br /><br />
          Our new training academy will be across both clinics bringing you specially designed courses to enhance your career opportunities under our care and guidance. 
          <br /><br />
          Our aim is to bring you all your treatments under one trusted brand.
          <br /><br />
          I am incredibly proud to work with such a wonderful team of highly trained, experienced beauticians, hairdressers and aestheticians who each have unique skills and specialisms (and of course, the ability to chat!) We really are a family at Pure Ely and I hope you will see this when you come for your treatments. 
          <br /><br />
          We’re always looking to expand our Pure Ely family! Bookings can be made via our simple <a className="text-primary font-bold" href="https://online.premiersoftware.co.uk/Book-Online-3G-V2/index2.php?i=21cea48d674d25790ce2f157548cf742&siteID=2">online booking system</a> and if you have any questions or concerns, you can give us a call on 01353 661321 or email <a className="text-primary font-bold" href="mailto:info@pureely.co.uk">info@pureely.co.uk</a> 
          <br /><br />
          I am really proud of how far we’ve come in the last four years and feel lucky to have such fantastic staff and customers to take on this journey with us. 
          </p>
        </div>}
      />
      <BookCta />
    </Layout>
  );
}

AboutPage.propTypes = {
  data: PropTypes.object,
};

const indexQuery = graphql`
  query {
    herofull: file(relativePath: { eq: "ely-salon-pure.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const AboutComponent = props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage props data={data} {...props} />
    )}
  />
)

AboutComponent.displayName = "AboutComponent"

export default AboutComponent

import React, { useEffect, useState } from "react";
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types";


import Layout from "../components/layout";
import SEO from "../components/seo";

import SmallHero from '../components/elements/small-hero/small-hero';
import BookCta from '../components/elements/book-cta/book-cta';

import mailIcon from '../images/mail.svg';
import phoneIcon from '../images/phone.svg';

const ContactPage = ({ data }) => {

  let [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Layout>
      <SEO
        keywords={[`Contact`]}
        title="Contact"
      />
      <SmallHero 
        marginBottom
        loaded={loaded}
        bgImage={data.herofull.childImageSharp.fluid}
        title='Contact'
      />
      <div className="flex flex-wrap mx-auto max-w-screen-xl mb-10 md:mb-32 px-4 justify-between">
        <div className="w-full mb-10 lg:mb-0 lg:w-2/5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.4554082385303!2d0.2641241158029285!3d52.398422079791196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8130b50e016a9%3A0x5ba3510c57407e53!2sPure%20Ely%20Ltd!5e0!3m2!1sen!2suk!4v1597224359293!5m2!1sen!2suk" width="100%" height="300" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-10 lg:mb-0 ">
          <h3 className="text-primary text-4xl uppercase font-light leading-tight mb-4">Contact Information</h3>
          <h3 className="text-primary text-2xl uppercase font-light leading-tight mb-4">Hair</h3>
          <p className="text-primary-dark font-bold mb-4">1 High Street Passage, <br/>
          Ely, CB7 4NB <br/>
          United Kingdom </p>
          <h3 className="text-primary text-2xl uppercase font-light leading-tight mb-4">Beauty</h3>
          <p className="text-primary-dark font-bold mb-4">4-8 Three Cups Walk, <br/>
          Ely, CB7 4AN <br/>
          United Kingdom </p>
          <a className="mb-3 block" href="mailto:info@pureely.co.uk"><div className="flex flex-wrap text-primary-dark font-bold items-start"><img className="pr-2 w-8" src={mailIcon} />info@pureely.co.uk</div></a>
          <a href="tel:01353661321"><div className="flex flex-wrap text-primary-dark font-bold items-start"><img className="pr-2 w-8" src={phoneIcon} />01353 661 321</div></a>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-10 lg:mb-0 leading-relaxed">
          <h3 className="text-primary text-4xl uppercase font-light leading-tight mb-4">OPENING HOURS</h3>
          <p className="text-primary-dark">
            <b>Mon:</b> Aesthetics Clinic Only <br/>
            <b>Tue - Wed:</b> 10am – 6pm <br/>
            <b>Thu:</b> 9.30am – 5.30pm <br/>
            <b>Fri:</b> 10am – 6pm <br/>
            <b>Sat:</b> 9am – 3pm <br/>
            <b>Sun:</b> Aesthetics Clinic Only
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mx-auto max-w-screen-xl mb-10 md:mb-32 justify-between">
        <h3 className="text-primary text-4xl uppercase font-light leading-tight mb-4 px-4">GET IN TOUCH</h3>
        <form className="flex flex-wrap text-white">
          <div className="w-full md:w-1/2 px-4 md:pr-2 mb-4">
            <input className="w-full bg-primary placeholder-opacity-75 placeholder-white p-4" placeholder="first name" />
          </div>
          <div className="w-full md:w-1/2 px-4 md:pl-2 mb-4">
            <input className="w-full bg-primary placeholder-opacity-75 placeholder-white p-4" placeholder="last name" />
          </div>
          <div className="w-full md:w-1/2 px-4 md:pr-2 mb-4">
            <input className="w-full bg-primary placeholder-opacity-75 placeholder-white p-4" placeholder="email" />
          </div>
          <div className="w-full md:w-1/2 px-4 md:pl-2 mb-4">
            <input className="w-full bg-primary placeholder-opacity-75 placeholder-white p-4" placeholder="phone" />
          </div>
          <div className="w-full px-4 mb-4">
            <textarea rows="6" className="w-full bg-primary placeholder-opacity-75 placeholder-white p-4" placeholder="message">
            </textarea>
          </div>
          <div className="w-full px-4">
            <button className="bg-primary-dark text-white py-4 px-8 hover:bg-primary-darker duration-300">Submit</button>
          </div>
        </form>
      </div>
      <BookCta />
    </Layout>
  );
}

ContactPage.propTypes = {
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
const ContactComponent = props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ContactPage props data={data} {...props} />
    )}
  />
)

ContactComponent.displayName = "ContactComponent"

export default ContactComponent
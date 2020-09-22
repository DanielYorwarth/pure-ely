import React from 'react';
import { graphql, StaticQuery } from "gatsby"
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

import ButtonBordered from '../button-bordered/button-bordered'

import './book-cta-style.scss';

const BookCta = ({marginBottom, data}) => (
  <div className={`${marginBottom && 'mb-10 md:mb-16'}`}>
    <Parallax
      blur={5}
      bgImage={data.bg.childImageSharp.fluid.src}
      bgImageAlt="Book Online"
      strength={300}
    >
      <div className="max-w-6xl mx-auto w-full py-16 md:py-24 px-4 md:px-4 text-center">
        <div className="relative text-white z-10">
          <h3 className="uppercase text-4xl mb-3">Book your appointment today</h3>
          <p className="leading-loose mb-6 relative max-w-3xl mx-auto">
            You can book appointments by calling <b>01353 661 321</b> or direct with our online booking system. 
            Please feel free to message us on <b>Facebook</b> or by email at <b>info@pureely.co.uk.</b>
          </p>
          <ButtonBordered windowed text='Book Online' link='https://online.premiersoftware.co.uk/Book-Online-3G-V2/index2.php?i=21cea48d674d25790ce2f157548cf742&siteID=2' />
        </div>
      </div>
      <div className="inset-0 absolute bg-primary-darker opacity-75"/>
    </Parallax>
  </div>
);

BookCta.propTypes = {
  data: PropTypes.object,
  marginBottom: PropTypes.bool
}

const indexQuery = graphql`
  query {
    bg: file(relativePath: { eq: "booking-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
const BookCtaComponent = props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BookCta props data={data} {...props} />
    )}
  />
)

BookCtaComponent.displayName = "BookCtaComponent"

export default BookCtaComponent

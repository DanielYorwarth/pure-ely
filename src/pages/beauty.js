import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import HeroFull from '../components/elements/hero-full/full-hero';
import BeautyIntro from '../components/beauty/intro/intro';
import ServiceList from '../components/services/services-list';
import Logos from '../components/elements/logos/logos';
import Testimonials from '../components/elements/testimonials/testimonials';

import BookCta from '../components/elements/book-cta/book-cta';
import InstaFeed from '../components/elements/insta-feed/insta-feed';

import feetHandsImage from '../images/hands-and-feet.jpg';
import massageImage from '../images/massage.jpg';
import waxingImages from '../images/waxing.jpg';
import eyeTreatmentImage from '../images/eye-treatments-and-extentions.jpg';
import laserHairImage from '../images/laser-hair-removal.jpg';
import plasmaImage from '../images/plasma-cta.jpg';
import facialsImage from '../images/facials-cta.jpg';
import otherImage from '../images/other-treatments-cta.jpg';

class BeautyPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }
  componentDidMount() {
    this.setState(() => ({loaded: true}))
  }
  componentWillUnmount() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.setState(() => ({loaded: false}))
  }
  render() {
    return (
      <Layout pageType='beauty'>
        <SEO
          keywords={[`Beauty Ely`, `Massage Salon Ely`, `Beauty Treatments Ely`]}
          title="Beauty"
        />
        <HeroFull loaded={this.state.loaded}/>
        <BeautyIntro />
        <ServiceList height="45" services={[
           {
            title: 'Hands & Feet',
            text: 'Discover',
            image: feetHandsImage,
            link: '/beauty/hands-and-feet'
          },
          {
            title: 'Massage',
            text: 'Discover',
            image: massageImage,
            link: '/beauty/massage'
          },
          {
            title: 'Waxing',
            text: 'Discover',
            image: waxingImages,
            link: '/beauty/waxing'
          },
          {
            title: 'Eye Treatments & Extensions',
            text: 'Discover',
            image: eyeTreatmentImage,
            link: '/beauty/eye-treatments'
          },
          {
            title: 'Laser Hair Removal',
            text: 'Discover',
            image: laserHairImage,
            link: '/beauty/laser-hair-removal'
          },
          {
            title: 'Plasma Technology',
            text: 'Discover',
            image: plasmaImage,
            link: '/beauty/plasma-technology'
          }
          ,
          {
            title: 'Pure Facials',
            text: 'Discover',
            image: facialsImage,
            link: '/beauty/pure-facials'
          }
          ,
          {
            title: 'Other Treatments',
            text: 'Discover',
            image: otherImage,
            link: '/beauty/other-treatments'
          }
        ]}/>
        <Logos />
        <Testimonials />
        <BookCta marginBottom  />
        <InstaFeed />
      </Layout>
    );
  }
}

export default BeautyPage;

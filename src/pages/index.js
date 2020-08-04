import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import HeroFull from '../components/index/hero-full/hero-full';
import Intro from '../components/index/intro/intro';
import ServiceList from '../components/services/services-list';
import Testimonials from '../components/elements/testimonials/testimonials';
import BookCta from '../components/elements/book-cta/book-cta';
import InstaFeed from '../components/elements/insta-feed/insta-feed';

import feetHandsImage from '../images/hands-and-feet.jpg';
import massageImage from '../images/massage.jpg';
import waxingImages from '../images/waxing.jpg';
import eyeTreatmentImage from '../images/eye-treatments-and-extentions.jpg';
import laserHairImage from '../images/laser-hair-removal.jpg';
import iplTreatmentImage from '../images/IPL-treatments.jpg';

class IndexPage extends React.Component {
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
      <Layout>
        <SEO
          keywords={[`Beauty Ely`, `Hair Salon Ely`, `Beauty Salon Ely`, `Nails Ely`, 'Nail Bar Ely']}
          title="Home"
        />
        <HeroFull loaded={this.state.loaded} />
        <Intro />
        <ServiceList height="45" services={[
          {
            title: 'Hands & Feet',
            text: 'Discover',
            image: feetHandsImage,
            link: '#'
          },
          {
            title: 'Massage',
            text: 'Discover',
            image: massageImage,
            link: '#'
          },
          {
            title: 'Waxing',
            text: 'Discover',
            image: waxingImages,
            link: '#'
          },
          {
            title: 'Eye Treatments & Extensions',
            text: 'Discover',
            image: eyeTreatmentImage,
            link: '#'
          },
          {
            title: 'Laser Hair Removal',
            text: 'Discover',
            image: laserHairImage,
            link: '#'
          },
          {
            title: 'IPL Treatments',
            text: 'Discover',
            image: iplTreatmentImage,
            link: '#'
          }
        ]}/>
        <Testimonials />
        <BookCta marginBottom />
        <InstaFeed />
      </Layout>
    );
  }
}

export default IndexPage;

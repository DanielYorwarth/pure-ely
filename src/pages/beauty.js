import React from "react";

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
import iplTreatmentImage from '../images/IPL-treatments.jpg';

const BeautyPage = () => {
  return (
    <Layout pageType='beauty'>
      <SEO
        keywords={[`Beauty Ely`, `Massage Salon Ely`, `Beauty Treatments Ely`]}
        title="Beauty"
      />
      <HeroFull loaded/>
      <BeautyIntro />
      <ServiceList height="60" services={[
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
      <Logos />
      <Testimonials />
      <BookCta marginBottom  />
      <InstaFeed />
    </Layout>
  );
}

export default BeautyPage;

import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import SubHero from '../components/elements/sub-hero/sub-hero';
import TwoColFullScreen from '../components/layouts/2-col-full-screen/2-col-full-screen';
import ServiceInfo from '../components/services/service-info/service-info';
import BookCta from '../components/elements/book-cta/book-cta';
import Testimonials from '../components/elements/testimonials/testimonials';

import hairBgImage from '../images/hair-bg.jpg';

class AestheticsPage extends Component {
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
  render () {
    return (
      <Layout pageType='hair'>
        <SEO
          keywords={[`Hair Ely`, `Hair Salon Ely`, `Hair Treatments Ely`]}
          title="Hair"
        />
        <SubHero 
          loaded={this.state.loaded}
          bgImage={hairBgImage}
          data={{
            title: 'Hair',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          }}
        />
        {this.state.loaded && <div>
        <TwoColFullScreen cols={[{
            bg: 'text-white bg-primary-darker',
            content: <ServiceInfo 
              key={1}
              title="CUTTING"
              priceList={[
                {
                  price: '£52',
                  text: 'Ladies cut & finish',
                  padding: 'pr-6'
                },
                {
                  price: '£32',
                  text: 'Gents Cut & Finish',
                }
              ]}
              alignPrice="bottom"
              upperText={<p>*Prices include cleanse&condition,cutting ,Blowdry and finish . <br/>Under 13yrs half price</p>
              }
            />
          },
          {
            bg: 'bg-white',
            content: <ServiceInfo 
              key={2}
              title="STYLING"
              priceList={[
                {
                  price: '£28',
                  text: 'Blowdry - Includes cleanse & condition, blowdry and finish',
                  padding: 'mb-4'
                },
                {
                  price: 'from £50',
                  text: 'Occasion Hair up',
                  padding: 'mb-4'

                },
                {
                  price: 'P.O.A',
                  text: 'Wedding Hair - In salon or on location the morning of the wedding.',
                }
              ]}
              alignPrice="bottom"
              row          
            />
          },
          {
            bg: 'bg-primary-darker text-white md:text-black md:bg-white',
            content: <ServiceInfo 
              key={3}
              title="COLOUR"
              priceList={[
                {
                  price: '£65',
                  text: 'T section highlight - Placement of highlights along the parting and hair line.',
                  padding: 'mb-4'
                },
                {
                  price: '£82',
                  text: '½ head highlights',
                  padding: 'mb-4'

                },
                {
                  price: '£90',
                  text: 'Full head bleaching - Scalp bleac',
                  padding: 'mb-4'

                },
                {
                  price: '£70',
                  text: 'Combination colour - Partial foils and between colour',
                  padding: 'mb-4'

                },
                {
                  price: '£90',
                  text: 'Creative colour - Includes Balayage, free lights, ombre, vivid colour toning',
                  padding: 'mb-4'

                },
                {
                  price: '£55',
                  text: 'Global all over colour - Includes gloss ,semi or permanent.',
                  padding: 'mb-4'

                },
                {
                  price: 'P.O.A - consultation required',
                  text: 'Colour correction - Light to dark ,dark to light or any major corrective colour work.',

                }
              ]}
              alignPrice="bottom"
              upperText="*all new colour clients require skin test 48 hours prior to appointment."
              row
            />
          },
          {
            bg: 'bg-white md:text-white md:bg-primary-darker',
            content: <ServiceInfo 
              key={4}
              title="KERATIN SMOOTHING"
              priceList={[
                {
                  price: '£160-200',
                }              
              ]}
              alignPrice="top"
              upperText={<p>Designed to eliminate frizz, create shine and smoothness to even the most unruly hair. A perfect treatment for difficult to tame hair or highly over processed locks. Please call or drop by for a consultation.<br/>*£50 deposit required upon booking .</p>}
            />
          }
        ]}/>
        <Testimonials />
        <BookCta />
        </div>}
      </Layout>
    );
  }
}

export default AestheticsPage;

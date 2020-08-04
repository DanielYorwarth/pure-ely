import React, { Component } from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import SubHero from '../../components/elements/sub-hero/sub-hero';
import ListItem from '../../components/elements/list-item/list-item';
import TwoColFlexable from '../../components/layouts/2-col-flexable/2-col-flexable';
import ServiceInfo from '../../components/services/service-info/service-info';
import BookCta from '../../components/elements/book-cta/book-cta';

import permanentBgImage from '../../images/permanent-makeup-ely.jpg';
import colourBoostingImage from '../../images/Permanent-makeup.jpg';

class ServicePage extends Component {
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
      <Layout pageType='aesthetics'>
        <SEO
          keywords={[`Permanent Make Up Ely`, `Permanent Eyeliner Ely`, `Permanent Lips Ely`, `Permanent cosmetics Ely`]}
          title="Permanent Make Up"
        />
        <SubHero 
          marginBottom
          loaded={this.state.loadoed}
          bgImage={permanentBgImage}
          data={{
            title: 'Permanent Make Up',
            subTitle: 'Services include 1 perfecting appointment to be taken 4-6 weeks after initial appointment. Patch test needed before treatment.',
            threeCol: [
              <div key={1}>
                <h4 className="text-2xl mb-2">EYEBROWS</h4>
                <div className="font-thin">
                  <ListItem text={<span>Combination shading and realistic hair strokes: <b className="font-semibold">£350</b></span>} />
                  <ListItem text={<span>Ombre or Powder Shading: <b className="font-semibold">£295</b></span>} />
                  <ListItem text={<span>Microblading: <b className="font-semibold">£295 </b></span>} />
                </div>
              </div>,
              <div key={1}>
                <h4 className="text-2xl mb-2">EYELINER</h4>
                <div className="font-thin" key={2}>
                  <ListItem text={<span>Stardust Shaded Glam Liner: <b className="font-semibold">£395</b></span>} />
                  <ListItem text={<span>Latino Winged: <b className="font-semibold">£375</b></span>} />
                  <ListItem text={<span>Classic liner top and bottom: <b className="font-semibold">£350 </b></span>} />
                  <ListItem text={<span>Classic liner top OR bottom only: <b className="font-semibold">£250 </b></span>} />
                </div>
              </div>,
              <div key={1}>
                <h4 className="text-2xl mb-2">LIPS</h4>
                <div className="font-thin" key={2}>
                  <ListItem text={<span>Gloss and Go ™ Lip Blushing: <b className="font-semibold">£350</b></span>} />
                  <ListItem text={<span>Lip Liner only: <b className="font-semibold">£175</b></span>} />
                </div>
              </div>
            ]
          }}
        />
        <TwoColFlexable 
          colOne={{
            size: "w-full md:w-1/2 mb-5 md:mb-0",
            classList: "md:pr-4pr-4 lg:pr-16",
            content: <img className="w-full" src={colourBoostingImage} />
          }}
          colTwo={{
            size: "w-full md:w-1/2",
            content: <ServiceInfo 
              key={1}
              title="COLOUR BOOSTING"
              priceList={[
                {
                  price: '£75',
                  text: 'Up to 6 months',
                  padding: 'pr-6'
                },
                {
                  price: '£145',
                  text: '6 Months-12 Months',
                  padding: 'pr-6'
                },
                {
                  price: '£200',
                  text: '12-24 Months',
                  padding: 'pr-6'
                }
              ]}
              alignPrice="bottom"
              upperText={<p>Already enjoyed a permanent makeup treatment from us in the past? Keeps 
                  your permanent make up looking fresh and crisp, perfect for that upcoming 
                  event, photoshoot or time away. 
                  <br/><br/>
                  We will only colour boost previous clients due to shade matching technology 
                  used in our pigments. If you need a boost but have been treated elsewhere 
                  beforehand you will be treated as a new client. 
                  <br/><br/>
                  *Consultation necessary for Colour Boost’s after 24 months from the first 
                  treatment. This is to assess the skins integrity and colour saturation levels*
                </p>
              }
            />
          }}
        />
        <BookCta />
      </Layout>
    );
  }
}

export default ServicePage;

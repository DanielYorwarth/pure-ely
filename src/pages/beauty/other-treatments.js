import React, { Component } from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import SubHero from '../../components/elements/sub-hero/sub-hero';
import ListItem from '../../components/elements/list-item/list-item';
import BookCta from '../../components/elements/book-cta/book-cta';

import handsBgImage from '../../images/other-treatments-bg.jpg';

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
      <Layout pageType='beauty'>
        <SEO
          title="Other Treatments"
        />
        <SubHero 
          loaded={this.state.loaded}
          bgImage={handsBgImage}
          data={{
            title: 'OTHER TREATMENTS',
            threeCol: [
              <div className="font-thin" key={1}>
                <span className="text-sm block mb-2 text-lg font-semibold">Laser Tattoo Removal</span>
                Tattoo removal requires a patch test and consultation, the price is dependent on size.
              </div>,
              <div className="font-thin" key={3}>
                <span className="text-sm block mb-2 text-lg font-semibold">Caflon Ear Piercing System </span>
                <ListItem text={<b className="font-semibold">£40</b>} />
                Under 16s will need signed consent from a parent or guardian. Piercing from the age of 7 only. We do not do Upper Cartilage Piercing
              </div>,
              <div className="font-thin" key={2}>
                <span className="text-sm block mb-2 text-lg font-semibold">Spray Tanning</span>
                <ListItem text={<span>Sienna X: <b className="font-semibold">£30</b></span>} />
                <ListItem text={<span>Top up Tan: <b className="font-semibold">£20</b></span>} />
              </div>
            ]
          }}
        />
        <BookCta />
      </Layout>
    );
  }
}

export default ServicePage;

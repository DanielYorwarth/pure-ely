import React, { Component } from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import SubHero from '../../components/elements/sub-hero/sub-hero';
import ListItem from '../../components/elements/list-item/list-item';
import SubIntro from '../../components/elements/sub-intro/sub-intro';
import BookCta from '../../components/elements/book-cta/book-cta';

import handsBgImage from '../../images/eyelash-bg.jpg';

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
          keywords={[`Eye Treatments Ely`, `Eyebrow Tinting Ely`, `Eyelash Tinting Ely`, `Eyelash Extentions Ely`, `LVL Lash Lift Ely`]}
          title="Eye Treatments"
        />
        <SubHero 
          marginBottom
          loaded={this.state.loaded}
          bgImage={handsBgImage}
          data={{
            title: 'Eye Treatments',
            twoCol: [
              <div className="font-thin" key={1}>
                <ListItem text={<span>Eyebrow tint: <b className="font-semibold">£12.50</b></span>} />
                <ListItem text={<span>Eyelash & Eyebrow tint: <b className="font-semibold">£24.50</b></span>} />
                <ListItem text={<span>LVL Lash Lift: <b className="font-semibold">£19</b></span>} />
                <ListItem text={<span>Eyelash tint: <b className="font-semibold">£65</b></span>} />
              </div>,
              <div className="font-thin" key={2}>
                <ListItem text={<span>Eyelash Extensions <span className="text-sm">(Full set)</span>: <b className="font-semibold">£42.50</b></span>} />
                <ListItem text={<span>2 Week Eyelash infills <span className="text-sm">(30 mins)</span>: <b className="font-semibold">£70</b></span>} />
                <ListItem text={<span>3 Week Eyelash infills <span className="text-sm">(45 mins)</span>: <b className="font-semibold">£45</b></span>} />
                <span className="text-sm">*Patch Tests for these treatments will need to be completed 48 hours prior to treatment</span>
              </div>
            ]
          }}
        />
        <SubIntro 
          text={<p>tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation tetur adipiscing elit, sed do eiusmod tempor incididunt ut la</p>}
        />
        <BookCta />
      </Layout>
    );
  }
}

export default ServicePage;

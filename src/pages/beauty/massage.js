import React, { Component } from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import SubHero from '../../components/elements/sub-hero/sub-hero';
import ListItem from '../../components/elements/list-item/list-item';
import SubIntro from '../../components/elements/sub-intro/sub-intro';
import BookCta from '../../components/elements/book-cta/book-cta';

import handsBgImage from '../../images/massage-bg.jpg';

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
          keywords={[`Massage Ely`, `Massaging Ely`, `HEad Massage Ely`, `Back Massage Ely`, `Hot Stone Massage Ely`]}
          title="Massage"
        />
        <SubHero 
          marginBottom
          loaded={this.state.loaded}
          bgImage={handsBgImage}
          data={{
            title: 'Massage',
            twoCol: [
              <div className="font-thin" key={1}>
                <ListItem text={<span>Head Massage <span className="text-sm">(20 mins)</span>: <b className="font-semibold">£25</b></span>} />
                <ListItem text={<span>Half Body Massage <span className="text-sm">(30 mins)</span>: <b className="font-semibold">£35</b></span>} />
                <ListItem text={<span>Full Body Massage <span className="text-sm">(60 mins)</span>: <b className="font-semibold">£65</b></span>} />
              </div>,
              <div className="font-thin" key={2}>
                <ListItem text={<span>Half Body Hot Stone Massage <span className="text-sm">(30 mins)</span>: <b className="font-semibold">£42.50</b></span>} />
                <ListItem text={<span>Full Body Hot Stone Massage <span className="text-sm">(60 mins)</span>: <b className="font-semibold">£70</b></span>} />
                <ListItem text={<span>Hopi Ear Candle & Massage <span className="text-sm">(45 mins)</span>: <b className="font-semibold">£45</b></span>} />
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

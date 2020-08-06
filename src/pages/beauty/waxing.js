import React, { Component } from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import SubHero from '../../components/elements/sub-hero/sub-hero';
import ListItem from '../../components/elements/list-item/list-item';
import SubIntro from '../../components/elements/sub-intro/sub-intro';
import BookCta from '../../components/elements/book-cta/book-cta';

import handsBgImage from '../../images/hands-bg.jpg';

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
          keywords={[`Waxing Ely`, `Bikini Wax Ely`, `Brazilian Waxing Ely`, `Hollywood Wax Ely`]}
          title="Waxing"
        />
        <SubHero 
          marginBottom
          loaded={this.state.loaded}
          bgImage={handsBgImage}
          data={{
            title: 'Waxing',
            threeCol: [
              <div className="font-thin" key={1}>
                <ListItem text={<span>Full leg and bikini: <b className="font-semibold">£36</b></span>} />
                <ListItem text={<span>Half leg and bikini: <b className="font-semibold">£31</b></span>} />
                <ListItem text={<span>Full leg: <b className="font-semibold">£28</b></span>} />
                <ListItem text={<span>Half leg: <b className="font-semibold">£22</b></span>} />
                <ListItem text={<span>Bikini: <b className="font-semibold">£21</b></span>} />
                <ListItem text={<span>Brazilian <span className="text-sm">(Leaves a strip)</span>: <b className="font-semibold">£21</b></span>} />
              </div>,
              <div className="font-thin" key={2}>
                <ListItem text={<span>Hollywood <span className="text-sm">(All intimate hair removed)</span>: <b className="font-semibold">£35</b></span>} />
                <ListItem text={<span>Face <span className="text-sm">(Sides of face/full face)</span>: <b className="font-semibold">£15</b></span>} />
                <ListItem text={<span>Eyebrow: <b className="font-semibold">£10.50</b></span>} />
                <ListItem text={<span>Lip: <b className="font-semibold">£9.50</b></span>} />
                <ListItem text={<span>Chin: <b className="font-semibold">£11</b></span>} />
              </div>,
              <div className="font-thin" key={2}>
                <ListItem text={<span>Forearm: <b className="font-semibold">£17</b></span>} />
                <ListItem text={<span>Full arm: <b className="font-semibold">£22</b></span>} />
                <ListItem text={<span>Underarm: <b className="font-semibold">£16</b></span>} />
                <ListItem text={<span>Back: <b className="font-semibold">£25</b></span>} />
                <ListItem text={<span>Chest: <b className="font-semibold">£20</b></span>} />
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

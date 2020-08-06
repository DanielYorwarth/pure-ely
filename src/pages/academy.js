import React, { Component } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import SubHero from '../components/elements/sub-hero/sub-hero';
import ListItem from '../components/elements/list-item/list-item';
import ButtonBordered from '../components/elements/button-bordered/button-bordered';

import academyBgImage from '../images/academy-bg.jpg';

class AcademyPage extends Component {
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
      <Layout pageType='academy'>
        <SEO
          keywords={[`Beauty Academy Ely`, `Beauty Training Ely`, `Hair Training Ely`, `Beauty Academy Ely`]}
          title="Academy"
        />
        <SubHero 
          loaded={this.state.loaded}
          bgImage={academyBgImage}
          data={{
            title: 'COMING SOON',
            subTitle: 'Our highly skilled therapists and hairdressers at our Training Academy will be offering a wide range of courses. Including; Beauty therapy courses ranging from Gel polish Manicures, to LVL lash lifts',
            fourCol: {
              title: <ButtonBordered text="Register interest" link="#" />,
              textList: [
                <div key={1}><ListItem text="Beauty therapy courses ranging from Gel polish Manicures, to LVL lash lifts" /></div>,
                <div key={3}><ListItem text="Hair dressing courses, ranging from cutting to product sales skills. " /></div>,
                <div key={2}><ListItem text="Semi-Permanent Make up" /></div>,
              ]
            }
          }}
        />
      </Layout>
    );
  }
}

export default AcademyPage;

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import SubHero from '../components/elements/sub-hero/sub-hero';
import ListItem from '../components/elements/list-item/list-item';
import ButtonBordered from '../components/elements/button-bordered/button-bordered';

import academyBgImage from '../images/academy-bg.jpg';

const AcademyPage = () => {
  return (
    <Layout pageType='acadamey'>
      <SEO
        keywords={[`Beauty Academy Ely`, `Beauty Training Ely`, `Hair Training Ely`, `Beauty Academy Ely`]}
        title="Academy"
      />
      <SubHero 
        loaded
        bgImage={academyBgImage}
        data={{
          title: 'COMING SOON',
          subTitle: 'tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation tetur adipiscing elit, sed do eiusmod tempor incididunt ut la',
          fourCol: {
            title: <ButtonBordered text="Register interest" link="#" />,
            textList: [
              <div key={1}><ListItem text="Manicure" /><ListItem text="Pedicure" /></div>,
              <div key={2}><ListItem text="Gel Polish Manicure" /><ListItem text="Gel Polish Pedicure" /></div>,
              <div key={3}><ListItem text="Semi Permanent Make Up" /></div>
            ]
          }
        }}
      />
    </Layout>
  );
}

export default AcademyPage;

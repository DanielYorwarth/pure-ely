import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import SubHero from '../../components/elements/sub-hero/sub-hero';
import TwoColFlexable from '../../components/layouts/2-col-flexable/2-col-flexable';
import ServiceInfo from '../../components/services/service-info/service-info';
import BookCta from '../../components/elements/book-cta/book-cta';

import medicalTattooingBgImage from '../../images/medical-tattoing-ely.jpg';
import medicalTattooingImage from '../../images/medical-tattooing-in-ely.jpg';

const ServicePage = () => {
  return (
    <Layout pageType='aesthetics'>
      <SEO
        keywords={[`Medical Tattooing Ely`]}
        title="Medical Tattooing "
      />
      <SubHero 
        marginBottom
        loaded
        bgImage={medicalTattooingBgImage}
        data={{
          title: 'Medical Tattooing ',
          oneCol: <p className="font-thin">
            National Award Winner Laura Marshall works with and is recommended by local surgeons, NHS and Private sector hospitals as well as BUPA to achieve first class results with discreet service. 
            <br/><br/>
            We can also help with treatments following breast reduction or uplift surgery, pre and post gender reassignment surgery, or gynaecomastia surgery. 
            <br/><br/>
            Our speciality is treatment which is outside of the triggering medical institutions, and in a completely private luxury environment.
          </p>
        
        }}
      />
      <TwoColFlexable 
        colOne={{
          size: "w-full md:w-1/3 mb-5 md:mb-0",
          classList: "md:pr-4 lg:pr-8",
          content: <img className="w-full" src={medicalTattooingImage} />
        }}
        colTwo={{
          size: "w-full md:w-2/3",
          content: <ServiceInfo 
            key={1}
            title="Areola Restoration"
            priceList={[
              {
                price: '£345',
                text: 'Single',
                padding: 'pr-6'
              },
              {
                price: '£650',
                text: 'Double',
                padding: 'pr-6'
              }
            ]}
            alignPrice="bottom"
            upperText={<p>Your comfort and safety is at the top of our priorities, so rest assured all items used are medical grade, fully disposable and above the strict PPE compliance regulations- as standard. 
                <br/><br/>
                Consultations to be taken before treatment, in person or via private video call.
              </p>
            }
          />
        }}
      />
      <BookCta />
    </Layout>
  );
}

export default ServicePage;

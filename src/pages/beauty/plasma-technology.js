import React, { Component } from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import SubHero from '../../components/elements/sub-hero/sub-hero';
import BookCta from '../../components/elements/book-cta/book-cta';
import TwoColFullScreen from '../../components/layouts/2-col-full-screen/2-col-full-screen';
import ServiceInfo from '../../components/services/service-info/service-info';

import plasmaBgImage from '../../images/plasma-ely.jpg';
import firstImageBG from '../../images/plasma-technology-ely.jpg';
import secondImageBG from '../../images/application-areas.jpg';
import thirdImageBG from '../../images/beautiful-skin-ely.jpg';
import fourthImageBG from '../../images/plasma-treatment-ely.jpg';


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
          keywords={[`Plasma Technology Ely`]}
          title="Plasma Technology"
        />
        <SubHero 
          loaded={this.state.loaded}
          bgImage={plasmaBgImage}
          data={{
            title: 'A|C|C|O|R® Cosmetic Corrector with NF+ Plasma Technology.',
            oneCol: <p className="font-thin sm:-mt-10">The gentle alternative to skin tightening surgery.</p>
          }}
        />
        <TwoColFullScreen 
          cols={[
            {
              bg: 'text-white bg-primary-darker',
              content: <ServiceInfo 
                key={1}
                title="Plasma Technology - Gentle alternative to surgery"
                upperText={<p>
                  A treatment with the A|C|C|O|R® Cosmetic Corrector is the gentle alternative to skin tightening surgery. Without touching the skin, the pen creates an ionised plasma arc which projects onto the skin surface. The plasma arc instantly vaporises a point of skin at the required position, thereby tightening the immediate surrounding area.
                  <br/><br/>
                  This is an especially low-pain procedure which achieves incredible, permanent results – immediately. A major advantage is the repaid healing, made possible through the NF+ technology. When treated by one of our trained specialists and through adherence to aftercare hygiene requirements, redness and swelling can be held to a minimum.
                </p>}
              />
            },
            {
              bg: 'bg-white',
              content: <ServiceInfo 
                key={2}
                upperText={<img src={firstImageBG} />}
              />
            },
            {
              bg: 'bg-white',
              content: <ServiceInfo 
                key={1}
                title="Application Areas"
                upperText={<p>
                  <span className="text-primary font-semibold">Skin tightening:</span> Upper and lower lids, Soft Facelift, throat and tummy lift.
                  <br /><br />
                  <span className="text-primary font-semibold">Reduction of wrinkles and uneven surfaces:</span> e.g. perioral wrinkles, worry lines, nasolabial folds, forehead.
                  <br /><br />
                  <span className="text-primary font-semibold">Reduction of unsightly pigmentation:</span> e.g. age/sun spots, liver spots, moles.
                  <br /><br />
                  <span className="text-primary font-semibold">Scar reduction / improvement.</span>
                  <br /><br />
                  <span className="text-primary font-semibold">Removal or correction of permanent make-up, skin tags and small tattoos.</span>
                </p>}
              />
            },
            {
              bg: 'bg-white py-40',
              bgImage: secondImageBG,
            },
            {
              bg: 'bg-white py-40',
              bgImage: thirdImageBG,
            },
            {
              bg: 'bg-white',
              content: <ServiceInfo 
                key={1}
                title="Your first steps to beautiful skin"
                upperText={<p>
                  Your fully trained and certified A|C|C|O|R Cosmetic Corrector Practitioner will undertake a consultation, explain the treatment and its effects to you in detail, work out a personal treatment plan and discuss the importance of the aftercare regime.
                  <br/><br/>
                  Treatment with the A|C|C|O|R Cosmetic Corrector is well proven. Multiple before and after photos of satisfied customers testify to this fact. The visible and measurable results are, smoother skin around the eyes and mouth, as well as a more even complexion. This results in an overall fresher, younger appearance – after only one treatment.
                </p>}
              />
            },
            {
              bg: 'bg-white',
              content: <ServiceInfo 
                key={1}
                title="Your first steps to beautiful skin"
                upperText={<p>
                  <span className="text-sm block mb-2 text-lg font-semibold">Skin tightening</span>
                  Upper eyelid lift & Crows feet: <span className="font-semibold text-primary">£350</span><br/>
                  Crows feet only: <span className="font-semibold text-primary">£250</span><br/>
                  Forehead or Glabella: <span className="font-semibold text-primary">£200</span><br/>
                  Eyelid lift or Under eye area: <span className="font-semibold text-primary">£300</span><br/>
                  Lip/Mouth area: <span className="font-semibold text-primary">£150</span><br/>
                  Pigmentation & skin tag removal: From <span className="font-semibold text-primary">£35</span><br/>
                  Patch test: <span className="font-semibold text-primary">£35</span>
                  <span className="text-sm block mb-4">*A Patch test for skin tightening treatments is required</span>
                  Pigmentation: <span className="font-semibold text-primary">£35</span><br/>
                  Skin Tag Removal: <span className="font-semibold text-primary">£35</span><br/>
                  Mole Removal: <span className="font-semibold text-primary">£35</span><br/>
                  Plasma Shower Rejuvenation: <span className="font-semibold text-primary">£150</span><br/>

                </p>}
              />
            },
            {
              bg: 'bg-white py-40',
              bgImage: fourthImageBG,
            },
          ]}
        />
        <BookCta />
      </Layout>
    );
  }
}

export default ServicePage;

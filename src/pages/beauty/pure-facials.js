import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import SubHero from '../../components/elements/sub-hero/sub-hero';
import SubIntro from '../../components/elements/sub-intro/sub-intro';
import BookCta from '../../components/elements/book-cta/book-cta';

import purefacialsBgImage from '../../images/pure-facials-bg.jpg';

const ServicePage = () => {
  return (
    <Layout pageType='beauty'>
      <SEO
        keywords={[`Facials Ely`, `Relaxing Facials Ely`, `Pure Facials Ely`, `Spa Facials Ely`]}
        title="Pure Facials"
      />
      <SubHero 
        marginBottom
        loaded
        bgImage={purefacialsBgImage}
        data={{
          title: 'Pure Facials',
          twoCol: [
            <div className="mb-10 md:mb-0" key={1}>
              <div className="mb-10">
                <h4 className="text-2xl mb-2">PURE CLEANSE FACIAL <b>£45 (45 mins)</b></h4>
                <p className="font-light">Our pure cleanse facial will leave you feeling fresh and moisturised. 
                This includes an exfoliating treatment during the treatment followed 
                by a mask and a scalp massage to ensure you are feeling relaxed.</p>
              </div>
              <div>
                <h4 className="text-2xl mb-2">PURE DERMAPLANING <b>£65 (60 mins)</b></h4>
                <p className="font-light">This treatment is purely dermaplaning. Working on all skin types, reducing any dullness, fine lines, and acne scaring and getting rid of fine hairs and dead skin cells on the surface of the skin, helping the luxurious Avant finishing products to absorb even deeper into the skin.</p>
              </div>
            </div>,
            <div key={2}>
              <div className="mb-10">
                <h4 className="text-2xl mb-2">PURE RELAX FACIALL <b>£65 (75 mins</b></h4>
                <p className="font-light">The Pure Relax facial treatment focuses on relaxation, starting with a cleanse, tone, exfoliation and moisturising mask, followed by a scalp, neck and arm massage.</p>
              </div>
              <div>
                <h4 className="text-2xl mb-2">PURE REJUVENATION & DERMAPLANING <b>£85 (90 mins)</b></h4>
                <p className="font-light">Be totally rejuvenated and fresh faced with our rejuvenation facial including dermaplaning. Starting with a deep cleanse from the dermaplaning, followed by rejuvenating glow products and finishing with a head and shoulder massage, ensuring you are completely revitalized.</p>
              </div>
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

export default ServicePage;

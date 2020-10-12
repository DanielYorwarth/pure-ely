import React, { useEffect, useState } from "react";
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";

import SubHero from '../components/elements/sub-hero/sub-hero';
import ListItem from '../components/elements/list-item/list-item';
import TwoColFullScreen from '../components/layouts/2-col-full-screen/2-col-full-screen';
import ServiceInfo from '../components/services/service-info/service-info';
import ServiceCopyList from '../components/services/services-copy-list/services-copy-list';
import ServiceBox from '../components/services/service-box'
import BookCta from '../components/elements/book-cta/book-cta';
import Testimonials from '../components/elements/testimonials/testimonials';
import InstaFeed from '../components/elements/insta-feed/insta-feed';

const AestheticsPage = ({ data }) => {

  let [loaded, setLoaded] = useState(true)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Layout pageType='aesthetics'>
      <SEO
        keywords={[`Aesthetics Ely`, `Aesthetics Salon Ely`, `Aesthetics Treatments Ely`]}
        title="Aesthetics"
      />
      <SubHero 
        loaded={loaded}
        bgImage={data.herofull.childImageSharp.fluid}
        data={{
          title: 'Aesthetics',
          subTitle: 'Consultations are discreet and necessary for all treatments before booking. Deposits of 50% required for new clients.',
          fourCol: {
            title: <div>OUR <br/> TREATMENTS</div>,
            textList: [
              <div key={1}><ListItem text="PROFHILO ™" /><ListItem text="Underarm Hyperhidrosis Treatment for unwanted sweating" /></div>,
              <div key={2}><ListItem text="Dermal Filler Treatment 1ml (various areas)" /><ListItem text="Anti Wrinkle Injections" /></div>,
              <div key={3}><ListItem text="Tear Trough Under Eye Treatment" /><ListItem text="B12 Injections" /></div>
            ]
          }
        }}
      />
      {loaded && <div>
      <TwoColFullScreen cols={[{
          bg: 'text-white bg-primary-darker',
          content: <ServiceInfo 
            key={1}
            title="PROFHILO ™"
            priceList={[
              {
                price: '£550',
                text: 'Dual Treatment',
                padding: 'pr-6'
              },
              {
                price: '£325',
                text: 'Single Treatment',
                padding: 'pr-6'
              }
            ]}
            alignPrice="center"
            upperText={<p>Known as the &apos;5 point Facelift&apos; this skin laxity treatment Profhilo remodels skin to tighten and lift as well as restore radiance from the deepest layers of your skin. Profhilo acts like a hydration elixir under the skin delivering potent results as a stand alone treatment or in combination with other aesthetic treatment regimes (such as Botox®) 
              <br/> <br/>
              Initial treatments are recommended in a set of two, each 4 weeks apart, and top ups can be given as required, est.12 months apart. 
              <br/> <br/>
              NB- Single doses available if preferred but recommended as a booster rather than a stand alone treatment. This is at your discretion. 
              <br/> <br/>
              Suitable for all areas including Hands </p>
            }
          />
        },
        {
          bg: 'bg-white',
          content: <ServiceInfo 
            key={2}
            title={<div>Dermal Filler <br/>Treatment 1ml</div>}
            priceList={[
              {
                price: '£400',
                text: 'per 1 ml',
                padding: 'pr-6'
              },
              {
                price: '£200',
                text: 'per 0.5 ml',
              }
            ]}
            alignPrice="center"
            upperText={<p>Enhancing natures best work with a little subtle help. <br/><br/>
                We prefer to work with your natural curves and contours but will happily work with you to give you the results you desire with the highest grade reputable products.<br/> <br/>
                Nothing too drastic is taken on in any one appointment to ensure you heal adequately, and love the look overall. <br/><br/>
                Maybe you want a subtle smoothing of laughter lines, or a perfect plump pout we are here to give you the treatment of your dreams. 
              </p>
            }
            list={{
              title: 'Suitable for:',
              items: [
                'Lip Enhancement',
                'Nasolabial Folds (outer nose to outer lip)',
                'Marionette Lines (outer mouth to chin lines)',
                'Cheeks'
              ]
            }}
          />
        },
        {
          bg: 'bg-primary-darker text-white md:text-black md:bg-white',
          content: <ServiceInfo 
            key={3}
            title={<div>Tear Trough Under Eye Treatment </div>
            }
            priceList={[
              {
                price: '£295',
              },
            ]}
            alignPrice="top"
            upperText={<p>Tear trough filler treatment quickly and effectively restores lost volume, and reduces dark circles under the eyes. It also reduces fine lines and wrinkles as the dermal filler will boost collagen production by attracting hydrating for the months to come.</p>}
          />
        },
        {
          bg: 'bg-white md:text-white md:bg-primary-darker',
          content: <ServiceInfo 
            key={4}
            title={<div>Anti Wrinkle Injections</div>
            }
            priceList={[
              {
                price: '£220',
                text: '1 Area',
                padding: 'pr-6'
              },
              {
                price: '£280',
                text: '2 Areas',
                padding: 'pr-6'
              },
              {
                price: '£320',
                text: '3 Areas',
              },
            ]}
            alignPrice="bottom"
            upperText={<p>Strictly by consultation only and available in multiple areas.</p>}
          />
        },
        {
          bg: 'text-white bg-primary-darker',
          content: <ServiceInfo 
            key={5}
            title={<div>&apos;No Glow&apos; Underarm 
              Hyperhidrosis Treatment 
              for unwanted sweating</div>
            }
            priceList={[
              {
                price: '£495',
              },
            ]}
            alignPrice="top"
            upperText={<p>Treats Hyperhidrosis (excessive sweating). Also used for men, summer commuting, job interviews and weddings or any time you may choose to have less underarm sweat.
              <br />
              Treatment lasts approx 6 Months.
            </p>}
          />
        },
        {
          bg: 'bg-white',
          content: <ServiceInfo 
            key={6}
            title={<div>B12 Injections</div> }
            priceList={[
              {
                price: '£295',
                text: 'Course of 10',
                padding: 'pr-6'
              },
              {
                price: '£35',
                text: 'Single dose',
              }
            ]}
            alignPrice="center"
            upperText={<p>B12 is being used commonly as a pick me up for times of over work, stress, and tiring lifestyles. As always we recommend you speak to your Dr if you are concerned about an ongoing deficiency.</p>}
            list={{
              title: 'BENEFITS of B12 include:',
              items: [
                'Reduces fatigue',
                'Increases energy levels',
                'Improves physical Performance',
                'Helps with blood cell formation',
                'Prevents anaemia',
                'Supports healthy hair, skin and nails',
                'Reduces risk of macular degeneration',
                'Even aids weight loss',
                'Increases brain function ',
                'Supports bone health and prevents osteoporosis',
              ]
            }}
            lowerText={<p>Booking will be at an agreed schedule based upon your medical needs. The sessions are flexible and can be booked at your discretion up to a schedule of every 3 days, but are usually weekly or bi weekly  </p>}
          />
        }
      ]}/>
      <ServiceCopyList />
      <div className="flex flex-wrap">
        {[
          {
            title: 'Permanent Make Up',
            text: 'Discover',
            image: data.permanent.childImageSharp.fluid,
            link: '/aesthetics/permanent-makeup'
          },
          {
            title: 'Medical Tattooing ',
            text: 'Discover',
            image: data.tattooing.childImageSharp.fluid,
            link: '/aesthetics/medical-tattooing'
          },
        ].map(({title, image, text, link}, i) => (
            <div key={i} className="w-full sm:w-1/2">
              <ServiceBox height='60' service={{title, image, text, link}} />
            </div>
          ))}
      </div>
      <Testimonials />
      <BookCta bg={data.bookbg.childImageSharp.fluid} marginBottom />
      <InstaFeed token="IGQVJWSFBsWDctOXpzeVo4S1VNYjJOc0hHbnY4OHR4ZAUZAPc193c3pJRGY1M2NNVS16RnpRaHpJeEF3Yy1HRjN4OVQ2QndlZAzdhWFlsYkhoYTVOcmZA4cTYyMzFNOVBtdnBmX0VEbE5yVHFabkNka1VDdAZDZD" />
      </div>}
    </Layout>
  );
}

AestheticsPage.propTypes = {
  data: PropTypes.object,
};

const indexQuery = graphql`
  query {
    herofull: file(relativePath: { eq: "aesthetics-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    tattooing: file(relativePath: { eq: "medical-tattoing-cta.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    permanent: file(relativePath: { eq: "permanent-makeup-bg-cta.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bookbg: file(relativePath: { eq: "booking-bg-blurry.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const AestheticsComponent = props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AestheticsPage props data={data} {...props} />
    )}
  />
)

AestheticsComponent.displayName = "AestheticsComponent"

export default AestheticsComponent

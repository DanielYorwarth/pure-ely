import React, { useEffect, useState } from "react";
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";

import SubHero from '../components/elements/sub-hero/sub-hero';
import TwoColFullScreen from '../components/layouts/2-col-full-screen/2-col-full-screen';
import ServiceInfo from '../components/services/service-info/service-info';
import BookCta from '../components/elements/book-cta/book-cta';
import Testimonials from '../components/elements/testimonials/testimonials';
import InstaFeed from '../components/elements/insta-feed/insta-feed';

const HairPage = ({ data }) => {

  let [loaded, setLoaded] = useState(true)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Layout pageType='hair'>
      <SEO
        keywords={[`Hair Ely`, `Hair Salon Ely`, `Hair Treatments Ely`]}
        title="Hair"
      />
      <SubHero 
        loaded={loaded}
        bgImage={data.herofull.childImageSharp.fluid}
        data={{
          title: 'Hair',
          subTitle: 'New for 2020, Pure Ely Hair is a new luxury salon in the heart of Ely, Cambridge.  Our salon offers a range of cut and colour packages as well as hair styling special occasions, including bridal packages. We also are able to offer keratin-smoothing treatments, to eliminate frizz and create smooth, shiny hair.',
        }}
      />
      {loaded && <div>
      <TwoColFullScreen cols={[{
          bg: 'text-white bg-primary-darker',
          content: <div>
            <ServiceInfo 
              key={1}
              title="CUTTING"
              priceList={[
                {
                  price: '£52',
                  text: 'Ladies cut & finish',
                  padding: 'pr-6'
                },
                {
                  price: '£33',
                  text: 'Gents Cut & Finish',
                }
              ]}
              smallPrice
              alignPrice="bottom"
              upperText={<div>
                  <p>
                  *Prices include cleanse & condition, cutting, Blowdry and finish . <br/>Under 13yrs half price
                  </p>
                  <h3 className="text-2xl -mb-8 font-bold mt-6">Managing Director</h3>
                </div>
              }
            />
            <ServiceInfo 
              key={2}
              smallPrice
              priceList={[
                {
                  price: '£50',
                  text: 'Ladies cut & finish',
                  padding: 'pr-6'
                },
                {
                  price: '£30',
                  text: 'Gents Cut & Finish',
                }
              ]}
              alignPrice="bottom"
              upperText={<div>
                  <h3 className="text-2xl -mb-8 font-bold">Creative Stylist</h3>
                </div>
              }
            />
            <ServiceInfo 
              key={2}
              smallPrice
              priceList={[
                {
                  price: '£48',
                  text: 'Ladies cut & finish',
                  padding: 'pr-6'
                },
                {
                  price: '£28',
                  text: 'Gents Cut & Finish',
                }
              ]}
              alignPrice="bottom"
              upperText={<div>
                  <h3 className="text-2xl -mb-8 font-bold">Senior Stylist</h3>
                </div>
              }
            />
            </div>
        },
        {
          bg: 'bg-white',
          content: <ServiceInfo 
            key={2}
            title="STYLING"
            priceList={[
              {
                price: '£28',
                text: 'Blowdry - Includes cleanse & condition, blowdry and finish',
                padding: 'mb-4'
              },
              {
                price: 'from £50',
                text: 'Occasion Hair up',
                padding: 'mb-4'

              },
              {
                price: 'P.O.A',
                text: 'Wedding Hair - In salon or on location the morning of the wedding.',
              }
            ]}
            alignPrice="bottom"
            row          
          />
        },
        {
          bg: 'bg-primary-darker text-white md:text-black md:bg-white',
          content: <div>
              <ServiceInfo 
              key={3}
              title="COLOUR"
              alignPrice="bottom"
              upperText="*all new colour clients require skin test 48 hours prior to appointment."
              row
            />
            <ServiceInfo 
              key={1}
              smallPrice
              priceList={[
                {
                  price: '£68',
                  text: 'Managing Director',
                  padding: 'pr-6'
                },
                {
                  price: '£65',
                  text: 'Creative Stylist',
                  padding: 'pr-6'
                },
                {
                  price: '£60',
                  text: 'Senior Stylist',
                }
              ]}
              alignPrice="bottom"
              upperText={<div>
                  <h3 className="text-3xl text-primary font-extrabold -mt-6">T section highlight</h3>
                  <p className="-mb-4">
                  *Placement of highlights along the parting and hair line.
                  </p>
                </div>
              }
            />
            <ServiceInfo 
              smallPrice
              key={1}
              priceList={[
                {
                  price: '£85',
                  text: 'Managing Director',
                  padding: 'pr-6'
                },
                {
                  price: '£82',
                  text: 'Creative Stylist',
                  padding: 'pr-6'
                },
                {
                  price: '£80',
                  text: 'Senior Stylist',
                }
              ]}
              alignPrice="bottom"
              upperText={<div>
                  <h3 className="text-3xl -mb-6 text-primary font-extrabold">½ head highlights</h3>
                </div>
              }
            />
            <ServiceInfo 
              smallPrice
              key={1}
              priceList={[
                {
                  price: '£98',
                  text: 'Managing Director',
                  padding: 'pr-6'
                },
                {
                  price: '£92',
                  text: 'Creative Stylist',
                  padding: 'pr-6'
                },
                {
                  price: '£88',
                  text: 'Senior Stylist',
                }
              ]}
              alignPrice="bottom"
              upperText={<div>
                  <h3 className="text-3xl -mb-6 text-primary font-extrabold">Full head bleaching (Scalp bleac)</h3>
                </div>
              }
            />
            <ServiceInfo 
              smallPrice
              key={1}
              priceList={[
                {
                  price: '£70',
                  text: 'Managing Director',
                  padding: 'pr-6'
                },
                {
                  price: '£64',
                  text: 'Creative Stylist',
                  padding: 'pr-6'
                },
                {
                  price: '£60',
                  text: 'Senior Stylist',
                }
              ]}
              alignPrice="bottom"
              upperText={<div>
                  <h3 className="text-3xl text-primary font-extrabold">Combination colour</h3>
                  <p className="-mb-4">
                  *Partial foils and between colour
                  </p>
                </div>
              }
            />
            <ServiceInfo 
              smallPrice
              key={1}
              priceList={[
                {
                  price: '£95',
                  text: 'Managing Director',
                  padding: 'pr-6'
                },
                {
                  price: '£90',
                  text: 'Creative Stylist',
                  padding: 'pr-6'
                },
                {
                  price: '£88',
                  text: 'Senior Stylist',
                }
              ]}
              alignPrice="bottom"
              upperText={<div>
                  <h3 className="text-3xl text-primary font-extrabold">Creative colour</h3>
                  <p className="-mb-4">
                  *Includes Balayage, free lights, ombre, vivid colour toning
                  </p>
                </div>
              }
            />
            <ServiceInfo 
              smallPrice
              key={1}
              priceList={[
                {
                  price: '£55',
                  text: 'Managing Director',
                  padding: 'pr-6'
                },
                {
                  price: '£52',
                  text: 'Creative Stylist',
                  padding: 'pr-6'
                },
                {
                  price: '£50',
                  text: 'Senior Stylist',
                }
              ]}
              alignPrice="bottom"
              upperText={<div>
                  <h3 className="text-3xl text-primary font-extrabold">Global all over colour</h3>
                  <p className="-mb-4">
                  *Includes gloss, semi or permanent
                  </p>
                </div>
              }
            />
            <ServiceInfo 
              smallPrice
              key={1}
              priceList={[
                {
                  price: '£55',
                  text: 'Managing Director',
                  padding: 'pr-6'
                },
                {
                  price: '£52',
                  text: 'Creative Stylist',
                  padding: 'pr-6'
                },
                {
                  price: '£50',
                  text: 'Senior Stylist',
                }
              ]}
              alignPrice="bottom"
              upperText={<div>
                  <h3 className="text-3xl text-primary font-extrabold">P.O.A - consultation required</h3>
                  <p className="-mb-4">
                  *Colour correction - Light to dark, dark to light or any major corrective colour work.
                  </p>
                </div>
              }
            />
          </div>
        },
        {
          bg: 'bg-white md:text-white md:bg-primary-darker',
          content: <div>
            <ServiceInfo 
              key={4}
              title="KERATIN SMOOTHING"
              priceList={[
                {
                  price: '£160-200',
                }              
              ]}
              alignPrice="top"
              upperText={<p className="mb-10 ">Designed to eliminate frizz, create shine and smoothness to even the most unruly hair. A perfect treatment for difficult to tame hair or highly over processed locks. Please call or drop by for a consultation.<br/>*£50 deposit required upon booking .</p>}
            />
            <ServiceInfo 
              key={2}
              title="Junior Stylist "
              priceList={[
                {
                  price: '£18',
                  text: 'Blow dry ',
                  padding: 'mb-4'
                },
                {
                  price: '£25',
                  text: 'Cut and blow dry',
                  padding: 'mb-4'

                },
                {
                  price: '£35',
                  text: 'T section highlights',
                  padding: 'mb-4'

                },
                {
                  price: '£37',
                  text: '½ head highlights',
                  padding: 'mb-4'
                },
                {
                  price: '£50',
                  text: 'Full head highlights',
                  padding: 'mb-4'
                },
                {
                  price: '£30',
                  text: 'All over colour',
                  padding: 'mb-4'
                },
              ]}
              alignPrice="bottom"
              row          
            />
          </div>
        }
      ]}/>
      <Testimonials />
      <BookCta link="https://online.premiersoftware.co.uk/Book-Online-3G-V2/index2.php?i=21cea48d674d25790ce2f157548cf742&siteID=4" bg={data.bookbg.childImageSharp.fluid} marginBottom />
      <InstaFeed token="IGQVJWSFBsWDctOXpzeVo4S1VNYjJOc0hHbnY4OHR4ZAUZAPc193c3pJRGY1M2NNVS16RnpRaHpJeEF3Yy1HRjN4OVQ2QndlZAzdhWFlsYkhoYTVOcmZA4cTYyMzFNOVBtdnBmX0VEbE5yVHFabkNka1VDdAZDZD" />
      </div>}
    </Layout>
  );
}

HairPage.propTypes = {
  data: PropTypes.object,
};

const indexQuery = graphql`
  query {
    herofull: file(relativePath: { eq: "hair-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    bookbg: file(relativePath: { eq: "booking-bg-blurry.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const HairComponent = props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <HairPage props data={data} {...props} />
    )}
  />
)

HairComponent.displayName = "HairComponent"

export default HairComponent
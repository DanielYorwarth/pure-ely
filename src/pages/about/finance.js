import React, { useEffect, useState } from "react";
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types";
import Img from 'gatsby-image';

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import SmallHero from '../../components/elements/small-hero/small-hero';
import BookCta from '../../components/elements/book-cta/book-cta';
import SubIntro from '../../components/elements/sub-intro/sub-intro';
import Accordian from '../../components/elements/accordian/accordian';

const FinancePage = ({ data }) => {

  let [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <Layout>
      <SEO
        keywords={[`Finance`]}
        title="Finance"
      />
      <SmallHero 
        marginBottom
        loaded={loaded}
        bgImage={data.herofull.childImageSharp.fluid}
        title='Finance'
      />
      <SubIntro 
        text={<div>
          <p className="mb-2">Spread the cost of your treatments over a time period that suits you.</p>
          <Img className="mx-auto w-64 mb-5" alt="payl8r" fluid={data.pay.childImageSharp.fluid} />
          <Accordian 
            questions={[
              {
                title: 'SPREAD THE COST OF YOUR PURCHASES',
                text: 'Payl8r is a simple payment option that enables you to buy the goods and services you require now, and spread the cost over a time period to suit you.'
              },
              {
                title: 'REPAYMENTS',
                text: <div>
                  You can repy in full within 30 days at 0.0% interest, or choose an instalment plan to repay on a monthly basis. You can change your instalment plan at any time.
                  <br/><br/>Interest rates from 1% per month – remember, if you pay in full in the first month, your loan is INTEREST FREE!
                  <br/><br/>The Payl8r link will be emailed to you straight from the retailer. Choose your payment plan and you will receive an answer within minutes.
                </div>
              },
              {
                title: 'WILL I QUALIFY?',
                text: <div>
                  To qualify you must have: <br/>
                  <ul className="pl-4">
                    <li>1. No CCJs within the last 3 years</li>
                    <li>2. No accounts in default</li>
                    <li>3. Be a UK resident</li>
                    <li>4. Have access to online banking</li>
                    <li>5. Have a regular source of income</li>
                  </ul>
                  <br/>
                  Finance is subject to your ability to repay the loan.
                </div>
              },
              {
                title: 'HOW DO WE ASSESS YOUR AFFORDABILITY?',
                text: <div>If you fail a traditional credit check, rather than rejecting your application we may give you the option to submit your affordability instead by supplying an electronic 90 day bank statement.
                    <span className="text-xs block">Representative example: If you borrow £200 over 12 months at a fixed monthly interest rate of 4% and representative annual percentage rate of 127.34%. You will pay: Monthly payment: £24.66. Total amount you repay: £295.92. Total charge for credit: £95.92.</span>
                  </div>
              },
              {
                title: 'The process to apply for finance has 3 steps:',
                text: <div>
                  The process to apply for finance has 3 steps:<br/>
                  <ul className="pl-4">
                    <li>1. Contact Pure Ely with your desire to apply for Finance.</li>
                    <li>2. Receive the payment link from Pure Ely.</li>
                    <li>3. Choose your preferred plan and apply for finance.</li>
                  </ul>
                </div>
              },
              {
                title: 'WHY USE PAYL8R?',
                text: <ul>
                    <li>1. Apply without effecting your credit</li>
                    <li>2. High acceptance rates</li>
                    <li>3. Low interest rates</li>
                    <li>3. Interest free periods</li>
                    <li>3. Flexible friendly finance</li>
                </ul>
              }
            ]}
          />
          <span className="block text-sm mt-10">Pure Ely Limited is a registered Trading name, Credit Introducer and Appointed Representative of Social Money Ltd t/a Payl8r, a company registered in England under company number 08054296 and is authorised and regulated by the Financial Conduct Authority and is entered on the Financial Services Register under reference number: 675283. registered with the Office of the Information Commissioner reference number 08054296.</span>
        </div>}
      />
      <BookCta bg={data.bookbg.childImageSharp.fluid}/>
    </Layout>
  );
}

FinancePage.propTypes = {
  data: PropTypes.object,
};

const indexQuery = graphql`
  query {
    herofull: file(relativePath: { eq: "salon-updated.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pay: file(relativePath: { eq: "payl8r.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 300) {
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
const FinanceComponent = props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <FinancePage props data={data} {...props} />
    )}
  />
)

FinanceComponent.displayName = "FinanceComponent"

export default FinanceComponent

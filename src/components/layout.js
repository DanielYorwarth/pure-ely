import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from './footer/footer';

const Layout = ({ children, pageType }) => {
  return (
    <div>
      <Header logoType={pageType} loaded={true} />
      {children}
      <Footer logoType={pageType} />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageType: PropTypes.string
};

export default Layout;

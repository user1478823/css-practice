import React, { Component } from "react";

import Header from "./../components/hielo/0_Header";
import SectionOne from "./../components/hielo/1_SectionOne";
import SectionTwo from "./../components/hielo/2_SectionTwo";
import SectionThree from "./../components/hielo/3_SectionThree";
import Footer from "./../components/hielo/4_Footer";

class Hielo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Hielo;

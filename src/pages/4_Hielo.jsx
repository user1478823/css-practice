import React, { Component } from "react";

import Header from "../components/4_hielo/0_Header";
import SectionOne from "../components/4_hielo/1_SectionOne";
import SectionTwo from "../components/4_hielo/2_SectionTwo";
import SectionThree from "../components/4_hielo/3_SectionThree";
import Footer from "../components/4_hielo/4_Footer";

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

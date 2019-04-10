import React, { Component } from "react";
import Hamburger from "./../components/retrospective/00_Hamburger";
import Header from "./../components/retrospective/0_Header";
import SectionThree from "../components/retrospective/2_SectionTwo";
import SectionFour from "../components/retrospective/3_SectionThree";
import Footer from "../components/retrospective/Footer/0_Footer";

import SectionOne from "../components/retrospective/1_SectionOne";

class Retrospective extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Hamburger />
        <Header />
        <SectionOne />
        <SectionThree />
        <SectionFour />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Retrospective;

import React, { Component } from "react";
import Header from "./../components/retrospective/0_Header";
import SectionThree from "../components/retrospective/3_SectionTwo";
import SectionFour from "../components/retrospective/4_SectionThree";
import Footer from "../components/retrospective/Footer/0_Footer";

import SectionOne from "../components/retrospective/1_SectionOne";

class Retrospective extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
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

import React, { Component } from "react";
import Hamburger from "./../components/3_retrospective/00_Hamburger";
import Header from "./../components/3_retrospective/0_Header";
import SectionOne from "../components/3_retrospective/1_SectionOne";
import SectionTwo from "../components/3_retrospective/2_SectionTwo";
import SectionThree from "../components/3_retrospective/3_SectionThree";
import Footer from "../components/3_retrospective/Footer/0_Footer";

class Retrospective extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Hamburger />
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Retrospective;

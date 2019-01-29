import React, { Component } from "react";
import Header from "./../components/retrospective/0_Header";
import SectionOne from "./../components/retrospective/1_SectionOne";
import SectionTwo from "./../components/retrospective/2_SectionTwo";

class Retrospective extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <SectionOne />
        <SectionTwo />
      </React.Fragment>
    );
  }
}

export default Retrospective;

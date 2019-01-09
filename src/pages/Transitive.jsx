import React, { Component } from "react";

import Header from "./../components/transitive/0_Header";
import SectionOne from "./../components/transitive/1_SectionOne";
import SectionTwo from "./../components/transitive/2_SectionTwo";
import SectionThree from "./../components/transitive/3_SectionThree";
import SectionFour from "./../components/transitive/4_SectionFour";

class Transitive extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionOne />
      </React.Fragment>
    );
  }
}

export default Transitive;

import React, { Component } from "react";

import Header from "./../components/urban/0_Header";
import SectionOne from "./../components/urban/1_SectionOne";
import SectionTwo from "./../components/urban/2_SectionTwo";

class Urban extends Component {
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

export default Urban;

import React, { Component } from "react";

import Header from "./../components/hielo/0_Header";
import SectionOne from "./../components/hielo/1_SectionOne";

class Hielo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <SectionOne />
      </React.Fragment>
    );
  }
}

export default Hielo;

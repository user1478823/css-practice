import React, { Component } from "react";

import Header from "./../components/transitive/0_Header";
import SectionOne from "./../components/transitive/1_SectionOne";

class Transitive extends Component {
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

export default Transitive;

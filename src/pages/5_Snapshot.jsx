import React, { Component } from "react";

import Header from "../components/snapshot/0_Header";
import SectionOne from "../components/snapshot/1_SectionOne";

class Snapshot extends Component {
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

export default Snapshot;

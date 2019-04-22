import React, { Component } from "react";

import Header from "../components/5_snapshot/0_Header";
import SectionOne from "../components/5_snapshot/1_SectionOne";
import Footer from "../components/5_snapshot/footer/0_Footer";

class Snapshot extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <SectionOne />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Snapshot;

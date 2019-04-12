import React, { Component } from "react";

import Header from "../components/startbootstrap/0_Header";
import SectionOne from "../components/startbootstrap/1_SectionOne";

export default class StartBootstrap extends Component {
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

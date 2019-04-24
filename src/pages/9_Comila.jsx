import React, { Component } from "react";

import { FontsMain } from "../components/9_comila/global/Fonts";

import Header from "../components/9_comila/0_Header";
import SectionOne from "../components/9_comila/1_SectionOne";
import SectionTwo from "../components/9_comila/2_SectionTwo";
import Footer from "../components/9_comila/3_Footer";

export default class Comila extends Component {
  state = {};
  render() {
    return (
      <FontsMain>
        <Header />
        <SectionOne />
        <SectionTwo />
        <Footer />
      </FontsMain>
    );
  }
}

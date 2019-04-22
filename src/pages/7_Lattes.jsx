import React, { Component } from "react";

import { FontsMain } from "../components/7_lattes/global/Fonts";

import Header from "../components/7_lattes/0_Header";
import SectionOne from "../components/7_lattes/1_SectionOne";
import SectionTwo from "../components/7_lattes/2_SectionTwo";
import SectionThree from "../components/7_lattes/3_SectionThree";
import SectionFour from "../components/7_lattes/4_SectionFour";
import SectionFive from "../components/7_lattes/5_SectionFive";
import SectionSix from "../components/7_lattes/6_SectionSix";
import Footer from "../components/7_lattes/7_Footer";

export default class Lattes extends Component {
  state = {};
  render() {
    return (
      <FontsMain>
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <Footer />
      </FontsMain>
    );
  }
}

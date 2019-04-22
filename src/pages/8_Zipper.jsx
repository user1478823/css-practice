import React, { Component } from "react";

import { FontsMain } from "./../components/zipper/global/Fonts";

import Header from "../components/zipper/0_Header";
import SectionOne from "../components/zipper/1_SectionOne";
import SectionTwo from "../components/lattes/2_SectionTwo";
import SectionThree from "../components/lattes/3_SectionThree";
import SectionFour from "../components/lattes/4_SectionFour";
import SectionFive from "../components/lattes/5_SectionFive";
import SectionSix from "../components/lattes/6_SectionSix";
import Footer from "../components/lattes/7_Footer";

export default class Lattes extends Component {
  state = {};
  render() {
    return (
      <FontsMain>
        <Header />
        <SectionOne />
      </FontsMain>
    );
  }
}

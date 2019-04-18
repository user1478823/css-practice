import React, { Component } from "react";

import { FontsMain } from "./../components/lattes/global/Fonts";

import Header from "../components/lattes/0_Header";
import SectionOne from "../components/lattes/1_SectionOne";
import SectionTwo from "../components/lattes/2_SectionTwo";
import SectionThree from "../components/lattes/3_SectionThree";
import SectionFour from "../components/lattes/4_SectionFour";
import Footer from "../components/startbootstrap/4_Footer";

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
      </FontsMain>
    );
  }
}

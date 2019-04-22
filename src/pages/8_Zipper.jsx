import React, { Component } from "react";

import { FontsMain } from "../components/8_zipper/global/Fonts";

import Header from "../components/8_zipper/0_Header";
import SectionOne from "../components/8_zipper/1_SectionOne";

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

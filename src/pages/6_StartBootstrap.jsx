import React, { Component } from "react";
import styled from "styled-components";

import { FontsMain } from "../components/6_startbootstrap/global/Fonts";

import Hamburger from "../components/6_startbootstrap/00_Hamburger";
import Header from "../components/6_startbootstrap/0_Header";
import SectionOne from "../components/6_startbootstrap/1_SectionOne";
import SectionTwo from "../components/6_startbootstrap/2_SectionTwo";
import SectionThree from "../components/6_startbootstrap/3_SectionThree";
import Footer from "../components/6_startbootstrap/4_Footer";

export default class StartBootstrap extends Component {
  state = {};
  render() {
    return (
      <FontsMain>
        <Hamburger />
        <OuterDiv>
          <InnerDiv className="trigger">
            <Header />
            <SectionOne />
            <SectionTwo />
          </InnerDiv>
        </OuterDiv>
        <SectionThree />
        <Footer />
      </FontsMain>
    );
  }
}

const OuterDiv = styled.div`
  background-color: #262626;
  .shazam {
    transform: rotate(-30deg);
  }
`;

const InnerDiv = styled.div`
  transform-origin: top left;
  transition: transform 0.7s cubic-bezier(1, 0.005, 0.24, 1);
`;

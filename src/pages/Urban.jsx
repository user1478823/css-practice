import React, { Component } from "react";
import styled from "styled-components";

import Header from "./../components/urban/0_Header";
import SectionOne from "./../components/urban/1_SectionOne";
import SectionTwo from "./../components/urban/2_SectionTwo";
import SectionThree from "./../components/urban/3_SectionThree";
import Footer from "./../components/urban/4_Footer";

class Urban extends Component {
  state = {};

  styles = {
    img: Img,
    title: Title,
    body: Body,
    btn: Button
  };

  render() {
    return (
      <React.Fragment>
        <Header />
          <SectionOne styles={this.styles} />
          <SectionTwo styles={this.styles} />
          <SectionThree styles={this.styles} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Urban;

export const Img = styled.img`
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  width: 50%;
  @media screen and (min-width: 576px) {
    width: 80%;
  }
`;

export const Title = styled.p`
  font-weight: 900;
  font-size: 1.2em;
  padding-top: 1.5em;
  @media screen and (min-width: 576px) {
    padding-top: 0;
  }
`;

export const Body = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  line-height: 1.5em;
  padding: 2.2em 0;
  color: #a5a5a5;
`;

export const Button = styled.button`
  width: 100px;
  padding: 0.7em;
  background-color: #3498db;
  color: white;
  border-radius: 3px;
  font-weight: 900;
  font-size: 0.8rem;
  &:hover {
    background-color: #003a58;
    color: #3498db;
    border-color: #003a58;
  }
`;

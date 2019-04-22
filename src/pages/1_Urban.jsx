import React, { Component } from "react";
import styled from "styled-components";

import Header from "../components/1_urban/0_Header";
import SectionOne from "../components/1_urban/1_SectionOne";
import SectionTwo from "../components/1_urban/2_SectionTwo";
import SectionThree from "../components/1_urban/3_SectionThree";
import Footer from "../components/1_urban/4_Footer";

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
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1280px) {
    width: 350px;
  }
  @media (min-width: 1680px) {
    width: 400px;
  }
`;

export const Title = styled.p`
  font-weight: 900;
  font-size: 1.2rem;
  @media (min-width: 576px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 1680px) {
    font-size: 1.8rem;
  }
`;

export const Body = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  line-height: 1.5em;
  padding: 2.2em 0;
  color: #a5a5a5;
  @media (min-width: 576px) {
    width: 100%;
    font-size: 1rem;
  }
  @media (min-width: 1680px) {
    width: 56.25em;
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  width: 6.25;
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
  @media (min-width: 576px) {
    width: 8rem;
    font-size: 1rem;
  }
  @media only screen and (min-width: 1680px) {
    font-size: 1.2rem;
  }
`;

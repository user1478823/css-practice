import React, { Component } from "react";
import styled from "styled-components";

import Form from "./2_Form";
import AboutMe from "./1_AboutMe";

class Footer extends Component {
  state = {};
  render() {
    return (
      <Section>
        <AboutMe style={{ gridArea: "AboutMe" }} />
        <Form style={{ gridArea: "Form" }} />
      </Section>
    );
  }
}

export default Footer;

const Section = styled.footer`
  background-color: #e5e5e5;
  @media (min-width: 1280px) {
    padding-right: 5em;
    display: grid;
    grid-gap: 5em;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "AboutMe Form";
`;

export const Title = styled.p`
  padding-bottom: 1em;
  color: #000;
  font-weight: 900;
  font-size: 1.6rem;
`;

import React, { Component } from "react";
import styled from "styled-components";

import Form from "./1_Form";
import FaFa from "./2_FaFa";

class Footer extends Component {
  state = {};
  render() {
    return (
      <Section>
        <div>
          <Form />
          <Hr />
          <FaFa />
        </div>
      </Section>
    );
  }
}

export default Footer;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e2832;
`;

const Hr = styled.hr`
  margin: 2em 2em;
  border: none; //remove default style
  border-bottom: 1px solid #a6a6bf; //apply style
`;

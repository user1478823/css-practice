import React, { Component } from "react";
import styled from "styled-components";

import Form from "./1_Form";
import FaFa from "./2_FaFa";

class Footer extends Component {
  state = {};
  render() {
    return (
      <section>
        <Form />
        <Hr />
        <FaFa />
      </section>
    );
  }
}

export default Footer;

const Hr = styled.hr`
  margin: 2em 0;
  border: none; //remove default style
  border-bottom: 1px solid #a6a6bf; //apply style
`;

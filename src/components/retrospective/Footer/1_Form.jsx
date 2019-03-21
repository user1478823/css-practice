import React from "react";
import styled from "styled-components";

import {
  TealBtnTemplate,
  WhiteBorderBtnTemplate
} from "./../global/Global.jsx";

export default () => (
  <React.Fragment>
    <Title>GET IN TOUCH</Title>
    <Form>
      <Name type="text" placeholder="Name" />
      <Email type="text" placeholder="Email" />
      <Message rows="7" placeholder="Message" />
      <TealButton>SUBMIT</TealButton>
      <WhiteBorderButton>RESET</WhiteBorderButton>
    </Form>
  </React.Fragment>
);

const Title = styled.p`
  @media (min-width: 980px) {
    margin: 2em 0 1.5em 0;
  }
  text-align: center;
  font-weight: 900;
  font-size: 2rem;
  color: #fff;
`;

const Form = styled.form`
  display: grid;
  width: 80vw;
  column-gap: 4em;
  grid-gap: 2em;
  grid-template-areas:
    "name name name name"
    "email email email email"
    "area area area   area"
    " submit submit reset reset ";
  @media (min-width: 980px) {
    width: 60em;
    display: grid;
    column-gap: 4em;
    grid-template-areas:
      "name name email email"
      "area area area   area"
      " submit submit reset reset ";
  }
  @media (min-width: 1280px) {
    width: 70em;
  }
  @media (min-width: 1680px) {
    width: 80em;
  }
`;

const InputTextArea = `
  font-size: 1rem;
  width: 100%;
  padding: 0.75em 0;
  background-color: #2f3440;
  border: 1px solid #2f3440;
  border-radius: 5px;
  text-indent: 10px;
  @media (min-width: 980px) {
    padding: 0.85em 0;
  }
  @media (min-width: 1680px) {
    font-size: 1.1rem;
    padding: 1em 0;
  }
`;

const Name = styled.input`
  grid-area: name;
  ${InputTextArea}
`;

const Email = styled.input`
  grid-area: email;
  ${InputTextArea}
`;

const Message = styled.textarea`
  grid-area: area;
  ${InputTextArea}
`;

const TealButton = styled.button`
  ${TealBtnTemplate}
  grid-area: submit;
  justify-self: right;
  width: 50%;
  height: 55px;
`;

const WhiteBorderButton = styled.button`
  ${WhiteBorderBtnTemplate}
  grid-area: reset,
  justify-self: left,
  width: 50%,
  height: 55px;
`;

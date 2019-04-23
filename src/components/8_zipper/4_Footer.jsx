import React from "react";
import styled from "styled-components";

import Image from "./../../assets/zipper/image-05.jpg";

import { PrimaryColor, BgColor } from "./global/Global.jsx";

export default () => (
  <Footer>
    <Content>
      <H3>Contact Us</H3>
      <form>
        <Input type="text" placeholder="Your Name" />
        <Input type="text" placeholder="Your Email" />
        <TextArea rows="6" placeholder="Message" />
        <Button>Submit</Button>
      </form>
    </Content>
  </Footer>
);

const Footer = styled.footer`
  position: relative;
  height: 700px;
  color: white;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Content = styled.div`
  position: absolute;
  height: 700px;
  width: 400px;
  padding: 0 2em 0 2em;
  background: ${BgColor};

  display: flex;
  flex-direction: column;
  justify-content: center;

  right: 0;
  @media (min-width: 1280px) {
    right: 10%;
  }
  @media (min-width: 1680px) {
    right: 20%;
  }
`;

const H3 = styled.h3`
  padding-bottom: 1.5em;
  color: ${PrimaryColor};
`;

const InputTextArea = `
  width: 100%;
  margin: 1em 0;
  color: white;
  font-size: 1.2rem;
  padding: 1em 0;
  background: rgba(0, 0, 0, 0.5);
  text-indent: 10px;
`;

const Input = styled.input`
  ${InputTextArea}
`;

const TextArea = styled.textarea`
  ${InputTextArea}
`;

const Button = styled.button`
  padding: 1em 1.5em;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0.8;
  color: white;
  font-size: 1.2rem;
  transition: 0.2s ease-in;
  &:hover {
    opacity: 1;
  }
`;

import React from "react";
import styled from "styled-components";

import { PrimaryColor } from "./global/Global.jsx";

export default () => (
  <Footer>
    <Content>
      <h2>GET IN TOUCH</h2>
      <P>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
        pariatur ut illum id ullam! Dolore impedit consequuntur assumenda
        temporibus blanditiis!
      </P>
      <form>
        <div>
          <Email type="text" placeholder="Your Email" />
          <Name type="text" placeholder="Your Name" />
        </div>
        <TextArea rows="6" placeholder="Message" />
        <Button>SEND MESSAGE</Button>
      </form>
    </Content>
  </Footer>
);

const Footer = styled.footer`
  text-align: center;
  padding: 4em 0;
  color: black;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 70%;
  @media (min-width: 980px) {
    width: 50%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const P = styled.p`
  padding-top: 1.5em;
  padding-bottom: 3em;
`;

const InputTextArea = `
  margin: 1em 0;
  color: black;
  padding: 1em 0;
  background: white;
  text-indent: 10px;
  border: 2px solid ${PrimaryColor};
`;

const Name = styled.input`
  width: 100%;
  ${InputTextArea}
  @media (min-width: 1280px) {
    float: left;
    width: 48%;
  }
`;

const Email = styled.input`
  width: 100%;
  ${InputTextArea}
  @media (min-width: 1280px) {
    float: right;
    width: 48%;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  ${InputTextArea}
`;

const Button = styled.button`
  padding: 1em 3em;
  color: white;
  background: #242424;
  transition: 0.3s ease-in;
  &:hover {
    color: #242424;
    background: ${PrimaryColor};
  }
`;

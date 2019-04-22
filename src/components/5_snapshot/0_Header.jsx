import React from "react";
import styled from "styled-components";

import { Header } from "../0_global/Global";
import Image from "./../../assets/snapshot/banner.jpg";

export default () => (
  <HeaderFixedBgAtt
    height="70vh"
    theme={{
      bg: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Image})`
    }}
  >
    <Title>Hey, I'm Snapshot</Title>
    <Body>A fully responsive gallery</Body>
    <Button>Continue</Button>
  </HeaderFixedBgAtt>
);

const HeaderFixedBgAtt = styled(Header)`
  background-attachment: fixed;
`;

const Title = styled.p`
  font-weight: 900;
  font-size: 2.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 1280px) {
    font-size: 4rem;
  }
`;

const Body = styled.p`
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.5em;
  padding: 0.5em 0 1.5em 0;
  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1280px) {
    font-size: 2rem;
  }
`;

const Button = styled.button`
  padding: 0.7em 2em;
  background-color: transparent;
  color: white;
  border-style: solid;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.1);
  font-weight: 900;
  font-size: 1.5rem;
  transition: 0.3s ease-in;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

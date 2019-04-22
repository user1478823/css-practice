import React from "react";
import styled from "styled-components";

import { Header } from "./../0_global/Global";
import Image from "./../../assets/retrospective/banner.jpg";

import { TealBtnTemplate } from "./global/Global.jsx";

export default () => (
  <Header
    heightMobile="100vh"
    theme={{
      bg: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Image})`
    }}
  >
    <Title>ETIAM ADIPISCING</Title>
    <Body>MAGNA FEUGIAT LOREM DOLOR EGESTAS</Body>
    <TealButton>LEARN MORE</TealButton>
  </Header>
);

const Container = styled.div`
  max-width: 960px;
  margin: auto;
  overflow: hidden;
  padding 0 3em;
`;

const Title = styled.p`
  font-weight: 900;
  font-size: 1.6rem;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 1280px) {
    font-size: 3rem;
  }
`;

const Body = styled.p`
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.5em;
  padding: 1.2em 0 1.5em 0;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TealButton = styled.button`
  ${TealBtnTemplate}
  padding: 1em 2em;
  font-size: 1rem;
`;

import React from "react";
import styled from "styled-components";

import Image from "./../../assets/retrospective/banner.jpg";

import { TealBtn } from "./global/Global.jsx";

export default () => (
  <Header>
    <div>
      <Title>ETIAM ADIPISCING</Title>
      <Body>MAGNA FEUGIAT LOREM DOLOR EGESTAS</Body>
      <TealBtn style={TealBtnStyle}>LEARN MORE</TealBtn>
    </div>
  </Header>
);

const Header = styled.header`
  text-align: center;
  height: 50vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  @media (min-width: 768px) {
    height: 100vh;
  }
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

const TealBtnStyle = {
  padding: "1em 2em",
  fontSize: "1rem"
};

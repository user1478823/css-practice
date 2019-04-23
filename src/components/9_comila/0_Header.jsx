import React from "react";
import styled from "styled-components";

import Image from "./../../assets/9_comila/slide-1.jpg";
import { Header } from "./../0_global/Global";

import { PrimaryColor } from "./global/Global.jsx";

export default () => (
  <Header
    heightMobile="100vh"
    theme={{
      bg: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Image})`
    }}
  >
    <h1>HELLO, WE ARE COMILA</h1>
    <h3
      style={{
        paddingTop: "1.5em",
        paddingBottom: "2.5em"
      }}
    >
      WE ARE ALMOST READY TO LAUNCH OUR NEW CREATIVE WEBSITE!
    </h3>
    <div>
      <TransparentButton>Let's begin</TransparentButton>
      <WhiteButton>Notify me!</WhiteButton>
    </div>
  </Header>
);

const TransparentButton = styled.button`
  margin-right: 1em;
  font-weight: 900;
  padding: 1em 2em;
  color: white;
  background-color: transparent;
  border: 3px solid white;
  transition: 0.3s ease-in;
  &:hover {
    background-color: ${PrimaryColor};
    border-color: ${PrimaryColor};
  }
`;

const WhiteButton = styled(TransparentButton)`
  margin-left: 1em;
  color: black;
  background-color: white;
  border: 3px solid white;
`;

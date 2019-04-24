import React from "react";
import styled from "styled-components";

import Image from "./../../assets/10_touche/intro-bg.jpg";
import { Header } from "./../0_global/Global";

import { PrimaryColor, PrimaryDark } from "./global/Global.jsx";

export default () => (
  <Header
    heightMobile="80vh"
    height="80vh"
    theme={{
      bg: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Image})`
    }}
  >
    <h1>Touché</h1>
    <h2
      style={{
        paddingTop: "0.2em",
        paddingBottom: "2em"
      }}
    >
      Restaurant / Coffee / Pub
    </h2>
    <div>
      <Button>DISCOVER OUR STORY</Button>
    </div>
  </Header>
);

const Button = styled.button`
  font-weight: 900;
  padding: 1em 2em;
  color: white;
  background: ${PrimaryColor};
  transition: 0.3s ease-in;
  opacity: 1;
  &:hover {
    background: ${PrimaryDark};
  }
`;

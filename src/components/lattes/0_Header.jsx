import React from "react";
import styled from "styled-components";

import Image from "./../../assets/lattes/bg-main.jpg";
import { Header } from "./../0_global/Global";

import { PrimaryColor } from "./global/Global.jsx";

export default () => (
  <Header
    height="80vh"
    bgPosition="top"
    theme={{
      bg: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Image})`
    }}
  >
    <h2>Welcome To Our Studio!</h2>
    <h1
      style={{
        paddingTop: "0.3em",
        paddingBottom: "0.5em"
      }}
    >
      IT'S NICE TO MEET YOU
    </h1>
    <Button>TELL ME MORE</Button>
  </Header>
);

const Button = styled.button`
  font-weight: 900;
  padding: 1.5em 2em;
  color: white;
  background-color: ${PrimaryColor};
`;

import React from "react";
import styled from "styled-components";

import Image from "./../../assets/lattes/bg-main.jpg";

import { PrimaryColor } from "./global/Global.jsx";

export default () => (
  <Header>
    <Content>
      <h2>Welcome To Our Studio!</h2>
      <h1>IT'S NICE TO MEET YOU</h1>
      <Button>TELL ME MORE</Button>
    </Content>
  </Header>
);

const Header = styled.header`
  text-align: center;
  height: 50vh;
  color: white;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    padding-top: 0.3em;
    padding-bottom: 0.5em;
  }

  @media (min-width: 768px) {
    height: 80vh;
  }
`;

const Content = styled.div`
  @media (min-width: 576px) {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 768px) {
    width: 600px;
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
  @media (min-width: 1680px) {
    width: 1000px;
  }
`;

const Button = styled.button`
  font-weight: 900;
  padding: 1.5em 2em;
  color: white;
  background-color: ${PrimaryColor};
`;

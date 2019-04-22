import React from "react";
import styled from "styled-components";

import Image from "./../../assets/startbootstrap/header.jpg";

import { PrimaryColor, Button, Hr } from "./global/Global.jsx";

export default () => (
  <Header>
    <Content>
      <h1>YOUR FAVORITE SOURCE OF FREE BOOTSTRAP THEMES</h1>
      <Hr
        style={{ backgroundColor: PrimaryColor, borderColor: PrimaryColor }}
      />
      <h3>
        Start Bootstrap can help you build better websites using the Bootstrap
        CSS framework! Just download your template and start going, no strings
        attached!
      </h3>
      <Button
        style={{
          backgroundColor: PrimaryColor,
          color: "white",
          borderColor: PrimaryColor
        }}
      >
        FIND OUT MORE
      </Button>
    </Content>
  </Header>
);

const Header = styled.header`
  padding-top: 7em;
  padding-bottom: 4em;
  padding-right: 1em;
  padding-left: 1em;
  text-align: center;
  height: 50vh;
  color: white;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    height: 100vh;
    padding: 0;
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

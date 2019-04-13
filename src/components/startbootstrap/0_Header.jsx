import React from "react";
import styled from "styled-components";

import Image from "./../../assets/startbootstrap/header.jpg";

import { PrimaryColor, Button, Hr } from "./global/Global.jsx";

export default () => (
  <Header>
    <Content>
      <Title>YOUR FAVORITE SOURCE OF FREE BOOTSTRAP THEMES</Title>
      <Hr
        style={{ backgroundColor: PrimaryColor, borderColor: PrimaryColor }}
      />
      <Body>
        Start Bootstrap can help you build better websites using the Bootstrap
        CSS framework! Just download your template and start going, no strings
        attached!
      </Body>
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

const Title = styled.p`
  padding: 0 1em;
  font-weight: 900;
  font-size: 2rem;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1280px) {
    font-size: 3rem;
  }
  @media (min-width: 1680px) {
    font-size: 3.2rem;
  }
`;

const Body = styled.p`
  font-weight: 300;
  font-size: 1.12rem;
  line-height: 1.5em;
  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: 2em;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1280px) {
    font-size: 1.4rem;
  }
  @media (min-width: 1680px) {
    font-size: 1.6rem;
  }
`;

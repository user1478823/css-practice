import React from "react";
import styled from "styled-components";

import Image from "./../../assets/zipper/image-01.jpg";

import { PrimaryColor } from "./global/Global.jsx";

export default () => (
  <Header>
    <Content>
      <h1>ZIPPER</h1>
      <h2>best destination to explore...</h2>
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

  h1 {
    padding-top: 0.3em;
    padding-bottom: 0.5em;
  }

  @media (min-width: 768px) {
    height: 70vh;
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

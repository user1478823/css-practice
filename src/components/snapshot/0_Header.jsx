import React from "react";
import styled from "styled-components";

import Image from "./../../assets/snapshot/banner.jpg";

export default () => (
  <Header>
    <div>
      <Title>Hey, I'm Snapshot</Title>
      <Body>A fully responsive gallery</Body>
      <Button>Continue</Button>
    </div>
  </Header>
);

const Header = styled.header`
  text-align: center;
  height: 70vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
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
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

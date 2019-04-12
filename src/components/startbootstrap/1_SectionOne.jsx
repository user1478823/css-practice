import React from "react";
import styled from "styled-components";

import { PrimaryColor, WhiteButton } from "./global/Global.jsx";

export default () => (
  <Section>
    <Content>
      <Title>We've got what you need!</Title>
      <Hr />
      <Body>
        Start Bootstrap has everything you need to get your new website up and
        running in no time! All of the templates and themes on Start Bootstrap
        are open source, free to download, and easy to use. No strings attached
      </Body>
      <WhiteButton>GET STARTED!</WhiteButton>
    </Content>
  </Section>
);

const Section = styled.section`
  text-align: center;
  height: 50vh;
  background-color: ${PrimaryColor};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
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
    width: 900px;
  }
`;

const Title = styled.p`
  font-weight: 900;
  font-size: 2rem;
  @media screen and (min-width: 768px) {
    font-size: 2.1rem;
  }
  @media (min-width: 1280px) {
    font-size: 2.3rem;
  }
  @media (min-width: 1680px) {
    font-size: 2.4rem;
  }
`;

const Hr = styled.hr`
  width: 10%;
  height: 2px;
  background-color: white;
  margin-left: 45% !important;
  margin-right: 45% !important;
  margin-top: 2em;
  margin-bottom: 2em;
  border: none; //remove default style
  border-bottom: 1px solid white; //apply style
`;

const Body = styled.p`
  font-weight: 300;
  font-size: 1.12rem;
  line-height: 1.5em;
  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: 2em;
  @media screen and (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1680px) {
    font-size: 1.3rem;
  }
`;

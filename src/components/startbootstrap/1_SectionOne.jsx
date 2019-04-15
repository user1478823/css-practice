import React from "react";
import styled from "styled-components";

import { PrimaryColor, Title, Hr, Button } from "./global/Global.jsx";

export default () => (
  <Section className="test">
    <Title>We've got what you need!</Title>
    <Hr style={{ backgroundColor: "white", borderColor: "white" }} />
    <Body>
      Start Bootstrap has everything you need to get your new website up and
      running in no time! All of the templates and themes on Start Bootstrap are
      open source, free to download, and easy to use. No strings attached
    </Body>
    <Button
      style={{
        backgroundColor: "white",
        color: "black",
        borderColor: "white"
      }}
    >
      GET STARTED!
    </Button>
  </Section>
);

const Section = styled.section`
  text-align: center;
  padding: 4em 1em;
  color: white;
  background-color: ${PrimaryColor};

  display: grid;
  justify-content: center;

  * {
    justify-self: center;
  }

  @media (min-width: 576px) {
    grid-template-columns: 500px;
  }
  @media (min-width: 768px) {
    grid-template-columns: 600px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: 800px;
  }
  @media (min-width: 1680px) {
    grid-template-columns: 900px;
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
  }
  @media (min-width: 1280px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1680px) {
    font-size: 1.3rem;
  }
`;

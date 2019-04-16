import React from "react";
import styled from "styled-components";

import { PrimaryColor, Title, Hr, Button } from "./global/Global.jsx";

export default () => (
  <Section>
    <h2>We've got what you need!</h2>
    <Hr style={{ backgroundColor: "white", borderColor: "white" }} />
    <h4>
      Start Bootstrap has everything you need to get your new website up and
      running in no time! All of the templates and themes on Start Bootstrap are
      open source, free to download, and easy to use. No strings attached
    </h4>
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
  padding: 4em 2em;
  color: white;
  background-color: ${PrimaryColor};

  display: grid;
  justify-content: center;

  * {
    justify-self: center;
  }

  @media (min-width: 576px) {
    grid-template-columns: 550px;
  }
  @media (min-width: 768px) {
    grid-template-columns: 750px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: 800px;
  }
  @media (min-width: 1680px) {
    grid-template-columns: 900px;
  }
`;

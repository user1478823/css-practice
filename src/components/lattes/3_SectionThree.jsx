import React from "react";
import styled from "styled-components";

import clients from "./../../assets/lattes/office-bg.jpg";

export default () => (
  <Section>
    <h1 style={{ gridArea: "awards-title" }}>59</h1>
    <h3 style={{ gridArea: "awards-txt" }}>Awards</h3>
    <h1 style={{ gridArea: "clients-title" }}>1054</h1>
    <h3 style={{ gridArea: "clients-txt" }}>Clients</h3>
    <h1 style={{ gridArea: "teams-title" }}>34</h1>
    <h3 style={{ gridArea: "teams-txt" }}>Teams</h3>
    <h1 style={{ gridArea: "projects-title" }}>154</h1>
    <h3 style={{ gridArea: "projects-txt" }}>Projects</h3>
  </Section>
);

const Section = styled.section`
  text-align: center;
  padding: 4em 0;
  color: white;

  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${clients});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  display: grid;
  justify-content: center;
  grid-gap: 0.5em;
  grid-template-columns: repeat(4, 100px);
  grid-template-areas:
    "awards           awards          clients         clients"
    "awards-title     awards-title    clients-title   clients-title"
    "awards-txt       awards-txt      clients-txt     clients-txt"
    "teams         teams        projects        projects"
    "teams-title   teams-title  projects-title  projects-title"
    "teams-txt     teams-txt    projects-txt    projects-txt";

  h1 {
    font-weight: 300;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 125px);
  }
  @media (min-width: 980px) {
    grid-template-columns: repeat(4, 150px);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 250px);
    grid-template-areas:
      "awards           clients        teams        projects"
      "awards-title     clients-title  teams-title  projects-title"
      "awards-txt       clients-txt    teams-txt    projects-txt";
  }
  @media (min-width: 1680px) {
    grid-template-columns: repeat(4, 300px);
  }
`;

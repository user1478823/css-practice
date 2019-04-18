import React from "react";
import styled from "styled-components";

import Image01 from "./../../assets/lattes/portfolio-2.jpg";
import Image02 from "./../../assets/lattes/portfolio-1.jpg";
import Image03 from "./../../assets/lattes/portfolio-5.jpg";
import Image04 from "./../../assets/lattes/portfolio-4.jpg";
import Image05 from "./../../assets/lattes/portfolio-3.jpg";
import Image06 from "./../../assets/lattes/portfolio-2.jpg";

export default () => (
  <Section>
    <H2 style={{ gridArea: "title" }}>PORTFOLIO</H2>
    <P style={{ gridArea: "body" }}>
      Our portfolio is the best way to show our work, you can see here a big
      range of our work. Check them all and you will find what you are looking
      for.
    </P>
    <Img src={Image01} style={{ gridArea: "img01" }} alt="" />
    <Img src={Image02} style={{ gridArea: "img02" }} alt="" />
    <Img src={Image03} style={{ gridArea: "img03" }} alt="" />
    <Img src={Image04} style={{ gridArea: "img04" }} alt="" />
    <Img src={Image05} style={{ gridArea: "img05" }} alt="" />
    <Img src={Image06} style={{ gridArea: "img06" }} alt="" />
  </Section>
);

const Section = styled.section`
  text-align: center;
  padding: 4em 0;
  color: black;
  background-color: #f8f8f8;

  display: grid;
  justify-content: center;
  grid-gap: 2em;
  grid-template-columns: 400px;
  grid-template-areas:
    "title"
    "body"
    "img01"
    "img02"
    "img03"
    "img04"
    "img05"
    "img06";

  * {
    justify-self: center;
  }

  @media (min-width: 576px) {
    grid-template-columns: 500px;
  }
  @media (min-width: 768px) {
    grid-column-gap: 2em;
    grid-template-columns: repeat(3, 220px);
    grid-template-areas:
      "title    title   title"
      "body     body    body"
      "img01    img02   img03"
      "img04    img05   img06";
  }
  @media (min-width: 980px) {
    grid-column-gap: 3em;
    grid-template-columns: repeat(3, 280px);
  }
  @media (min-width: 1280px) {
    grid-gap: 3em;
    grid-column-gap: 5em;
    grid-template-columns: repeat(3, 300px);
  }
  @media (min-width: 1680px) {
    grid-template-columns: repeat(3, 350px);
  }
`;

const H2 = styled.h2`
  font-family: "Rubik", sans-serif !important;
`;

const P = styled.p`
  padding-bottom: 2em;
  @media (min-width: 980px) {
    width: 80%;
  }
  @media (min-width: 1280px) {
    width: 60%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

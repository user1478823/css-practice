import React from "react";
import styled from "styled-components";

import Image01 from "./../../assets/lattes/partners-1.png";
import Image02 from "./../../assets/lattes/partners-2.png";
import Image03 from "./../../assets/lattes/partners-3.png";
import Image04 from "./../../assets/lattes/partners-4.png";
import Image05 from "./../../assets/lattes/partners-5.png";
import Image06 from "./../../assets/lattes/partners-6.png";
import Image07 from "./../../assets/lattes/partners-7.png";

export default () => (
  <Section>
    <H2 style={{ gridArea: "title" }}>OUR PARTNERS</H2>
    <P style={{ gridArea: "body" }}>
      Mida sit una namet, cons uectetur adipiscing adon elit.
    </P>
    <Img src={Image01} style={{ gridArea: "img01" }} alt="" />
    <Img src={Image02} style={{ gridArea: "img02" }} alt="" />
    <Img src={Image03} style={{ gridArea: "img03" }} alt="" />
    <Img src={Image04} style={{ gridArea: "img04" }} alt="" />
    <Img src={Image05} style={{ gridArea: "img05" }} alt="" />
    <Img src={Image06} style={{ gridArea: "img06" }} alt="" />
    <Img src={Image07} style={{ gridArea: "img07" }} alt="" />
  </Section>
);

const Section = styled.section`
  text-align: center;
  padding: 4em 0;
  color: black;

  display: grid;
  grid-gap: 1em;
  grid-column-gap: 1em;
  justify-content: center;

  * {
    justify-self: center;
  }
  
  grid-template-columns: repeat(7, 30px);
  grid-template-areas:
    "title    title    title    title    title    title    title"
    "body     body     body     body     body     body     body"
    "img01    img02    img03    img04    img05    img06    img07";
  @media (min-width: 576px) {
    grid-template-columns: repeat(7, 50px);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(7, 70px);
  }
  @media (min-width: 980px) {
    grid-column-gap: 2em;
    grid-template-columns: repeat(7, 80px);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(7, 90px);
  }
  @media (min-width: 1680px) {
    grid-template-columns: repeat(7, 100px);
    grid-column-gap: 2em;
  }
`;

const H2 = styled.h2`
  font-family: "Rubik", sans-serif !important;
`;

const P = styled.p`
  padding-top: 1em;
  padding-bottom: 2em;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

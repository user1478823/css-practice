import React from "react";
import styled from "styled-components";

import Image01 from "./../../assets/hielo/pic01.jpg";
import Image02 from "./../../assets/hielo/pic02.jpg";
import Image03 from "./../../assets/hielo/pic03.jpg";
import Image04 from "./../../assets/hielo/pic04.jpg";

export default () => (
  <Section>
    <div style={{ gridArea: "title" }}>
      <AboveTitle>
        NAM VEL ANTE SIT AMET LIBERO SCELERISQUE FACILISIS ELEIFEND VITAE URNA
      </AboveTitle>
      <Hr />
      <Title>Morbi maximus justo</Title>
    </div>
    <Img src={Image01} style={{ gridArea: "img01" }} alt="" />
    <Img src={Image02} style={{ gridArea: "img02" }} alt="" />
    <Img src={Image03} style={{ gridArea: "img03" }} alt="" />
    <Img src={Image04} style={{ gridArea: "img04" }} alt="" />
  </Section>
);

const Section = styled.section`
  padding: 4em 2em 4em 2em;
  background-color: #ededed;
  display: grid;
  grid-gap: 1em;
  justify-content: center;
  grid-template-areas:
    "title"
    "img01"
    "img02"
    "img03"
    "img04";
  @media (min-width: 768px) {
    padding: 4em;
    grid-gap: 3em;
  }
  @media (min-width: 980px) {
    grid-gap: 5em;
    grid-template-areas:
      "title title"
      "img01 img02"
      "img03 img04";
  }
  @media (min-width: 1680px) {
    grid-gap: 6em;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  background-color: white;
  padding: 0.5em;
  @media (min-width: 768px) {
    padding: 0.8em;
  }
  @media (min-width: 1280px) {
    padding: 1em;
  }
`;

const AboveTitle = styled.p`
  text-align: center;
  letter-spacing: 0.2em;
  color: #a6a6a6;
  font-weight: 300;
  font-size: 0.7rem;
  line-height: 1.5em;
  padding: 1em 2em 0.8em 2em;
  @media (min-width: 768px) {
    font-size: 0.8em;
  }
  @media (min-width: 1280px) {
    font-size: 0.9rem;
  }
  @media (min-width: 1680px) {
    font-size: 1rem;
  }
`;

const Hr = styled.hr`
  width: 50%;
  margin-left: 25% !important;
  margin-right: 25% !important;
  border: none; //remove default style
  border-bottom: 1px solid #a6a6a6; //apply style
`;

const Title = styled.p`
  text-align: center;
  color: #555;
  font-size: 1.6rem;
  padding: 0.5em 2em 0.8em 1.5em;
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1280px) {
    font-size: 2rem;
  }
  @media (min-width: 1680px) {
    font-size: 2.2rem;
  }
`;

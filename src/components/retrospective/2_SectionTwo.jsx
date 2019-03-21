import React from "react";
import styled from "styled-components";

import Image01 from "./../../assets/retrospective/pic03.jpg";
import Image02 from "./../../assets/retrospective/pic04.jpg";
import Image03 from "./../../assets/retrospective/pic05.jpg";
import Image04 from "./../../assets/retrospective/pic06.jpg";
import Image05 from "./../../assets/retrospective/pic07.jpg";
import Image06 from "./../../assets/retrospective/pic08.jpg";
import Image07 from "./../../assets/retrospective/pic09.jpg";
import Image08 from "./../../assets/retrospective/pic10.jpg";

import { TealBorderBtnTemplate } from "./global/Global.jsx";

export default () => (
  <Section>
    <Content>
      <Title>ALIQUAM BLANDIT MAURIS</Title>
      <Body>
        EUM EX EMPUS COMMODO TURPIS ADIPISCING TEMPOR PLACERAT SED AMET
      </Body>
      <Img src={Image01} style={{ gridArea: "img01" }} alt="" />
      <Img src={Image02} style={{ gridArea: "img02" }} alt="" />
      <Img src={Image03} style={{ gridArea: "img03" }} alt="" />
      <Img src={Image04} style={{ gridArea: "img04" }} alt="" />
      <Img src={Image05} style={{ gridArea: "img05" }} alt="" />
      <Img src={Image06} style={{ gridArea: "img06" }} alt="" />
      <Img src={Image07} style={{ gridArea: "img07" }} alt="" />
      <Img src={Image08} style={{ gridArea: "img08" }} alt="" />
      <TealBorderButton>TEMPUS ALIQUAM</TealBorderButton>
    </Content>
  </Section>
);

const Section = styled.section`
  text-align: center;
  padding: 2em 0 2em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Content = styled.div`
  margin: 1em;
  display: grid;
  align-items: stretch;
  align-content: center;	
  grid-template-areas:
    "title title"
    "body  body"
    "img01 img02"
    "img03 img04"
    "img05 img06"
    "img07 img08"
    "btn   btn"
    ;
  @media (min-width: 576px) {
    margin 2em;
  }
  @media (min-width: 768px) {
    width: 700px;
    margin: 0;
  }
  @media (min-width: 980px) {
    width: 900px;
    grid-template-areas:
      "title title title title"
      "body  body  body  body"
      "img01 img02 img03 img04"
      "img05 img06 img07 img08"
      "btn   btn   btn   btn"
      ;
      button {
        width: 30%;
      }
  }
  @media (min-width: 1280px) {
    width: 1200px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.p`
  grid-area: title;
  color: #555;
  font-weight: 900;
  font-size: 1.5rem;
  padding: 1em 2em 0 1.5em;
  @media (min-width: 768px) {
    font-size 2rem;
  }
  @media (min-width: 980px) {
    font-size 2.2rem;
  }
  @media (min-width: 1680px) {
    font-size 2.5rem;
  }
`;

const Body = styled.p`
  margin-bottom: 1.5em;
  grid-area: body;
  color: #838383;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.5em;
  padding: 1em 2em 0.8em 2em;
  @media (min-width: 768px) {
    font-size 1.2rem;
  }
  @media (min-width: 1680px) {
    font-size 1.5rem;
  }
`;

const TealBorderButton = styled.button`
  ${TealBorderBtnTemplate}
  grid-area: btn;
  margin-top: 3em;
  justify-self: center;
  width: 50%;
  height: 55px;
`;

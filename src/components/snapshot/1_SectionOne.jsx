import React from "react";
import styled from "styled-components";

import Image01 from "./../../assets/snapshot/thumbs/11.jpg";
import Image02 from "./../../assets/snapshot/thumbs/12.jpg";
import Image03 from "./../../assets/snapshot/thumbs/05.jpg";
import Image04 from "./../../assets/snapshot/thumbs/06.jpg";
import Image05 from "./../../assets/snapshot/thumbs/07.jpg";
import Image06 from "./../../assets/snapshot/thumbs/08.jpg";
import Image07 from "./../../assets/snapshot/thumbs/09.jpg";
import Image08 from "./../../assets/snapshot/thumbs/10.jpg";

export default () => (
  <Section>
    <Content>
      <Title>What's New</Title>
      <Img src={Image01} style={{ gridArea: "img01" }} alt="" />
      <Img src={Image02} style={{ gridArea: "img02" }} alt="" />
      <Img src={Image03} style={{ gridArea: "img03" }} alt="" />
      <Img src={Image04} style={{ gridArea: "img04" }} alt="" />
      <Img src={Image05} style={{ gridArea: "img05" }} alt="" />
      <Img src={Image06} style={{ gridArea: "img06" }} alt="" />
      <Img src={Image07} style={{ gridArea: "img07" }} alt="" />
      <Img src={Image08} style={{ gridArea: "img08" }} alt="" />
      <Button>Full Gallery</Button>
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
  width: 90%;
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
    "btn   btn";
  @media (min-width: 768px) {
    grid-template-areas:
      "title title title title"
      "body  body  body  body"
      "img01 img02 img03 img04"
      "img05 img06 img07 img08"
      "btn   btn   btn   btn";
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;

const Title = styled.p`
  justify-self: left;
  grid-area: title;
  color: #555;
  font-weight: 900;
  font-size: 2rem;
  padding-top: 1em;
  padding-bottom: 1em;
  @media (min-width: 768px) {
    justify-self: center;
  }
  @media (min-width: 980px) {
    font-size 2.2rem;
  }
  @media (min-width: 1680px) {
    font-size 2.5rem;
  }
`;

const Button = styled.button`
  margin-top: 2em;
  justify-self: center;
  grid-area: btn;
  padding: 0.7em 1em;
  background-color: #19b5fe;
  color: white;
  font-weight: 900;
  font-size: 1.2rem;
  transition: 0.3s ease-in;
  &:hover {
    background-color: #3f9dff;
  }
  @media (min-width: 576px) {
    padding: 0.7em 1.5em;
    font-size: 1.3rem;
  }
  @media (min-width: 1280px) {
    padding: 0.7em 2em;
    font-size: 1.5rem;
  }
`;

import React from "react";
import styled from "styled-components";

import Image01 from "./../../assets/startbootstrap/portfolio/thumbnails/1.jpg";
import Image02 from "./../../assets/startbootstrap/portfolio/thumbnails/2.jpg";
import Image03 from "./../../assets/startbootstrap/portfolio/thumbnails/3.jpg";
import Image04 from "./../../assets/startbootstrap/portfolio/thumbnails/4.jpg";
import Image05 from "./../../assets/startbootstrap/portfolio/thumbnails/5.jpg";
import Image06 from "./../../assets/startbootstrap/portfolio/thumbnails/6.jpg";

import { Button } from "./global/Global.jsx";

export default () => (
  <Section>
    <Img src={Image01} style={{ gridArea: "img01" }} alt="" />
    <Img src={Image02} style={{ gridArea: "img02" }} alt="" />
    <Img src={Image03} style={{ gridArea: "img03" }} alt="" />
    <Img src={Image04} style={{ gridArea: "img04" }} alt="" />
    <Img src={Image05} style={{ gridArea: "img05" }} alt="" />
    <Img src={Image06} style={{ gridArea: "img06" }} alt="" />
    <Title>Free Download at Start Bootstrap!</Title>
    <Button
      style={{
        marginBottom: "4em",
        backgroundColor: "white",
        color: "black",
        borderColor: "white",
        gridArea: "button"
      }}
    >
      DOWNLOAD NOW!
    </Button>
  </Section>
);

const Section = styled.section`
  text-align: center;
  color: white;
  background-color: #222222;

  display: grid;

  * {
    justify-self: center;
  }

  grid-template-areas:
    "img01"
    "img02"
    "img03"
    "img04"
    "img05"
    "img06"
    "title"
    "button";

  @media (min-width: 768px) {
    display: grid;

    grid-template-areas:
      "img01  img02"
      "img03  img04"
      "img05  img06"
      "title  title"
      "button button";
  }
  @media (min-width: 1280px) {
    grid-template-areas:
      "img01  img02  img03"
      "img04  img05  img06"
      "title  title  title"
      "button button button";
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s;
  &:hover {
  }
`;

const Title = styled.p`
  padding-top: 1.5em;
  padding-bottom: 1em;
  padding-left: 1em;
  padding-right: 1em;
  grid-area: title;
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

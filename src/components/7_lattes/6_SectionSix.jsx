import React from "react";
import styled from "styled-components";

import Image01 from "./../../assets/lattes/author-1.jpg";
import Image02 from "./../../assets/lattes/author-4.jpg";
import Image03 from "./../../assets/lattes/author-2.jpg";
import Image04 from "./../../assets/lattes/author-3.jpg";

import { BgColor } from "./global/Global.jsx";

export default () => (
  <Section>
    <H2 style={{ gridArea: "title" }}>OUR TEAM</H2>
    <P style={{ gridArea: "body" }}>
      A creative agency based on Candy Land, ready to boost your business with
      some beautifull templates. Lattes Agency is one of the best in town see
      more you will be amazed.
    </P>
    <Img src={Image01} style={{ gridArea: "img01" }} alt="" />
    <div
      style={{
        gridArea: "author01",
        backgroundColor: "white",
        padding: "1em"
      }}
    >
      <h3>Tom Bekers</h3>
      <p>Sydney, Australia</p>
      <Occupation>– CEO & Web Design –</Occupation>
      <p>
        Mida sit una namet, cons uectetur adipiscing adon elit. Aliquam vitae
        barasa droma.
      </p>
    </div>
    <Img src={Image02} style={{ gridArea: "img02" }} alt="" />
    <div
      style={{
        gridArea: "author02",
        backgroundColor: "white",
        padding: "1em"
      }}
    >
      <h3>Lina Gosata</h3>
      <p>Los Angeles, California</p>
      <Occupation>– Photography –</Occupation>
      <p>
        Worsa dona namet, cons uectetur dipiscing adon elit. Aliquam vitae
        fringilla unda mir.
      </p>
    </div>
    <Img src={Image03} style={{ gridArea: "img03" }} alt="" />
    <div
      style={{
        gridArea: "author03",
        backgroundColor: "white",
        padding: "1em"
      }}
    >
      <h3>Larry Parker</h3>
      <p>Barcelona, Spain</p>
      <Occupation>– Development –</Occupation>
      <p>
        Aradan bes namet, cons uectetur moiscing adon elit. Aliquam vitae
        fringilla unda augue.
      </p>
    </div>
    <Img src={Image04} style={{ gridArea: "img04" }} alt="" />
    <div
      style={{
        gridArea: "author04",
        backgroundColor: "white",
        padding: "1em"
      }}
    >
      <h3>John Smith</h3>
      <p>Miami, Floria</p>
      <Occupation>– Marketing –</Occupation>
      <p>
        Dolor sit don namet, cons uectetur beriscing adon elit. Aliquam vitae
        fringilla unda.
      </p>
    </div>
  </Section>
);

const Section = styled.section`
  text-align: center;
  padding: 4em 0;
  color: black;
  background-color: ${BgColor};

  display: grid;
  grid-column-gap: 1em;
  justify-content: center;
  grid-template-columns: repeat(4, 100px);
  grid-template-areas:
    "title          title        title         title"
    "body           body         body          body"
    "img01          img01        img02         img02"
    "author01       author01     author02      author02"
    "img03          img03        img04         img04"
    "author03       author03     author04      author04";

  * {
    justify-self: center;
  }

  @media (min-width: 576px) {
    grid-column-gap: 2em;
    grid-template-columns: repeat(4, 120px);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 150px);
  }
  @media (min-width: 980px) {
    grid-column-gap: 3em;
  }
  @media (min-width: 1280px) {
    grid-column-gap: 4em;
    grid-template-columns: repeat(4, 250px);
    grid-template-areas:
      "title          title        title         title"
      "body           body         body          body"
      "img01          img02        img03         img04"
      "author01       author02     author03      author04";
  }
  @media (min-width: 1680px) {
    grid-column-gap: 5em;
    grid-template-columns: repeat(4, 300px);
  }
`;

const H2 = styled.h2`
  font-family: "Rubik", sans-serif !important;
`;

const P = styled.p`
  @media (min-width: 980px) {
    width: 80%;
  }
  @media (min-width: 1280px) {
    width: 60%;
  }
  padding-top: 2em;
  padding-bottom: 1em;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  padding-top: 2em;
`;

const Occupation = styled.p`
  margin: 0.5em 0;
  color: black !important;
`;

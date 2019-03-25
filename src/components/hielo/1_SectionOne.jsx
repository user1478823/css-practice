import React from "react";
import styled from "styled-components";

import Image01 from "./../../assets/hielo/pic02.jpg";
import Image02 from "./../../assets/hielo/pic03.jpg";

export default () => (
  <Section>
    {Comp(true, "left")}
    {Comp(false, "right")}
  </Section>
);

const Comp = (showComponent01, gridArea) => {
  return (
    <Content gridArea={gridArea}>
      {showComponent01 ? (
        <Img src={Image01} alt="" />
      ) : (
        <Img src={Image02} alt="" />
      )}
      <AboveTitle>
        {showComponent01
          ? "MAECENAS SAPIEN FEUGIAT EX PURUS"
          : "MATTIS ELEMENTUM SAPIEN PRETIUM TELLUS"}
      </AboveTitle>
      <Hr />
      <Title>
        {showComponent01 ? "Lorem ipsum dolor" : "Vestibulum sit amet"}
      </Title>
      <Body>
        {showComponent01
          ? "Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada."
          : "Ratione reiciendis, inventore laborum a vitae et asperiores eaque commodi fugit temporibus. Voluptates, repudiandae excepturi. Porro similique nam nihil rerum eius distinctio consectetur impedit."}
      </Body>
      <Button>LEARN MORE</Button>
    </Content>
  );
};

const Section = styled.section`
  padding: 2em 0 2em 0;
  display: grid;
  grid-gap: 2em;
  justify-content: center;
  grid-template-areas:
    "left"
    "right";
  @media (max-width: 768px) {
    padding: 2em;
    grid-gap: 2.5em;
  }
  @media (min-width: 768px) and (max-width: 980px) {
    padding: 4em;
    grid-gap: 3em;
  }
  @media (min-width: 980px) {
    grid-gap: 3.5em;
    grid-template-areas: "left right";
  }
  @media (min-width: 1680px) {
    grid-gap: 5em;
  }
  background-color: #ededed;
`;

const Content = styled.div`
  text-align: center;
  background-color: #fafafa;
  grid-area: ${props => props.gridArea};
  @media (min-width: 980px) {
    width: 27em;
  }
  @media (min-width: 1100px) {
    width: 30em;
  }
  @media (min-width: 1280px) {
    width: 35em;
  }
  @media (min-width: 1680px) {
    width: 40em;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

const AboveTitle = styled.p`
  color: #a6a6a6;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5em;
  padding: 1em 2em 0.8em 2em;
  @media (min-width: 768px) {
    padding-top: 2em;
  }
`;

const Hr = styled.hr`
  width: 40%;
  margin-left: 30% !important;
  margin-right: 30% !important;
  border: none; //remove default style
  border-bottom: 1px solid #a6a6a6; //apply style
`;

const Title = styled.p`
  color: #555;
  font-weight: 900;
  font-size: 1.6rem;
  padding: 0.5em 2em 0.8em 1.5em;
  @media (min-width: 1280px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1280px) {
    font-size: 2rem;
  }
`;

const Body = styled.p`
  text-align: start;
  color: #a6a6a6;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.5em;
  padding: 1em 2em 0.8em 2em;
`;

const Button = styled.button`
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  border-color: #d9d9d9;
  color: #000;
  background-color: transparent;
  grid-area: button;
  height: 45px;
  width: 125px;
  margin-top: 1.5em;
  margin-bottom: 2em;
  @media (min-width: 980px) {
    width: 130px;
  }
  @media (min-width: 1280px) {
    width: 140px;
  }
  @media (min-width: 1680px) {
    width: 150px;
  }
`;

import React, { Component } from "react";
import styled from "styled-components";

import Image01 from "./../../assets/retrospective/pic01.jpg";
import Image02 from "./../../assets/retrospective/pic02.jpg";

import { TealBorderBtn } from "./global/Global";

export default class SectionOne extends Component {
  state = {};
  render() {
    return (
      <Section>
        <div>
          {Comp(true, GridAreaImgLeft)}
          {Comp(false, GridAreaImgRight)}
        </div>
      </Section>
    );
  }
}

const Comp = (showComponent01, gridArea) => {
  return (
    <Content gridArea={gridArea}>
      {showComponent01 
      ? <Img src={Image01} alt="" />
      : <Img src={Image02} alt="" />}
      <Title>
        {showComponent01
          ? "INTEGER VITAE LIBERO ACRISUS EGESTAS PLACERAT SOLLICITUDIN"
          : "AT NAM ACCOMMODARE INTELLE VIS NONUMY TRITANI"}
      </Title>
      <Body>
        {showComponent01
          ? "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est"
          : "Mei ea accusam molestie, sonet ubique detracto ea qui. Corpora comnesque interesset eu sea. Eum ex omnes recteque. Ludus libris isque mea at, vocent hendrerit id."}
      </Body>
      <TealBorderBtn style={TealBorderBtnStyle}>MORE</TealBorderBtn>
    </Content>
  );
};

const Section = styled.section`
  padding: 2em 0 2em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ededed;
`;

const Content = styled.div`
  background-color: #fafafa;
  margin: 1em;
  @media (min-width: 576px) {
    margin 2em;
  }
  @media (min-width: 768px) {
    width: 600px;
    margin: 3em;
  }
  @media (min-width: 980px) {
    width: 950px;
    display: grid;
    grid-template-areas:${props => props.gridArea}
  }
  @media (min-width: 1280px) {
    width: 1100px;
    }
  @media (min-width: 1680px) {
    width: 1200px;
  }
`;

const GridAreaImgLeft = `
    "image image image title  title"
    "image image image body   body"
    "image image image body   body"
    "image image image button button"
  `;

const GridAreaImgRight = `
    "title  title    image image image"
    "body   body     image image image"
    "body   body     image image image"
    "button button   image image image"
  `;

export const Img = styled.img`
  grid-area: image;
  width: 100%;
  height: auto;
`;

const Title = styled.p`
  grid-area: title;
  color: #555;
  font-weight: 900;
  font-size: 1.4rem;
  padding: 1em 2em 0 1.5em;
  @media (min-width: 1280px) {
    font-size: 1.6rem;
  }
`;

const Body = styled.p`
  grid-area: body;
  color: #838383;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.5em;
  padding: 1em 2em 0.8em 2em;
`;

const TealBorderBtnStyle = {
  gridArea: "button",
  height: "45px",
  width: "150px",
  marginLeft: "2em",
  marginBottom: "1em"
};

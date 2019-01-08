import React, { Component } from "react";
import styled from "styled-components";

import Image01 from "./../../assets/transitive/pic02.jpg";
import Image02 from "./../../assets/transitive/pic03.jpg";

class SectionThree extends Component {
  state = {};
  render() {
    return (
      <Section>
        <Container style={{ gridArea: "c" }}>
          <Img src={Image01} alt="" />
          <div id="padding">
            <TitleDiv>
              <p id="title">LOREM IPSUM DOLOR</p>
              <p id="sub-title">
                maecenas feugiat ex purus, quis volutpat lacus placerat
              </p>
            </TitleDiv>
            <Hr />
            <p>
              Cras aliquet urna ut sapien tincidunt, quis malesuada elit
              facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a
              libero pharetra elementum. Maecenas feugiat ex purus, quis
              volutpat lacus placerat malesuada. Praesent in sem ex. Morbi
              mattis sapien pretium tellus venenatis, at egestas urna ornare.
            </p>
          </div>
        </Container>
        <Container style={{ gridArea: "d" }}>
          <Img src={Image02} alt="" />
          <div id="padding">
            <TitleDiv>
              <p id="title">VESTIBULUM SIT AMET</p>
              <p id="sub-title">mattis sapien pretium tellus venenatis</p>
            </TitleDiv>
            <Hr />
            <p>
              Cras aliquet urna ut sapien tincidunt, quis malesuada elit
              facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a
              libero pharetra elementum. Maecenas feugiat ex purus, quis
              volutpat lacus placerat malesuada. Praesent in sem ex. Morbi
              mattis sapien pretium tellus venenatis, at egestas urna ornare.
            </p>
          </div>
        </Container>
      </Section>
    );
  }
}

export default SectionThree;

const Section = styled.section`
  color: #a6a6bf;
  background-color: #f2f2f2;
  padding-top: 2em;

  display: grid;
  grid-template-columns: 2em auto 2em;

  grid-template-areas:
    " . c . "
    " . d . ";

  #padding {
    padding: 4em 2em 2em 2em;
  }
  @media (min-width: 768px) {
    #padding {
      padding: 5em 3em 3em 3em;
    }
  }
  @media (min-width: 1000px) {
    display: grid;
    grid-gap: 2.5em;
    grid-template-columns: 1fr auto auto 1fr;
    grid-template-areas: " . c d . ";
  }
  @media (min-width: 1280px) {
    grid-gap: 5em;
  }
  @media (min-width: 1680px) {
    grid-gap: 6em;
  }
`;

const Hr = styled.hr`
  margin: 2em 0;
  border: none; //remove default style
  border-bottom: 1px solid #a6a6bf; //apply style
`;

const Img = styled.img`
  height: 30%;
  width: 100%;
`;

const TitleDiv = styled.div`
  text-align: center;
  #title {
    font-weight: 900;
    font-size: 2rem;
    color: #000;
  }
  #sub-title {
    font-size: 1.3rem;
  }
`;

const Container = styled.div`
  margin-top: 4.5em;
  background-color: #fff;
  @media (min-width: 1000px) {
    width: 450px;
  }
  @media (min-width: 1280px) {
    width: 550px;
  }
  @media (min-width: 1680px) {
    width: 650px;
  }
`;

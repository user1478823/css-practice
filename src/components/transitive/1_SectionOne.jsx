import React, { Component } from "react";
import styled from "styled-components";

import Image from "./../../assets/transitive/pic01.jpg";

class SectionOne extends Component {
  state = {};
  render() {
    return (
      <Section>
        <Container>
          <Img src={Image} alt="" />
          <div id="padding">
            <TitleDiv>
              <p id="title">Lorem ipsum dolor</p>
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
            <br />
            <br />
            <p>
              Vivamus fermentum nibh vel pharetra blandit. Cras a purus urna.
              Sed et libero ex. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Suspendisse id
              hendrerit felis. Nulla viverra tempor dui at congue. Pellentesque
              quis nulla ornare, congue nisi id, finibus nulla. Aliquam sit amet
              hendrerit purus. Donec libero massa, posuere fermentum eros sit
              amet, maximus fringilla augue. Maecenas at rhoncus lorem. Vivamus
              ultricies consequat est, efficitur convallis libero. Vivamus
              rutrum semper mauris, vitae consequat eros tempor ac. Pellentesque
              et ornare sapien
            </p>
          </div>
        </Container>
      </Section>
    );
  }
}

export default SectionOne;

const Section = styled.section`
  color: #a6a6bf;
  background-color: #f2f2f2;

  display: grid;
  grid-template-columns: 2em auto 2em;
  grid-template-areas: ". c .";

  #padding {
    padding: 4em 2em 2em 2em;
  }
  @media (min-width: 768px) {
    grid-template-columns: 3em auto 3em;
    #padding {
      padding: 5em 3em 3em 3em;
    }
  }
  @media (min-width: 1280px) {
    grid-template-columns: minmax(3em, 1fr) auto minmax(3em, 1fr);
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
  margin: 6em 0 6em 0;
  background-color: #fff;
  grid-area: c;
  @media (min-width: 1280px) {
    width: 75em;
  }
  @media (min-width: 1680px) {
    width: 87.5em;
  }
`;

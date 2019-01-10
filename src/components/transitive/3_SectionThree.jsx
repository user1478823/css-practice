import React, { Component } from "react";
import styled from "styled-components";

import Image01 from "./../../assets/transitive/pic02.jpg";
import Image02 from "./../../assets/transitive/pic03.jpg";

class SectionThree extends Component {
  state = {};
  render() {
    return (
      <Section>
        <this.props.styles
          content={{
            gridArea: "a",
            image: <img src={Image01} alt="" />,
            title: "LOREM IPSUM DOLOR",
            subTitle: "maecenas feugiat ex purus, quis volutpat lacus",
            body: (
              <p>
                Cras aliquet urna ut sapien tincidunt, quis malesuada elit
                facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh
                a libero pharetra elementum. Maecenas feugiat ex purus, quis
                volutpat lacus placerat malesuada. Praesent in sem ex. Morbi
                mattis sapien pretium tellus venenatis, at egestas urna ornare.
              </p>
            )
          }}
        />
        <this.props.styles
          content={{
            gridArea: "b",
            image: <img src={Image02} alt="" />,
            title: "VESTIBULUM SIT AMET",
            subTitle: "mattis sapien pretium tellus venenatis",
            body: (
              <p>
                Cras aliquet urna ut sapien tincidunt, quis malesuada elit
                facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh
                a libero pharetra elementum. Maecenas feugiat ex purus, quis
                volutpat lacus placerat malesuada. Praesent in sem ex. Morbi
                mattis sapien pretium tellus venenatis, at egestas urna ornare.
              </p>
            )
          }}
        />
      </Section>
    );
  }
}

export default SectionThree;

const Section = styled.section`
  color: #a6a6bf;
  background-color: #f2f2f2;
  padding: 6em 0;

  display: grid;
  grid-gap: 2em;
  grid-template-columns: 2em auto 2em;
  grid-template-areas:
    " . a . "
    " . b . ";

  @media (min-width: 1000px) {
    grid-gap: 2.5em;
    grid-template-columns: 1fr auto auto 1fr;
    grid-template-areas: " . a b . ";
    #container {
      width: 450px;
    }
  }
  @media (min-width: 1280px) {
    grid-gap: 5em;
    #container {
      width: 550px;
    }
  }
  @media (min-width: 1680px) {
    grid-gap: 6em;
    #container {
      width: 650px;
    }
  }
`;

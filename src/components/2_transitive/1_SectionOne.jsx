import React, { Component } from "react";
import styled from "styled-components";

import Image from "./../../assets/transitive/pic01.jpg";

class SectionOne extends Component {
  state = {};
  render() {
    return (
      <Section>
        <this.props.card
          content={{
            gridArea: "a",
            image: <img src={Image} alt="" />,
            title: "LOREM IPSUM DOLOR",
            subTitle: "maecenas feugiat ex purus, quis volutpat lacus placerat",
            body: (
              <p>
                Cras aliquet urna ut sapien tincidunt, quis malesuada elit
                facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh
                a libero pharetra elementum. Maecenas feugiat ex purus, quis
                volutpat lacus placerat malesuada. Praesent in sem ex. Morbi
                mattis sapien pretium tellus venenatis, at egestas urna ornare.
                <br />
                <br />
                Vivamus fermentum nibh vel pharetra blandit. Cras a purus urna.
                Sed et libero ex. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Suspendisse id
                hendrerit felis. Nulla viverra tempor dui at congue.
                Pellentesque quis nulla ornare, congue nisi id, finibus nulla.
                Aliquam sit amet hendrerit purus. Donec libero massa, posuere
                fermentum eros sit amet, maximus fringilla augue. Maecenas at
                rhoncus lorem. Vivamus ultricies consequat est, efficitur
                convallis libero. Vivamus rutrum semper mauris, vitae consequat
                eros tempor ac. Pellentesque et ornare sapien
              </p>
            )
          }}
        />
      </Section>
    );
  }
}

export default SectionOne;

const Section = styled.section`
  color: #a6a6bf;
  background-color: #f2f2f2;
  padding: 6em 0;

  display: grid;
  grid-template-columns: 2em auto 2em;
  grid-template-areas: ". a .";

  @media (min-width: 768px) {
    grid-template-columns: 3em auto 3em;
  }
  @media (min-width: 1280px) {
    grid-template-columns: minmax(3em, 1fr) auto minmax(3em, 1fr);
    #container {
      width: 75em;
    }
  }
  @media (min-width: 1680px) {
    #container {
      width: 87.5em;
    }
  }
`;

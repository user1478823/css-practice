import React, { Component } from "react";
import styled from "styled-components";

export default class SectionTwo extends Component {
  state = {};
  render() {
    return (
      <this.props.bgSection style={bgSectionStyle}>
        <div style={{ margin: "2em 0" }}>
          <Title>MORBI INTERDUM MOLLIS SAPIEN</Title>
          <Body>
            Cras aliquet urna ut sapien tincidunt, quis malesuada elit
            facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a
            libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat
            lacus placerat malesuada. Praesent in sem ex. Morbi mattis sapien
            pretium tellus venenatis, at egestas urna ornare.
          </Body>
        </div>
      </this.props.bgSection>
    );
  }
}

const bgSectionStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const Title = styled.p`
  color: #fff;
  font-weight: 900;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 1680px) {
    font-size: 2.1rem;
  }
`;

const Body = styled.p`
  color: #9f9f97;
  padding: 2em 0;
  @media (min-width: 768px) {
    font-size: 1.2rem;
    width: 800px;
  }
  @media (min-width: 1680px) {
    font-size: 1.4rem;
    width: 1250px;
  }
`;

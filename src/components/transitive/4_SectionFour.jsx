import React, { Component } from "react";
import styled from "styled-components";

import Image from "./../../assets/transitive/bg.jpg";

export default class SectionTwo extends Component {
  state = {};
  render() {
    return (
      <Section>
        <div id="content-width">
          <p id="title">MORBI INTERDUM MOLLIS SAPIEN</p>
          <p id="body">
            Cras aliquet urna ut sapien tincidunt, quis malesuada elit
            facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a
            libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat
            lacus placerat malesuada. Praesent in sem ex. Morbi mattis sapien
            pretium tellus venenatis, at egestas urna ornare.
          </p>
        </div>
      </Section>
    );
  }
}

const Section = styled.section`
  padding: 4em;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  #title {
    color: #fff;
    font-weight: 900;
    font-size: 1.5rem;
  }
  #body {
    color: #9f9f97;
    padding: 2em 0;
  }

  @media (min-width: 768px) {
    #content-width {
      width: 1000px;
    }
    #title {
      font-size: 2rem;
    }
    #body {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 1680px) {
    #content-width {
      width: 1250px;
    }
    #title {
      font-size: 2.1rem;
    }
    #body {
      font-size: 1.4rem;
    }
  }
`;

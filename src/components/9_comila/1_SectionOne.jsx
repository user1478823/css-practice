import React, { Component } from "react";
import styled from "styled-components";

import Image from "./../../assets/9_comila/about-img.png";

export default class Footer extends Component {
  state = {};
  render() {
    return (
      <Section>
        <Img style={{ gridArea: "img" }} src={Image} alt="" />
        <div style={{ gridArea: "description" }}>
          <h2>OUR COMPANY</h2>
          <h4
            style={{
              paddingTop: "1em",
              paddingBottom: "2em"
            }}
          >
            COMILA STUDIO IS BASED IN HONG KONG
          </h4>
          <p>
            Vivamus elit risus, porttitor id placerat ut, aliquet non quam.
            Pellentesque nulla metus, ornare et porttitor vel, consectetur vitae
            erat. Vestibulum tristique semper tellus vitae condimentum. Duis sed
            eros eget diam dictum posuere.
            <br />
            <br />
            Aliquam vel gravida ligula. Phasellus ut purus ac libero ultrices
            commodo commodo at quam. In vestibulum purus sit amet tempus
            euismod. Donec sed congue nisl.
          </p>
        </div>
      </Section>
    );
  }
}

const Section = styled.section`
  margin: 4em 0;
  display: grid;
  justify-content: center;
  grid-gap: 1em;
  grid-template-columns: 400px;
  grid-template-areas: "img" "description";
  @media (min-width: 768px) {
    grid-template-columns: 500px;
  }
  @media (min-width: 980px) {
    grid-template-columns: 400px 400px;
    grid-template-areas: "img description";
  }
  @media (min-width: 1280px) {
    grid-template-columns: 500px 500px;
  }
  @media (min-width: 1680px) {
    grid-template-columns: 600px 600px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

import React, { Component } from "react";
import styled from "styled-components";

import Image from "./../../assets/10_touche/about.jpg";

import { Hr } from "./global/Global.jsx";

export default class Footer extends Component {
  state = {};
  render() {
    return (
      <Section>
        <Img style={{ gridArea: "img" }} src={Image} alt="" />
        <div style={{ gridArea: "description" }}>
          <h2>OUR COMPANY</h2>
          <Hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            id atque debitis provident, quaerat nam consequuntur inventore nobis
            labore deserunt, aperiam repellat. Inventore neque saepe
          </p>
          <h3
            style={{
              paddingTop: "1.5em",
              paddingBottom: "0.5em"
            }}
          >
            Awarded Chefs
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            ipsam, porro, in modi neque nemo blanditiis a dignissimos laborum
            maxime dolore laudantium? Id debitis, recusandae iste est modi natus
            quam.
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
  grid-gap: 3em;
  grid-template-columns: 400px;
  grid-template-areas: "img" "description";

  @media (min-width: 768px) {
    grid-template-columns: 500px;
  }
  @media (min-width: 980px) {
    grid-gap: 3em;
    grid-template-columns: 500px 400px;
    grid-template-areas: "img description";
  }
  @media (min-width: 1280px) {
    grid-gap: 4em;
  }
  @media (min-width: 1680px) {
    grid-gap: 5em;
    grid-template-columns: 500px 500px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

import React, { Component } from "react";
import styled from "styled-components";

import Image from "./../../assets/urban/pic01.jpg";

export default class extends Component {
  state = {};
  render() {
    return (
      <Section>
        <this.props.styles.img
          style={{ gridArea: "image", marginBottom: "2.5em" }}
          src={Image}
          alt=""
        />
        <div style={{ gridArea: "text" }}>
          <this.props.styles.title>
            Maecenas a gravida quam 576px-cyan 768px-blue 1280px-yellow
            1680px-green
          </this.props.styles.title>
          <this.props.styles.body>
            Etiam posuere hendrerit arcu, ac blandit nulla. Sed congue malesuada
            nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis
            sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex
            blandit augue. Ut vitae neque fermentum, luctus elit fermentum,
            porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc
            justo dictum dui, non aliquet erat nibh non ex.
            <br />
            <br />
            Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam
            consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor
            lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit
            fermentum, porta augue. Nullam ultricies, turpis at fermentum
            iaculis, nunc justo dictum dui, non aliquet erat nibh non ex.
          </this.props.styles.body>
          <this.props.styles.btn>Learn More</this.props.styles.btn>
        </div>
      </Section>
    );
  }
}

const Section = styled.section`
  background-color: #fafafa;
  padding: 2.5em;
  @media (min-width: 576px) {
    background-color: cyan;
  }
  @media (min-width: 768px) {
    background-color: blue;
    display: grid;
    grid-template-columns: 1fr auto fit-content(37.5em) 1fr;
    grid-template-areas: ". image text .";
    grid-gap: 2em;
  }
  @media (min-width: 1280px) {
    background-color: yellow;
  }
  @media (min-width: 1680px) {
    background-color: green;
  }
`;

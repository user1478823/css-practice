import React, { Component } from "react";
import styled from "styled-components";

import Image from "./../../assets/urban/pic02.jpg";

export default class SectionTwo extends Component {
  state = {};
  render() {
    return (
      <Section>
        <this.props.styles.img
          src={Image}
          alt=""
          style={{ gridArea: "image", marginBottom: "2.5em" }}
        />
        <div style={{ gridArea: "text" }}>
          <this.props.styles.title style={{ color: "#f1f0f1" }}>
            Suspendisse quis massa vel justo
          </this.props.styles.title>
          <this.props.styles.body style={{ color: "#aed6f1" }}>
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
          <this.props.styles.btn style={BtnStyle}>
            Learn More
          </this.props.styles.btn>
        </div>
      </Section>
    );
  }
}

const Section = styled.section`
  background-color: #3498db;
  padding: 2.5em;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr fit-content(37.5em) auto 1fr;
    grid-template-areas: ". text image .";
    grid-gap: 2em;
  }
`;

const BtnStyle = {
  backgroundColor: "#fff",
  color: "#3498db"
};

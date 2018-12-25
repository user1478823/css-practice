import React, { Component } from "react";
import styled from "styled-components";

import Image from "./../../assets/pic01.jpg";

export default class extends Component {
  state = {};
  render() {
    return (
      <Section>
        <this.props.styles.img src={Image} alt="" />
        <div>
          <this.props.styles.title>
            Maecenas a gravida quam
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
  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: 5fr 6fr 1em;
  }
`;

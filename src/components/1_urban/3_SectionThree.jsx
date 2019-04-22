import React, { Component } from "react";
import styled from "styled-components";

import Image01 from "./../../assets/urban/pic03.jpg";
import Image02 from "./../../assets/urban/pic04.jpg";
import Image03 from "./../../assets/urban/pic05.jpg";

export default class SectionThree extends Component {
  state = {};

  images = [Image01, Image02, Image03];

  render() {
    return (
      <Section>
        <this.props.styles.title>
          Aliquam ipsum purus dolor
        </this.props.styles.title>
        <this.props.styles.body style={{ color: "#a5a5a5" }}>
          Cras sagittis turpis sit amet est tempus, sit amet consectetur purus
          tincidunt.
        </this.props.styles.body>
        <Div>
          {this.images.map(image => {
            return (
              <div style={{ paddingTop: "2.5em" }}>
                <this.props.styles.img src={image} alt="" />
                <this.props.styles.body>
                  Sed congue elit malesuada nibh, a varius odio vehicula
                  aliquet. Aliquam consequat, nunc quis sollicitudin aliquet.
                </this.props.styles.body>
                <this.props.styles.btn>Learn More</this.props.styles.btn>
              </div>
            );
          })}
        </Div>
      </Section>
    );
  }
}

const Section = styled.section`
  text-align: center;
  background-color: #fafafa;
  padding: 2.5em;
  p {
    width: 100%;
  }
`;

const Div = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-gap: 3em;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

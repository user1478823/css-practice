import React, { Component } from "react";
import styled from "styled-components";

import Image01 from "./../../assets/pic03.jpg";
import Image02 from "./../../assets/pic04.jpg";
import Image03 from "./../../assets/pic05.jpg";

export default class SectionThree extends Component {
  state = {};

  images = [Image01, Image02, Image03];

  render() {
    return (
      <Section>
        <TitleDiv>
          <Title>Aliquam ipsum purus dolor</Title>
          <p style={{ color: "#a5a5a5" }}>
            Cras sagittis turpis sit amet est tempus, sit amet consectetur purus
            tincidunt.
          </p>
        </TitleDiv>
        {this.images.map(image => {
          return (
            <div>
              <this.props.styles.img
                src={image}
                alt=""
                style={{ marginTop: "1em" }}
              />
              <this.props.styles.body>
                Sed congue elit malesuada nibh, a varius odio vehicula aliquet.
                Aliquam consequat, nunc quis sollicitudin aliquet.
              </this.props.styles.body>
              <this.props.styles.btn>Learn More</this.props.styles.btn>
            </div>
          );
        })}
      </Section>
    );
  }
}

const Section = styled.section`
  text-align: center;
  background-color: #fafafa;
  padding: 2.5em;
  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: " a ";
    grid-gap: 1em;
  }
`;

const TitleDiv = styled.div`
  padding-bottom: 1em;
  @media screen and (min-width: 576px) {
    grid-area: a;
    grid-column-start: 1;
    grid-column-end: 4;
  }
`;

const Title = styled.p`
  font-weight: 900;
  font-size: 1.6em;
  padding-bottom: 0.8em;
`;

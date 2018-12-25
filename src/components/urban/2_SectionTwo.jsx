import React from "react";
import styled from "styled-components";

import Image from "./../../assets/pic02.jpg";

export default () => (
  <Section>
    <Img src={Image} alt="" />
    <Content>
      <Title>Suspendisse quis massa vel justo</Title>
      <Body>
        Etiam posuere hendrerit arcu, ac blandit nulla. Sed congue malesuada
        nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis
        sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit
        augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue.
        Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui,
        non aliquet erat nibh non ex.
        <br />
        <br />
        Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam
        consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor
        lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit
        fermentum, porta augue. Nullam ultricies, turpis at fermentum iaculis,
        nunc justo dictum dui, non aliquet erat nibh non ex.
      </Body>
      <Button>Learn More</Button>
    </Content>
  </Section>
);

const Section = styled.section`
  background-color: #3498db;
  padding: 2.5em;
  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: 1em 6fr 5fr;
    grid-template-areas: ". b a";
  }
`;

const Img = styled.img`
  grid-area: a;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  width: 50%;
  @media screen and (min-width: 576px) {
    width: 80%;
  }
`;

const Content = styled.div`
  grid-area: b;
`;

const Title = styled.p`
  color: #f1f0f1;
  font-weight: 900;
  font-size: 1.2em;
  padding-top: 1.5em;
  @media screen and (min-width: 576px) {
    padding-top: 0;
  }
`;

const Body = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  line-height: 1.5em;
  padding: 2.2em 0;
  color: #aed6f1;
`;

const Button = styled.button`
  width: 100px;
  padding: 0.7em;
  background-color: #fff;
  color: #3498db;
  border-radius: 3px;
  font-weight: 900;
  font-size: 0.8rem;
  &:hover {
    background-color: #003a58;
    color: #3498db;
    border-color: #003a58;
  }
`;

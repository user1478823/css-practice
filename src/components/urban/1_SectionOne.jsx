import React from "react";
import styled from "styled-components";

import Image from "./../../assets/pic01.jpg";

export default () => (
  <Section>
    <Img src={Image} alt="" />
    <Content>
      <Title>Maecenas a gravida quam</Title>
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
  display grid;
  grid-template-columns: 2em 6fr 2em;
  grid-template-areas: ". a ." 
                       ". b .";
  grid-gap: 2em;
  background-color: #fafafa;
  padding: 2.5em 0;
  @media screen and (min-width: 576px) {
    grid-template-columns: 0.5em 3fr 6fr 0.5em;
    grid-template-areas: ". a b .";
    grid-gap: 1em;
  }
`;

const Content = styled.div`
  grid-area: b;
`;

const Img = styled.img`
  grid-area: a;
  height: 100%;
  width: 100%
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 250px;
  width: 250px;
  @media screen and (min-width: 576px) {
    height: 200px;
    width: 200px;
  }
`;

const Title = styled.p`
  font-weight: 900;
  font-size: 1.2em;
`;

const Body = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  line-height: 1.5em;
  padding: 2.2em 0;
  color: #a5a5a5;
`;

const Button = styled.button`
  width: 100px;
  padding: 0.7em;
  background-color: #3498db;
  color: white;
  border-radius: 3px;
  font-weight: 900;
  font-size: 0.8rem;
  &:hover {
    background-color: #003a58;
    color: #3498db;
    border-color: #003a58;
  }
`;

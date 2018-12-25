import React from "react";
import styled from "styled-components";

import Image01 from "./../../assets/pic03.jpg";
import Image02 from "./../../assets/pic04.jpg";
import Image03 from "./../../assets/pic05.jpg";

export default () => (
  <Section>
    <TitleDiv>
      <Title>Aliquam ipsum purus dolor</Title>
      <TitleBody>
        Cras sagittis turpis sit amet est tempus, sit amet consectetur purus
        tincidunt.
      </TitleBody>
    </TitleDiv>
    <div>
      <Img src={Image01} alt="" />
      <Body>
        Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam
        consequat, nunc quis sollicitudin aliquet.
      </Body>
      <Button>Learn More</Button>
    </div>
    <div>
      <Img src={Image02} alt="" />
      <Body>
        Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam
        consequat, nunc quis sollicitudin aliquet.
      </Body>
      <Button>Learn More</Button>
    </div>
    <div>
      <Img src={Image03} alt="" />
      <Body>
        Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam
        consequat, nunc quis sollicitudin aliquet.
      </Body>
      <Button>Learn More</Button>
    </div>
  </Section>
);

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
  grid-area: a;
  grid-column-start: 1;
  grid-column-end: 4;
`;

const Title = styled.p`
  font-weight: 900;
  font-size: 1.6em;
  padding-bottom: 0.8em;
`;

const TitleBody = styled.p`
  color: #a5a5a5;
`;

const Img = styled.img`
  margin-top: 2em;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  width: 50%;
  @media screen and (min-width: 576px) {
    margin-top: 0;
    height: auto;
    width: 80%;
  }
`;

const Body = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  line-height: 1.5em;
  padding: 1.5em 0;
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

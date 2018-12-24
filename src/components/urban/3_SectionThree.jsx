import React from "react";
import styled from "styled-components";

import Image01 from "./../../assets/pic03.jpg";
import Image02 from "./../../assets/pic04.jpg";
import Image03 from "./../../assets/pic05.jpg";

export default () => (
  <Section>
    <Content>
      <TitleDiv>
        <Title>Aliquam ipsum purus dolor</Title>
        <TitleBody>
          Cras sagittis turpis sit amet est tempus, sit amet consectetur purus
          tincidunt.
        </TitleBody>
      </TitleDiv>
      <Img src={Image01} alt="" />
      <Body>
        Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam
        consequat, nunc quis sollicitudin aliquet.
      </Body>
      <Button>Learn More</Button>
      <Img src={Image02} alt="" />
      <Body>
        Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam
        consequat, nunc quis sollicitudin aliquet.
      </Body>
      <Button>Learn More</Button>
      <Img src={Image03} alt="" />
      <Body>
        Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam
        consequat, nunc quis sollicitudin aliquet.
      </Body>
      <Button>Learn More</Button>
    </Content>
  </Section>
);

const Section = styled.section`
  text-align: center;  
  display grid;
  grid-template-columns: 2em 6fr 2em;
  grid-template-areas: ". a .";
  background-color: #fafafa;
  padding-bottom: 2.5em
`;

const TitleDiv = styled.div`
  padding: 2.5em 0 1em 0;
  grid-area: a;
`;

const Title = styled.p`
  font-weight: 900;
  font-size: 1.6em;
  padding-bottom: 0.8em;
`;

const TitleBody = styled.p`
  color: #a5a5a5;
`;

const Content = styled.div`
  grid-area: a;
`;

const Img = styled.img`
  margin-top: 2em;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 60%;
  width: 60%;
`;

const Body = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  line-height: 1.5em;
  padding: 1.5em 0;
  color: #a5a5a5;
`;

const Button = styled.button`
	width: 25%
	padding: 0.7em;
	background-color: #3498db;
	color: white;
	border-radius: 3px;
	font-weight:900;
	font-size: 0.8rem;
	&:hover {
		background-color: #003a58;
		color: #3498db;
		border-color: #003a58;
	}
`;

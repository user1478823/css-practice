import React, { Component } from "react";
import styled from "styled-components";

import Image from "./../../assets/pic01.jpg";

class SectionOne extends Component {
  state = {};
  render() {
    return (
      <Section>
        <Content>
          <Img src={Image} alt="" />
          <Title>Maecenas a gravida quam</Title>
          <Body>
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
          </Body>
          <Button>Learn More</Button>
        </Content>
      </Section>
    );
  }
}

export default SectionOne;

const Section = styled.section`
  display grid;
  grid-template-columns: 2em 6fr 2em;
  grid-template-areas: ". a .";
  background-color: #fafafa;
`;

const Content = styled.div`
  grid-area: a;
`;

const Img = styled.img`
  padding: 3em 0;
  height: 250px;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 60%;
  width: 60%;
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

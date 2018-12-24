import React from "react";
import styled from "styled-components";

import Image from "./../../assets/banner.jpg";

export default () => (
  <Background>
    <Content>
      <Title>This is Urban</Title>
      <Body>
        Aliquam libero augue varius non odio nec faucibus conguefelis quisque a
        diam rutrum tempus massa accumsan faucibus purus.
      </Body>
      <Button>Learn More</Button>
    </Content>
  </Background>
);

const Background = styled.div`
  text-align: center;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: grid;
  grid-template-columns: 2em 6fr 2em;
  grid-template-areas: ". a .";
  grid-auto-rows: 100%;
`;

const Content = styled.div`
  grid-area: a;
  align-self: center;
  color: white;
`;

const Title = styled.p`
  font-weight: 900;
  font-size: 1.4rem;
  @media screen and (min-width: 576px) {
    font-size: 2.7rem;
  }
`;

const Body = styled.p`
  font-weight: 300;
  font-size: 0.9rem;
  line-height: 1.5em;
  padding: 1.2em 0 1.5em 0;
  @media screen and (min-width: 576px) {
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
	width: 100%
	padding: 0.6em;
	background-color: #3498db;
	color: white;
	border-radius: 5px;
	font-weight:900;
	font-size: 1rem;
	&:hover {
		background-color: #003a58;
		color: #3498db;
		border-color: #003a58;
	}
	@media screen and (min-width: 576px) {
    width: 25%;
  }
`;

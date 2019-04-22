import React from "react";
import styled from "styled-components";

import { Header } from "./../0_global/Global";
import Image from "./../../assets/urban/banner.jpg";

export default () => (
  <Header
    heightMobile="100vh"
    theme={{
      bg: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Image})`
    }}
  >
    <div>
      <Title>This is Urban</Title>
      <Body>
        Aliquam libero augue varius non odio nec faucibus conguefelis quisque a
        diam rutrum tempus massa accumsan faucibus purus.
      </Body>
      <Button>Learn More</Button>
    </div>
  </Header>
);

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

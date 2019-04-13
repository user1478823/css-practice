import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { PrimaryColor, Title, Hr } from "./global/Global.jsx";

export default () => (
  <Footer>
    <Title style={{ gridArea: "title" }}>Let's Get In Touch!</Title>
    <Hr
      style={{
        backgroundColor: PrimaryColor,
        borderColor: PrimaryColor,
        gridArea: "hr"
      }}
    />
    <Body style={{ gridArea: "body" }}>
      Ready to start your next project with us? That's great! Give us a call or
      send us an email and we will get back to you as soon as possible!
    </Body>
    <FontAwesomeIcon
      className="fa"
      style={{ gridArea: "phone" }}
      icon={faPhone}
    />
    <Body style={{ gridArea: "phone-title" }}>123-456-6789</Body>
    <FontAwesomeIcon
      className="fa"
      style={{ gridArea: "email" }}
      icon={faEnvelope}
    />
    <Body style={{ gridArea: "email-title" }}>feedback@startbootstrap.com</Body>
  </Footer>
);

const Footer = styled.footer`
  text-align: center;
  padding: 4em 1em;
  color: black;

  * {
    justify-self: center;
  }

  .fa {
    font-size: 40px;
    padding-bottom: 10px;
    color: ${PrimaryColor};
  }

  @media (min-width: 980px) {
    display: grid;
    justify-content: center;
    grid-gap: 1em;
    grid-template-columns: repeat(2, 350px);
    grid-template-areas:
      "title          title"
      "hr             hr"
      "body           body"
      "phone          email"
      "phone-title    email-title"
      "phone-txt      email-txt";
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(2, 400px);
    grid-template-areas:
      "title          title"
      "hr             hr"
      "body           body"
      "phone          email"
      "phone-title    email-title"
      "phone-txt      email-txt";
  }
`;

const Body = styled.p`
  font-weight: 300;
  font-size: 1.12rem;
  line-height: 1.5em;
  @media (max-width: 980px) {
    padding-bottom: 1em;
  }
  @media (min-width: 1280px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1680px) {
    font-size: 1.1rem;
  }
`;

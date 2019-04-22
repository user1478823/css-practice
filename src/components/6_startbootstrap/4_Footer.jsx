import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { PrimaryColor, Title, Hr } from "./global/Global.jsx";

export default () => (
  <Footer>
    <h2 style={{ gridArea: "title" }}>Let's Get In Touch!</h2>
    <Hr
      style={{
        backgroundColor: PrimaryColor,
        borderColor: PrimaryColor,
        gridArea: "hr"
      }}
    />
    <p style={{ gridArea: "body" }}>
      Ready to start your next project with us? That's great! Give us a call or
      send us an email and we will get back to you as soon as possible!
    </p>
    <FontAwesomeIcon
      className="fa"
      style={{ gridArea: "phone" }}
      icon={faPhone}
    />
    <p style={{ gridArea: "phone-title" }}>123-456-6789</p>
    <FontAwesomeIcon
      className="fa"
      style={{ gridArea: "email" }}
      icon={faEnvelope}
    />
    <p style={{ gridArea: "email-title" }}>feedback@startbootstrap.com</p>
  </Footer>
);

const Footer = styled.footer`
  text-align: center;
  padding: 4em 2em;
  color: black;

  display: grid;
  justify-content: center;
  grid-gap: 1em;

  grid-template-areas:
    "title"
    "hr"
    "body"
    "phone"
    "phone-title"
    "phone-txt"
    "email"
    "email-title"
    "email-txt";

  * {
    justify-self: center;
  }

  .fa {
    font-size: 40px;
    padding-top: 1em;
    padding-bottom: 0.3em;
    color: ${PrimaryColor};
  }

  @media (min-width: 768px) {
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
  }
`;

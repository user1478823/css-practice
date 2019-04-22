import React from "react";
import styled from "styled-components";

import { Title } from "./0_Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default () => (
  <Section>
    <Title>About Me</Title>
    <Body>
      Mus sed interdum nunc dictum rutrum scelerisque erat a parturient
      condimentum potenti dapibus vestibulum condimentum per tristique porta.
      Torquent a ut consectetur a vel ullamcorper a commodo a mattis ipsum class
      quam sed eros vestibulum quisque a eu nulla scelerisque a elementum
      vestibulum.
      <br />
      <br />
      <br />
      Aliquet dolor ultricies sem rhoncus dolor ullamcorper pharetra dis
      condimentum ullamcorper rutrum vehicula id nisi vel aptent orci litora
      hendrerit penatibus erat ad sit. In a semper velit eleifend a viverra
      adipiscing a phasellus urna praesent parturient integer ultrices montes
      parturient suscipit posuere quis aenean. Parturient euismod ultricies
      commodo arcu elementum suspendisse id dictumst at ut vestibulum conubia
      quisque a himenaeos dictum proin dis purus integer mollis parturient eros
      scelerisque dis libero parturient magnis.
    </Body>
    <Title>Follow Me</Title>
    <FontAwesomeIcon className="fafa" icon={faTwitter} />
    <FontAwesomeIcon className="fafa" icon={faFacebook} />
    <FontAwesomeIcon className="fafa" icon={faInstagram} />
  </Section>
);

const Section = styled.section`
  background-color: #ebebeb;
  padding: 3em;
  .fafa {
    font-size: 35px;
    color: #3f9dff;
    padding-right: 0.5em;
    transition: 0.3s ease-in;
    &:hover {
      color: #19b5fe;
    }
  }
  @media (min-width: 768px) {
    padding: 3em 5em;
  }
  @media (min-width: 1680px) {
    padding: 5em;
  }
`;

const Body = styled.p`
  color: #22313f;
  padding-bottom: 2em;
  line-height: 1.5;
  font-size: 1.1rem;
`;

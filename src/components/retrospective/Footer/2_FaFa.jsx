import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faSnapchat
} from "@fortawesome/free-brands-svg-icons";

export default () => (
  <Section>
    <FontAwesomeIcon icon={faTwitter} />
    <FontAwesomeIcon icon={faFacebook} />
    <FontAwesomeIcon icon={faInstagram} />
    <FontAwesomeIcon icon={faSnapchat} />
  </Section>
);

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  * {
    color: #a5a9ad;
    margin: 1em;
  }
  @media (min-width: 980px) {
    font-size: 35px;
  }
  @media (min-width: 1680px) {
    font-size: 40px;
  }
`;

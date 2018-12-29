import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faSnapchat
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  state = {};
  render() {
    return (
      <Section>
        <FontAwesomeIcon style={FaStyle2} icon={faTwitter} />
        <FontAwesomeIcon style={FaStyle} icon={faFacebook} />
        <FontAwesomeIcon style={FaStyle} icon={faInstagram} />
        <FontAwesomeIcon style={FaStyle} icon={faSnapchat} />
      </Section>
    );
  }
}

export default Footer;

const FaStyle2 = {
  fontSize: "20px",
  padding: "10px",
  borderStyle: "double",
  borderWidth: "15px",
  borderColor: "#000",
  borderWidth: "3px",
  borderRadius: "100%"
};

const FaStyle = {
  fontSize: "20px",
  marginLeft: "1em",
  padding: "10px",
  borderStyle: "double",
  borderColor: "#000",
  borderWidth: "3px",
  borderRadius: "100%"
};

const Section = styled.section`
  height: 150px;
  background-color: #3498db;
  display: flex;
  align-items: center;
  justify-content: center;
`;

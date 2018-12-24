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
        <Container>
          <FontAwesomeIcon style={FaStyle} icon={faTwitter} />
          <FontAwesomeIcon style={FaStyle2} icon={faFacebook} />
          <FontAwesomeIcon style={FaStyle2} icon={faInstagram} />
          <FontAwesomeIcon style={FaStyle2} icon={faSnapchat} />
        </Container>
      </Section>
    );
  }
}

export default Footer;

const FaStyle = {
  fontSize: "20px",
  padding: "10px",
  borderStyle: "double",
  borderWidth: "15px",
  borderColor: "#000",
  borderWidth: "3px",
  borderRadius: "100%"
};

const FaStyle2 = {
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
  display: grid;
  grid-template-columns: 2em 6fr 2em;
  grid-template-areas: ". a .";
  justify-items: center;
`;

const Container = styled.div`
  grid-area: a;
  align-self: center;
`;

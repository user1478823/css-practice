import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCode,
  faImage,
  faCameraRetro,
  faMeteor
} from "@fortawesome/free-solid-svg-icons";

import { PrimaryColor } from "./global/Global.jsx";

export default () => (
  <Section>
    <h2 style={{ gridArea: "title" }}>At Your Service</h2>
    <P style={{ gridArea: "body" }}>
      A creative agency based on Candy Land, ready to boost your business with
      some beautifull templates. Lattes Agency is one of the best in town see
      more you will be amazed.
    </P>
    <FontAwesomeIcon
      className="fa"
      style={{ gridArea: "file" }}
      icon={faFileCode}
    />
    <h4 style={{ gridArea: "file-title" }}>WEB DEVELOPMENT</h4>
    <p style={{ gridArea: "file-txt" }}>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
    </p>
    <FontAwesomeIcon
      className="fa"
      style={{ gridArea: "image" }}
      icon={faImage}
    />
    <h4 style={{ gridArea: "image-title" }}>VISUALISATION</h4>
    <p style={{ gridArea: "image-txt" }}>
      Temporibus autem quibusdam et aut officiis debitis aut rerum
      necessitatibus
    </p>
    <FontAwesomeIcon
      className="fa"
      style={{ gridArea: "camera" }}
      icon={faCameraRetro}
    />
    <h4 style={{ gridArea: "camera-title" }}>PHOTOGRAPHY</h4>
    <p style={{ gridArea: "camera-txt" }}>
      Accusamus et iusto odio dignissimos ducimus qui blanditiis
    </p>
    <FontAwesomeIcon
      className="fa"
      style={{ gridArea: "meteor" }}
      icon={faMeteor}
    />
    <h4 style={{ gridArea: "meteor-title" }}>UI/UX DESIGN</h4>
    <p style={{ gridArea: "meteor-txt" }}>
      Itaque earum rerum hic tenetur a sapiente, ut aut reiciendis maiores
    </p>
  </Section>
);

const Section = styled.section`
  text-align: center;
  padding: 4em 0;
  color: black;
  background-color: #f8f8f8;

  display: grid;
  justify-content: center;
  grid-gap: 1em;
  grid-template-columns: repeat(4, 100px);
  grid-template-areas:
    "title          title         title         title"
    "body           body          body          body"
    "file           file          image         image"
    "file-title     file-title    image-title   image-title"
    "file-txt       file-txt      image-txt     image-txt"
    "camera         camera        meteor        meteor"
    "camera-title   camera-title  meteor-title  meteor-title"
    "camera-txt     camera-txt    meteor-txt    meteor-txt";

  * {
    justify-self: center;
  }

  .fa {
    font-size: 50px;
    padding-top: 0.5em;
    color: ${PrimaryColor};
  }
  @media (min-width: 768px) {
    grid-column-gap: 5em;
    grid-template-columns: repeat(4, 125px);
  }
  @media (min-width: 980px) {
    grid-template-columns: repeat(4, 150px);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 250px);
    grid-template-areas:
      "title          title        title       title"
      "body           body         body        body"
      "file        image        camera        meteor"
      "file-title  image-title  camera-title  meteor-title"
      "file-txt    image-txt    camera-txt    meteor-txt";
  }
  @media (min-width: 1680px) {
    grid-template-columns: repeat(4, 300px);
  }
`;

const P = styled.p`
  @media (min-width: 980px) {
    width: 80%;
  }
  @media (min-width: 1280px) {
    width: 60%;
  }
  padding-top: 1em;
  padding-bottom: 2em;
`;

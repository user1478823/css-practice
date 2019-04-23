import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTree,
  faCampground,
  faFeather
} from "@fortawesome/free-solid-svg-icons";

import Image from "./../../assets/zipper/image-04.jpg";
import { PrimaryColor, BgColor } from "./global/Global.jsx";

export default () => (
  <Section>
    <H3 style={{ gridArea: "title" }}>Mauris quis odio id sapien</H3>
    <Content style={{ gridArea: "one" }}>
      <FontAwesomeIcon className="fa" icon={faTree} />
      <p>
        Ut vulputate eros non ante lobortis viverra. Vestibulum ut est lorem.
        Sed nec blandit lorem, eget iaculis quam. Mauris quis odio id sapien
        scelerisque mollis.
      </p>
    </Content>
    <Content style={{ gridArea: "two" }}>
      <FontAwesomeIcon className="fa" icon={faCampground} />
      <p>
        Ut vulputate eros non ante lobortis viverra. Vestibulum ut est lorem.
        Sed nec blandit lorem, eget iaculis quam. Mauris quis odio id sapien
        scelerisque mollis.
      </p>
    </Content>
    <Content style={{ gridArea: "three" }}>
      <FontAwesomeIcon className="fa" icon={faFeather} />
      <p>
        Ut vulputate eros non ante lobortis viverra. Vestibulum ut est lorem.
        Sed nec blandit lorem, eget iaculis quam. Mauris quis odio id sapien
        scelerisque mollis.
      </p>
    </Content>
  </Section>
);

const Section = styled.section`
  padding: 4em 0;
  color: white;

  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: grid;
  justify-content: center;
  row-gap: 3em;
  grid-template-columns: 400px;
  grid-template-areas:
    "title"
    "one"
    "two"
    "three";

  * {
    justify-self: center;
  }

  .fa {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    font-size: 50px;
    padding: 0.5em 0;
    color: ${PrimaryColor};
  }
  @media (min-width: 768px) {
    grid-template-columns: 500px;
  }
  @media (min-width: 980px) {
    grid-template-columns: repeat(3, 280px);
    column-gap: 3em;
    grid-gap: 4em;
    grid-template-areas:
      "title          title         title"
      "one            two           three";
  }
  @media (min-width: 1280px) {
    column-gap: 5em;
  }
  @media (min-width: 1680px) {
    grid-template-columns: repeat(3, 350px);
  }
`;

const Content = styled.div`
  padding: 2.5em;
  background: ${BgColor};
`;

const H3 = styled.h3`
  color: black;
`;

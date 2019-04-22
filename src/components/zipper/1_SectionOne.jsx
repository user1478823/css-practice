import React from "react";
import styled from "styled-components";

import Image from "./../../assets/zipper/image-02.jpg";

export default () => (
  <Section>
    <Content>
      <H3>Mauris quis odio id sapien</H3>
      <p>
        Aliquam sollicitudin mi sollicitudin justo viverra, nec posuere lorem
        fringilla. Morbi quam arcu, dignissim ac rutrum vel, hendrerit feugiat
        tortor. Ut vulputate eros non ante lobortis viverra.
        <br />
        <br />
        Vestibulum ut est lorem. Sed nec blandit lorem, eget iaculis quam.
        Mauris quis odio id sapien scelerisque mollis. Maecenas aliquet luctus
        erat sit amet aliquet. Vestibulum mattis porta tristique. Vivamus
        suscipit bibendum lorem, at efficitur enim hendrerit nec.
      </p>
    </Content>
  </Section>
);

const Section = styled.section`
  position: relative;
  height: 700px;
  color: white;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Content = styled.div`
  position: absolute;
  height: 700px;
  width: 400px;
  padding: 0 2em 0 2em;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));

  right: 0;
  @media (min-width: 1280px) {
    right: 10%;
  }
  @media (min-width: 1680px) {
    right: 20%;
  }
`;

const H3 = styled.h3`
  padding-top: 4em;
  padding-bottom: 2em;
`;

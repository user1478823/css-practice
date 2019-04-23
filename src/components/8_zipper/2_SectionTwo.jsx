import React from "react";
import styled from "styled-components";

import Image from "./../../assets/zipper/image-03.jpg";

import { PrimaryColor, BgColor } from "./global/Global.jsx";

export default () => (
  <Section>
    <Content>
      <H3>Mauris quis odio id sapien</H3>
      <p>
        Phasellus fringilla pharetra nunc sit amet fringilla. Vestibulum augue
        turpis, molestie sit amet odio eget, ornare mattis nisl.
        <br />
        <br />
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Integer ut justo arcu. Nullam a semper odio. Nam et
        conque libero, et placerat est.
        <br />
        <br />
        Integer consectetur hendrerit dolor, quis scelerisque risus mattis quis.
        Pellentesque dapibus ornare nisl. Fusce facilisis pulvinar magna. Class
        aptent taciti sociosqu.
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
  background: ${BgColor};

  display: flex;
  flex-direction: column;
  justify-content: center;

  left: 0;
  @media (min-width: 1280px) {
    left: 10%;
  }
  @media (min-width: 1680px) {
    left: 20%;
  }
`;

const H3 = styled.h3`
  padding-bottom: 1.5em;
  color: ${PrimaryColor};
`;

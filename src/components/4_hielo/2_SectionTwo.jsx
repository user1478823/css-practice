import React from "react";
import styled from "styled-components";

import Image from "./../../assets/hielo/bg.jpg";

export default () => (
  <Section>
    <div>
      <AboveTitle>
        NAM VEL ANTE SIT AMET LIBERO SCELERISQUE FACILISIS ELEIFEND VITAE URNA
      </AboveTitle>
      <Hr />
      <Title>Morbi maximus justo</Title>
    </div>
  </Section>
);

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4em;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;

  button {
    @media (min-width: 768px) {
      padding 1em 2.2em;
      font-size: 1rem;
    }
    @media (min-width: 980px) {
      font-size: 1.2rem;
    }
    @media (min-width: 1280px) {
      padding: 1em 2.5em;
      font-size: 1.3rem;
    }
  }
`;

const AboveTitle = styled.p`
  letter-spacing: 0.2em;
  color: #a6a6a6;
  font-weight: 300;
  font-size: 0.7rem;
  line-height: 1.5em;
  padding: 1em 2em 0.8em 2em;
  @media (min-width: 768px) {
    font-size: 0.8em;
  }
  @media (min-width: 1280px) {
    font-size: 0.9rem;
  }
  @media (min-width: 1680px) {
    font-size: 1rem;
  }
`;

const Hr = styled.hr`
  width: 80%;
  margin-left: 10% !important;
  margin-right: 10% !important;
  border: none; //remove default style
  border-bottom: 1px solid #a6a6a6; //apply style
`;

const Title = styled.p`
  color: #fff;
  font-size: 1.6rem;
  padding: 0.5em 2em 0.8em 1.5em;
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1280px) {
    font-size: 2rem;
  }
  @media (min-width: 1680px) {
    font-size: 2.2rem;
  }
`;

import React, { Component } from "react";
import styled from "styled-components";

import { TealBtn, WhiteBorderBtn } from "./../global/Global.jsx";

export default () => (
  <Section>
    <div id="container">
      <TitleDiv>
        <p id="title">GET IN TOUCH</p>
      </TitleDiv>

      <Form>
        <input
          style={{ gridColumn: "1 / 2", gridRow: "1" }}
          id="name"
          type="text"
          placeholder="Name"
        />
        <input
          style={{ gridColumn: "2 / 3", gridRow: "1" }}
          id="email"
          type="text"
          placeholder="Email"
        />
        <textarea
          style={{ gridColumn: "1 / 3", gridRow: "2" }}
          name=""
          id="message"
          rows="7"
          placeholder="Message"
        />

        <BtnDiv>
          <TealBtn style={ButtonStyle}>SUBMIT</TealBtn>
          <WhiteBorderBtn style={ButtonStyle}>RESET</WhiteBorderBtn>
        </BtnDiv>
      </Form>
    </div>
  </Section>
);

const Section = styled.div`
  background-color: #242936;
  padding: 6em 0;

  display: flex;
  align-items: center;
  justify-content: center;

  #container {
    padding: 4em 4em 3em 3em;
    background-color: #242936;
  }

  @media (min-width: 768px) {
    grid-template-columns: 3em auto 3em;
  }
  @media (min-width: 1280px) {
    grid-template-columns: minmax(3em, 1fr) auto minmax(3em, 1fr);
    #container {
      padding: 6em 5em 3em 3em;
      width: 65em;
    }
  }
  @media (min-width: 1680px) {
    #container {
      padding: 8em 7em 5em 5em;
      width: 80em;
    }
`;

const TitleDiv = styled.div`
  text-align: center;
  #title {
    font-weight: 900;
    font-size: 2rem;
    color: #fff;
  }
`;

const Form = styled.form`
  input,
  textarea {
    font-size: 1rem;
    width: 100%;
    margin: 2em 0;
    padding: 0.5em 0;
    background-color: #2f3440;
    border: 1px solid #2f3440;
    border-radius: 5px;
    text-indent: 10px;
  }

  @media (min-width: 768px) {
    input,
    textarea {
      padding: 0.75em 0;
    }
  }
  @media (min-width: 1000px) {
    display: grid;
    column-gap: 4em;
    grid-template-columns: 1fr 1fr;
    input,
    textarea {
      spadding: 0.85em 0;
    }
  }
  @media (min-width: 1680px) {
    input,
    textarea {
      font-size: 1.1rem;
      padding: 1em 0;
    }
  }
`;

const BtnDiv = styled.div`
  grid-column: 1 / 3;
  grid-row: 7;
  text-align: center;
  padding: 2em;

  #btn {
    height: 4em;
    padding: 1em 2em 1em 2em;
    background-color: #3498db;
    color: white;
    border-radius: 5px;
    font-weight: 900;
    font-size: 0.8rem;
    &:hover {
      background-color: #003a58;
      color: #3498db;
      border-color: #003a58;
    }
    @media (min-width: 768px) {
      padding: 1em 2.5em 1em 2.5em;
      font-size: 1rem;
    }
    @media (min-width: 1000px) {
      padding: 1em 3em 1em 3em;
    }
    @media (min-width: 1680px) {
      padding: 1em 3.5em 1em 3.5em;
    }
  }
`;

const ButtonStyle = {
  marginTop: "3em",
  justifySelf: "center",
  width: "50%",
  height: "55px"
};

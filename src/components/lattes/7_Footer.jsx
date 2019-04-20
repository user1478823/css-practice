import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faClock
} from "@fortawesome/free-solid-svg-icons";

import { PrimaryColor } from "./global/Global.jsx";

export default () => (
  <Section>
    <H2>CONTACT US</H2>
    <P>
      If you have some Questions or need Help! Please Contact Us! We make Cool
      and Clean Design for your Business
    </P>
    <Content style={{ gridArea: "address" }}>
      <h3>Our Business Office</h3>
      <p>3422 Street, Barcelona 432, Spain, New Building North, 15th Floor</p>
      <p>
        <FontAwesomeIcon className="fa" icon={faPhone} />
        +101 377 655 22125
      </p>
      <p>
        <FontAwesomeIcon className="fa" icon={faEnvelope} />
        mail@yourcompany.com
      </p>
    </Content>
    <Content style={{ gridArea: "hours" }}>
      <h3>Business Hours</h3>

      <p>
        <FontAwesomeIcon className="fa" icon={faClock} />
        Weekdays: 9am to 8pm
      </p>
      <p>
        <FontAwesomeIcon className="fa" icon={faClock} />
        Saturday: 9am to 2pm
      </p>
      <p>
        <FontAwesomeIcon className="fa" icon={faClock} />
        Sunday: Closed
      </p>
    </Content>
    <div style={{ gridArea: "contact" }}>
      <form>
        <Name type="text" placeholder="Name" />
        <Email type="text" placeholder="Email" />
        <Message rows="6" placeholder="Message" />
        <Button>Send Message</Button>
      </form>
    </div>
  </Section>
);

const Section = styled.section`
  padding: 4em 0;
  color: black;
  background-color: white;

  display: grid;
  row-gap: 3em;
  justify-content: center;
  grid-template-columns: 350px;
  grid-template-areas:
    "title"
    "body"
    "address"
    "hours"
    "contact";

  @media (min-width: 576px) {
    grid-template-columns: 500px;
  }
  @media (min-width: 768px) {
    row-gap: 3em;
    column-gap: 4em;
    grid-template-columns: 300px 300px;
    grid-template-areas:
      "title          title"
      "body           body"
      "address        hours"
      "contact        contact";
  }
  @media (min-width: 980px) {
    row-gap: 3em;
    column-gap: 4em;
    grid-template-columns: 430px 430px;
    grid-template-areas:
      "title          title"
      "body           body"
      "address        hours"
      "contact        contact";
  }
  @media (min-width: 1280px) {
    column-gap: 1em;
    grid-template-columns: 300px 250px 600px;
    grid-template-areas:
      "title          title        title"
      "body           body         body"
      "address        hours        contact";
  }
  @media (min-width: 1680px) {
    grid-template-columns: 400px 300px 800px;
  }
`;

const H2 = styled.h2`
  font-family: "Rubik", sans-serif !important;
  grid-area: title;
  justify-self: center;
`;

const P = styled.p`
  grid-area: body;
  justify-self: center;
`;

const Content = styled.div`
  justify-self: left;
  * {
    padding-top: 0.5em;
  }

  .fa {
    font-size: 1.2rem;
    margin-right: 0.5em;
    color: #797979;
  }
`;

const InputTextArea = `
  font-size: 1rem;
  padding: 1em 0;
  background-color: #fff;
  border: 1px solid #797979;
  text-indent: 10px;
`;

const Name = styled.input`
  width: 100%;
  ${InputTextArea}
  @media (min-width: 768px) {
    float: left;
    width: 48%;
  }
`;

const Email = styled.input`
  width: 100%;
  margin-top: 1em;
  ${InputTextArea}
  @media (min-width: 768px) {
    margin-top: 0;
    float: right;
    width: 48%;
  }
`;

const Message = styled.textarea`
  margin: 1em 0;
  width: 100%;
  ${InputTextArea}
  @media (min-width: 768px) {
    margin: 2em 0;
  }
`;

const Button = styled.button`
  padding: 1em 1.5em;
  background-color: ${PrimaryColor};
  opacity: 0.8;
  color: white;
  font-weight: 900;
  font-size: 1.1rem;
  transition: 0.2s ease-in;
  &:hover {
    opacity: 1;
  }
`;

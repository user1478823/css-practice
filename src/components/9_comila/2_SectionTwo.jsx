import React, { Component } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faSync,
  faComments
} from "@fortawesome/free-solid-svg-icons";

import Image from "./../../assets/9_comila/slide-2.jpg";

export default class Footer extends Component {
  state = {};
  render() {
    return (
      <Section>
        <Container style={{ gridArea: "one" }}>
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon className="fa" icon={faLaptop} />
            <div>
              <h3>RESPONSIVE</h3>
              <p>
                Recusandae voluptatem quam aspernatur, dicta nostrum eum
                quisquam soluta est minima ex consequatur assumenda in natus,
                repudiandae explicabo id dolore autem.
              </p>
            </div>
          </div>
        </Container>
        <Container style={{ gridArea: "two" }}>
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon className="fa" icon={faSync} />
            <div>
              <h3>BOOTSTRAP</h3>
              <p>
                Necessitatibus quibusdam tempore eum dolore. Optio quo facilis
                expedita, natus numquam adipisci vel odit repellat facere
                consectetur dolor ipsa sequi perferendis distinctio.
              </p>
            </div>
          </div>
        </Container>
        <Container style={{ gridArea: "three" }}>
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon className="fa" icon={faComments} />
            <div>
              <h3>SUPPORT</h3>
              <p>
                Quo aliquid provident voluptatum officia optio voluptatibus,
                autem repellendus, commodi expedita ipsam et cupiditate? Eius
                deserunt expedita quae aperiam eligendi quo pariatur.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    );
  }
}

const Container = styled.div`
  padding: 2em;
  background-color: rgba(0, 0, 0, 0.4);
  max-width: 400px;
  @media (min-width: 576px) {
    max-width: 500px;
  }
  @media (min-width: 768px) {
    max-width: 600px;
  }
  @media (min-width: 980px) {
    max-width: 250px;
  }
  @media (min-width: 1280px) {
    max-width: 280px;
  }
  @media (min-width: 1680px) {
    max-width: 300px;
  }
`;

const Section = styled.section`
  padding: 9em 2em 4em 2em;
  color: white;

  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: grid;
  justify-content: center;
  grid-gap: 3em;
  grid-template-columns: auto;
  grid-template-areas:
    "one"
    "two"
    "three";

  .fa {
    font-size: 30px;
    padding-top: 0.5em;
    padding-right: 0.5em;
    @media (min-width: 980px) {
      font-size: 30px;
    }
    @media (min-width: 1280px) {
      font-size: 40px;
    }
    @media (min-width: 1680px) {
      font-size: 50px;
    }
  }

  h3 {
    padding-top: 1em;
    padding-bottom: 0.5em;
  }

  p {
    color: white;
  }

  @media (min-width: 980px) {
    grid-template-columns: auto auto auto;
    grid-template-areas: "one two three";
  }
  @media (min-width: 1280px) {
    grid-gap: 5em;
  }
  @media (min-width: 1680px) {
    grid-gap: 7em;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

import React, { Component } from "react";
import styled from "styled-components";

import ArrowDown16 from "./../../assets/transitive/arrow-down-16.png";
import ArrowDown20 from "./../../assets/transitive/arrow-down-20.png";
import ArrowDown24 from "./../../assets/transitive/arrow-down-24.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <Section>
        <div id="container">
          <this.props.titleDiv>
            <p id="title">GET IN TOUCH</p>
          </this.props.titleDiv>
          <this.props.hr />
          <Form>
            <label style={{ gridColumn: "1 / 2", gridRow: "1" }} for="name">
              Name
            </label>
            <input
              style={{ gridColumn: "1 / 2", gridRow: "2" }}
              id="name"
              type="text"
              placeholder="Name"
            />

            <label style={{ gridColumn: "2 / 3", gridRow: "1" }} for="email">
              Email
            </label>
            <input
              style={{ gridColumn: "2 / 3", gridRow: "2" }}
              id="email"
              type="text"
              placeholder="Email"
            />

            <label
              style={{ gridColumn: "1 / 3", gridRow: "3" }}
              for="department"
            >
              Department
            </label>

            <select
              style={{ gridColumn: "1 / 3", gridRow: "4" }}
              id="department"
            >
              <option value="default">- Category -</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="shipping">Shipping</option>
              <option value="administration">Administration</option>
              <option value="human-resources">Human Resources</option>
            </select>

            <label style={{ gridColumn: "1 / 3", gridRow: "5" }} for="message">
              Message
            </label>
            <textarea
              style={{ gridColumn: "1 / 3", gridRow: "6" }}
              name=""
              id="message"
              rows="7"
              placeholder="Message"
            />

            <BtnDiv>
              <button id="btn">SEND MESSAGE</button>
            </BtnDiv>
          </Form>
        </div>
      </Section>
    );
  }
}

export default Footer;

const Section = styled.section`
  background-color: #f2f2f2;
  padding: 6em 0;

  display: grid;
  grid-template-columns: 2em auto 2em;
  grid-template-areas: ". a .";

  #container {
    grid-area: a;
    padding: 4em 4em 3em 3em;
    background-color: white;
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

const Form = styled.form`
  label {
    font-size: 1.1rem;
    display: block;
    padding: 2em 0 1em 0;
  }

  input,
  select,
  textarea {
    font-size: 1rem;
    width: 100%;
    padding: 0.5em 0;
    background-color: #f2f2f2;
    border: 1px solid #a6a6bf;
    border-radius: 5px;
    text-indent: 10px;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* Some browsers will not display the caret when using calc, so we put the fallback first */
    background: url(${ArrowDown16}) #f2f2f2 no-repeat 98.5% !important; /* !important used for overriding all other customisations */
    background: url(${ArrowDown16}) #f2f2f2 no-repeat calc(100% - 10px) !important; /* Better placement regardless of input width */
  }

  @media (min-width: 768px) {
    label {
      padding: 2.5em 0 1em 0;
    }
    input,
    select,
    textarea {
      padding: 0.75em 0;
    }
  }
  @media (min-width: 1000px) {
    label {
      padding: 3em 0 1em 0;
    }
    display: grid;
    column-gap: 4em;
    grid-template-columns: 1fr 1fr;
    input,
    select,
    textarea {
      spadding: 0.85em 0;
    }
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      /* Some browsers will not display the caret when using calc, so we put the fallback first */
      background: url(${ArrowDown20}) #f2f2f2 no-repeat 98.5% !important; /* !important used for overriding all other customisations */
      background: url(${ArrowDown20}) #f2f2f2 no-repeat calc(100% - 10px) !important; /* Better placement regardless of input width */
    }
  }
  @media (min-width: 1680px) {
    label {
      font-size: 1.2rem;
    }
    input,
    select,
    textarea {
      font-size: 1.1rem;
      padding: 1em 0;
    }
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      /* Some browsers will not display the caret when using calc, so we put the fallback first */
      background: url(${ArrowDown24}) #f2f2f2 no-repeat 98.5% !important; /* !important used for overriding all other customisations */
      background: url(${ArrowDown24}) #f2f2f2 no-repeat calc(100% - 10px) !important; /* Better placement regardless of input width */
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

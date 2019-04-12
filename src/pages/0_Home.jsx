import React, { Component } from "react";
import styled from "styled-components";

export default class Home extends Component {
  state = {};
  render() {
    return (
      <Background>
        <Div>
          <Button href="http://localhost:3000/urban">URBAN</Button>
          <Button href="http://localhost:3000/transitive">TRANSITIVE</Button>
          <Button href="http://localhost:3000/retrospective">
            RETROSPECTIVE
          </Button>
          <Button href="http://localhost:3000/hielo">HIELO</Button>
          <Button href="http://localhost:3000/snapshot">SNAPSHOT</Button>
          <Button href="http://localhost:3000/startbootstrap">
            STARTBOOTSTRAP
          </Button>
        </Div>
      </Background>
    );
  }
}

const Background = styled.div`
  text-align: center;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("https://blog.oxforddictionaries.com/wp-content/uploads/mountain-names.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const Button = styled.a`
  color: #eee;
  text-decoration: none;
  margin: 1em;
  padding: 10px 20px;
  background-color: #3498db;
  border-style: solid;
  border-color: #3498db;
  font-size: 1.5rem;
  &:hover {
    background-color: #003a58;
    color: #eee;
    border-color: #003a58;
  }
`;

import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {};
  render() {
    return (
      <Background>
        <Div>
          <Button>
            <Link to="/urban">URBAN</Link>
          </Button>
          <Button>
            <Link to="/transitive">TRANSITIVE</Link>
          </Button>
          <Button>
            <Link to="/retrospective">RETROSPECTIVE</Link>
          </Button>
          <Button>
            <Link to="/hielo">HIELO</Link>
          </Button>
          <Button>
            <Link to="/snapshot">SNAPSHOT</Link>
          </Button>
          <Button>
            <Link to="/startbootstrap">STARTBOOTSTRAP</Link>
          </Button>
          <Button>
            <Link to="/lattes">LATTES</Link>
          </Button>
          <Button>
            <Link to="/zipper">ZIPPER</Link>
          </Button>
          <Button>
            <Link to="/comila">COMILA</Link>
          </Button>
          <Button>
            <Link to="/touche">TOUCHE</Link>
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

const Button = styled.button`
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
  a {
    color: #eee;
    text-decoration: none;
  }
`;

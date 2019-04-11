import React, { Component } from "react";
import styled from "styled-components";

import Footer from "./footer/0_Footer";

import Image01 from "./../../assets/snapshot/thumbs/01.jpg";
import Image02 from "./../../assets/snapshot/thumbs/05.jpg";
import Image03 from "./../../assets/snapshot/thumbs/09.jpg";
import Image04 from "./../../assets/snapshot/thumbs/02.jpg";
import Image05 from "./../../assets/snapshot/thumbs/06.jpg";
import Image06 from "./../../assets/snapshot/thumbs/10.jpg";
import Image07 from "./../../assets/snapshot/thumbs/03.jpg";
import Image08 from "./../../assets/snapshot/thumbs/07.jpg";
import Image09 from "./../../assets/snapshot/thumbs/11.jpg";
import Image10 from "./../../assets/snapshot/thumbs/04.jpg";
import Image11 from "./../../assets/snapshot/thumbs/08.jpg";
import Image12 from "./../../assets/snapshot/thumbs/12.jpg";

const images = [
  { image: Image01 },
  { image: Image02 },
  { image: Image03 },
  { image: Image04 },
  { image: Image05 },
  { image: Image06 },
  { image: Image07 },
  { image: Image08 },
  { image: Image09 },
  { image: Image10 },
  { image: Image11 },
  { image: Image12 }
];

const people = [
  { image: Image01 },
  { image: Image04 },
  { image: Image07 },
  { image: Image10 }
];

const places = [
  { image: Image02 },
  { image: Image05 },
  { image: Image08 },
  { image: Image11 }
];

const things = [
  { image: Image03 },
  { image: Image06 },
  { image: Image09 },
  { image: Image12 }
];

export default class Gallery extends Component {
  constructor(props, context) {
    super(props, context);
    this.update = this.update.bind(this);
  }

  state = {
    current: images
  };

  update(action) {
    var listToUpdate = [];
    switch (action) {
      case "people":
        listToUpdate = people;
        break;
      case "places":
        listToUpdate = places;
        break;
      case "things":
        listToUpdate = things;
        break;
      case "all":
        listToUpdate = images;
        break;
    }
    this.setState({
      current: listToUpdate
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header>
          <Title>Gallery</Title>
          <Buttons>
            <Button onClick={() => this.update("all")}>All</Button>
            <Button onClick={() => this.update("people")}>People</Button>
            <Button onClick={() => this.update("places")}>Places</Button>
            <Button onClick={() => this.update("things")}>Things</Button>
          </Buttons>
          <Content>
            {this.state.current.map(item => {
              return <Img src={item.image} alt="" />;
            })}
          </Content>
        </Header>
        <Footer />
      </React.Fragment>
    );
  }
}

const Header = styled.header`
  margin: 3em;
`;

const Content = styled.div`
  padding-top: 2em;
  padding-bottom: 2em;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  align-content: center;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;

const Title = styled.p`
  float: left
  color: #555;
  font-weight: 900;
  font-size: 2rem;
  @media (min-width: 768px) {
    justify-self: center;
  }
  @media (min-width: 980px) {
    font-size 2.2rem;
  }
  @media (min-width: 1680px) {
    font-size 2.5rem;
  }
`;

const Buttons = styled.div`
  @media (max-width: 768px) {
    float: left;
    width: 100%;
    padding-top: 1em;
  }
  float: right;
`;

const Button = styled.button`
  padding: 0.7em 1em;
  background-color: #3f9dff;
  color: white;
  font-weight: 900;
  font-size: 1.2rem;
  transition: 0.3s ease-in;
  &:hover {
    background-color: #19b5fe;
  }
  @media (min-width: 576px) {
    padding: 0.7em 1.5em;
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    width: 25%;
  }
  @media (min-width: 1280px) {
    padding: 0.7em 2em;
    font-size: 1.5rem;
  }
`;

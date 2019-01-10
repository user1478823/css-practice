import React, { Component } from "react";
import styled from "styled-components";

import Image from "./../assets/transitive/bg.jpg";

import Header from "./../components/transitive/0_Header";
import SectionOne from "./../components/transitive/1_SectionOne";
import SectionTwo from "./../components/transitive/2_SectionTwo";
import SectionThree from "./../components/transitive/3_SectionThree";
import SectionFour from "./../components/transitive/4_SectionFour";

class Transitive extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <SectionOne styles={Card} />
        <SectionTwo bgSection={Section} />
        <SectionThree styles={Card} />
        <SectionFour bgSection={Section} />
      </React.Fragment>
    );
  }
}
export default Transitive;

export const Section = styled.section`
  padding: 4em;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
`;

export const Card = ({ content }) => {
  const Container = styled.div`
    grid-area: ${content.gridArea};
    img {
      height: auto;
      width: 100%;
      margin-bottom: -1em;
    }
    #padding {
      background-color: #fff;
      padding: 4em 2em 2em 2em;
    }
    @media (min-width: 768px) {
      #padding {
        padding: 5em 3em 3em 3em;
      }
    }
  `;

  const TitleDiv = styled.div`
    text-align: center;
    #title {
      font-weight: 900;
      font-size: 2rem;
      color: #000;
    }
    #sub-title {
      font-size: 1.3rem;
    }
  `;

  const Hr = styled.hr`
    margin: 2em 0;
    border: none; //remove default style
    border-bottom: 1px solid #a6a6bf; //apply style
  `;

  return (
    <Container id="container">
      {content.image}
      <div id="padding">
        <TitleDiv>
          <p id="title">{content.title}</p>
          <p id="sub-title">{content.subTitle}</p>
        </TitleDiv>
        <Hr />
        {content.body}
      </div>
    </Container>
  );
};

import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faPaperPlane,
  faNewspaper,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

import { PrimaryColor, Title, Hr } from "./global/Global.jsx";

export default () => (
  <Section>
    <Title style={{ gridArea: "title" }}>At Your Service</Title>
    <Hr
      style={{
        backgroundColor: PrimaryColor,
        borderColor: PrimaryColor,
        gridArea: "hr"
      }}
    />
    <FontAwesomeIcon
      className="fa"
      style={{ gridArea: "diamond" }}
      icon={faGem}
    />
    <SubTitle style={{ gridArea: "diamond-title" }}>Sturdy Templates</SubTitle>
    <Body style={{ gridArea: "diamond-txt" }}>
      Our templates are updated regularly so they don't break.
    </Body>
    <FontAwesomeIcon
      className="fa"
      style={{ gridArea: "paper" }}
      icon={faPaperPlane}
    />
    <SubTitle style={{ gridArea: "paper-title" }}>Ready to Ship</SubTitle>
    <Body style={{ gridArea: "paper-txt" }}>
      You can use this theme as is, or you can make changes!
    </Body>
    <FontAwesomeIcon
      className="fa"
      style={{ gridArea: "news" }}
      icon={faNewspaper}
    />
    <SubTitle style={{ gridArea: "news-title" }}>Up to Date</SubTitle>
    <Body style={{ gridArea: "news-txt" }}>
      We update dependencies to keep things fresh.
    </Body>
    <FontAwesomeIcon
      className="fa"
      style={{ gridArea: "heart" }}
      icon={faHeart}
    />
    <SubTitle style={{ gridArea: "heart-title" }}>Made with Love</SubTitle>
    <Body style={{ gridArea: "heart-txt" }}>
      You have to make your websites with love these days!
    </Body>
  </Section>
);

const Section = styled.section`
  text-align: center;
  padding: 4em 1em;
  color: black;
  background-color: white; 
  * {
    justify-self: center;
  }

  .fa {
    font-size: 50px;
    padding-bottom: 10px;
    color: ${PrimaryColor};
  }

  @media (min-width: 980px) {
    display: grid;
    justify-content: center;
    grid-gap: 1em;
    grid-template-columns: repeat(4, 150px);
    grid-template-areas:
      "title          title          title        title"
      "hr             hr             hr           hr"
      "diamond        diamond        paper        paper"
      "diamond-title  diamond-title  paper-title  paper-title"
      "diamond-txt    diamond-txt    paper-txt    paper-txt"
      "news           news           heart        heart"
      "news-title     news-title     heart-title  heart-title"
      "news-txt       news-txt       heart-txt    heart-txt";
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 250px);
    grid-template-areas:
      "title          title        title       title"
      "hr             hr           hr          hr"
      "diamond        paper        news        heart"
      "diamond-title  paper-title  news-title  heart-title"
      "diamond-txt    paper-txt    news-txt    heart-txt";
  }
  @media (min-width: 1680px) {
    grid-template-columns: repeat(4, 300px);
  }
`;

const SubTitle = styled.p`
  font-size: 1.8rem;
`;

const Body = styled.p`
  font-weight: 300;
  font-size: 1.12rem;
  line-height: 1.5em;
  @media (max-width: 980px) {
    padding-bottom: 1em;
  }
  @media (min-width: 1280px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1680px) {
    font-size: 1.1rem;
  }
`;

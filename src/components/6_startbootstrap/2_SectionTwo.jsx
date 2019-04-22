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
    <h2 style={{ gridArea: "title" }}>At Your Service</h2>
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
    <h3 style={{ gridArea: "diamond-title" }}>Sturdy Templates</h3>
    <p style={{ gridArea: "diamond-txt" }}>
      Our templates are updated regularly so they don't break.
    </p>
    <FontAwesomeIcon
      className="fa"
      style={{ gridArea: "paper" }}
      icon={faPaperPlane}
    />
    <h3 style={{ gridArea: "paper-title" }}>Ready to Ship</h3>
    <p style={{ gridArea: "paper-txt" }}>
      You can use this theme as is, or you can make changes!
    </p>
    <FontAwesomeIcon
      className="fa"
      style={{ gridArea: "news" }}
      icon={faNewspaper}
    />
    <h3 style={{ gridArea: "news-title" }}>Up to Date</h3>
    <p style={{ gridArea: "news-txt" }}>
      We update dependencies to keep things fresh.
    </p>
    <FontAwesomeIcon
      className="fa"
      style={{ gridArea: "heart" }}
      icon={faHeart}
    />
    <h3 style={{ gridArea: "heart-title" }}>Made with Love</h3>
    <p style={{ gridArea: "heart-txt" }}>
      You have to make your websites with love these days!
    </p>
  </Section>
);

const Section = styled.section`
  text-align: center;
  padding: 4em 0;
  color: black;
  background-color: white;

  display: grid;
  justify-content: center;
  grid-gap: 1em;
  grid-template-columns: repeat(4, 100px);
  grid-template-areas:
    "title          title          title        title"
    "hr             hr             hr           hr"
    "diamond        diamond        paper        paper"
    "diamond-title  diamond-title  paper-title  paper-title"
    "diamond-txt    diamond-txt    paper-txt    paper-txt"
    "news           news           heart        heart"
    "news-title     news-title     heart-title  heart-title"
    "news-txt       news-txt       heart-txt    heart-txt";

  * {
    justify-self: center;
  }

  .fa {
    font-size: 50px;
    padding-top: 0.5em;
    color: ${PrimaryColor};
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 125px);
  }
  @media (min-width: 980px) {
    grid-template-columns: repeat(4, 150px);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 300px);
    grid-template-areas:
      "title          title        title       title"
      "hr             hr           hr          hr"
      "diamond        paper        news        heart"
      "diamond-title  paper-title  news-title  heart-title"
      "diamond-txt    paper-txt    news-txt    heart-txt";
  }
  @media (min-width: 1680px) {
    grid-template-columns: repeat(4, 350px);
  }
`;

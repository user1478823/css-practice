import React, { Component } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faPhone,
  faEnvelope,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

import { PrimaryColor } from "./global/Global";

export default class Hamburger extends Component {
  constructor(props, context) {
    super(props, context);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    let tog01 = document.querySelector(".trigger");
    let tog02 = document.querySelector(".toggle");
    let tog03 = document.querySelector(".menu-icon01");
    let tog04 = document.querySelector(".menu-icon02");
    let tog05 = document.querySelector(".menu-icon03");
    tog01.classList.toggle("shazam");
    tog02.classList.toggle("shazam");
    tog03.classList.toggle("shazam");
    tog04.classList.toggle("shazam");
    tog05.classList.toggle("shazam");
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.toggleMenu()}>
          <Span className="toggle">
            <FontAwesomeIcon className="open-icon" icon={faBars} />
            <FontAwesomeIcon className="close-icon" icon={faTimes} />
          </Span>
        </Button>
        <Ul>
          <Li className="menu-icon01">
            <FontAwesomeIcon className="menu-icon-style" icon={faHeart} />
            <p>Get Started!</p>
          </Li>
          <Li className="menu-icon02">
            <FontAwesomeIcon className="menu-icon-style" icon={faPhone} />
            <p>123-456-6789</p>
          </Li>
          <Li className="menu-icon03">
            <FontAwesomeIcon className="menu-icon-style" icon={faEnvelope} />
            <p>feedback@startbootstrap.com</p>
          </Li>
        </Ul>
      </div>
    );
  }
}

const Ul = styled.ul`
  position: absolute;
  bottom: 0;
  left: 30px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  li:nth-child(2) {
    margin-left: 40px;
  }
  li:nth-child(3) {
    margin-left: 80px;
  }

  p {
    color: white;
  }

  .shazam {
    transform: translateX(0);
    transition: transform 0.35s 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;

const Li = styled.li`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  .menu-icon-style {
    color: ${PrimaryColor};
    font-size: 2.5em;
    margin-right: 0.5em;
    transition: border-color 0.2s;
  }
  transform: translateX(-500px);
  transition: transform 0.7s 0s cubic-bezier(1, 0.005, 0.24, 1);
`;

//div and not button because button shows blue indicator when clicked
const Button = styled.div`
  background-color: ${PrimaryColor};
  border-bottom-right-radius: 100%;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  width: 120px;
  height: 80px;

  &:active {
  }

  .shazam .open-icon {
    transform: rotate(-22deg);
  }
  .shazam .close-icon {
    transform: rotate(0);
  }
`;

const Span = styled.span`
  .open-icon,
  .close-icon {
    color: white;
    font-size: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -15px;
    margin-left: -15px;
    transition: transform 0.7s cubic-bezier(1, 0.005, 0.24, 1);
  }
  .open-icon {
    transform-origin: -100px -100px;
  }
  .close-icon {
    transform: rotate(20deg);
    transform-origin: -100px -160px;
  }
`;

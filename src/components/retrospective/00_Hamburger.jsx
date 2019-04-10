import React from "react";
import styled from "styled-components";

const items = [
  { name: "Home" },
  { name: "About" },
  { name: "Services" },
  { name: "Contact" }
];

export default () => (
  <Animations>
    <MenuWrap className="menu-wrap">
      <Toggler type="checkbox" className="toggler" />
      <Hamburger className="hamburger">
        <Icon className="icon" />
      </Hamburger>
      <Menu className="menu">
        <Teal>
          <Blue>
            <ul>
              {items.map(item => {
                return (
                  <Li>
                    <A href="#">{item.name}</A>
                  </Li>
                );
              })}
            </ul>
          </Blue>
        </Teal>
      </Menu>
    </MenuWrap>
  </Animations>
);

const Animations = styled.div`
  /* Toggler Animation */
  .menu-wrap .toggler:checked + .hamburger > div {
    transform: rotate(135deg);
  }

  /* Turns Lines Into X */
  .menu-wrap .toggler:checked + .hamburger > div:before,
  .menu-wrap .toggler:checked + .hamburger > div:after {
    top: 0;
    transform: rotate(90deg);
  }

  /* Rotate On Hover When Checked */
  .menu-wrap .toggler:checked:hover + .hamburger > div {
    transform: rotate(225deg);
  }

  /* Show Menu */
  .menu-wrap .toggler:checked ~ .menu {
    visibility: visible;
  }

  .menu-wrap .toggler:checked ~ .menu > div {
    transform: scale(1);
    transition-duration: 1s;
  }

  .menu-wrap .toggler:checked ~ .menu > div > div {
    opacity: 1;
    transition: opacity 0.4s ease 0.4s;
  }

  .menu-wrap .toggler:checked ~ .hamburger .icon {
    background: rgba(13, 110, 139);
  }
`;

const MenuWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 40px;
  height: 30px;
  margin: 1em;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 1280px) {
    width: 60px;
    height: 60px;
  }
`;

const Toggler = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Hamburger = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  position: relative;
  flex: none;
  width: 100%;
  height: 4px;
  background: rgba(67, 194, 166);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;

  /* Hamburger Lines - Top & Bottom */
  &:before,
  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    top: -10px;
    width: 100%;
    height: 4px;
    background: inherit;
  }

  /* Moves Bottom Line Down To Correct Position */
  &:after {
    top: 10px;
  }

  @media (min-width: 768px) {
    &:before,
    &:after {
      top: -15px;
    }
    &:after {
      top: 15px;
    }
  }
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Teal = styled.div`
  background: rgba(67, 194, 166, 0.75);
  border-radius: 50%;
  width: 200vw;
  height: 200vw;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: all 0.4s ease;
`;

const Blue = styled.div`
  background: rgba(13, 110, 139, 0.9);
  border-radius: 50%;
  padding: 2em 5em;
  text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
  transition: opacity 0.4s ease;
`;

const Li = styled.li`
  list-style: none;
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem;
`;

const A = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.4s ease;
`;

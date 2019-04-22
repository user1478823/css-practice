import styled from "styled-components";

export const FontsMain = styled.main`
  @import url("https://fonts.googleapis.com/css?family=Comfortaa");
  * {
    font-family: "Comfortaa", cursive;
  }
  h1 {
    font-weight: 900;
    line-height: 1.4em;
    font-size: 2rem;
    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
    }
    @media (min-width: 1280px) {
      font-size: 3rem;
    }
    @media (min-width: 1680px) {
      font-size: 3.2rem;
    }
  }
  h2 {
    font-weight: 900;
    font-size: 2rem;
    @media screen and (min-width: 768px) {
      font-size: 2.1rem;
    }
    @media (min-width: 1280px) {
      font-size: 2.3rem;
    }
    @media (min-width: 1680px) {
      font-size: 2.4rem;
    }
  }
  h3 {
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.4em;
    @media screen and (min-width: 768px) {
      font-size: 1.4rem;
    }
    @media (min-width: 1280px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1680px) {
      font-size: 1.6rem;
    }
  }
  h4 {
    font-weight: 300;
    font-size: 1.15rem;
    line-height: 1.5em;
    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
    @media (min-width: 1280px) {
      font-size: 1.3rem;
    }
    @media (min-width: 1680px) {
      font-size: 1.4rem;
    }
  }
  p {
    font-weight: 300;
    line-height: 1.5em;
    font-size: 1rem;
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
    @media (min-width: 1280px) {
      font-size: 1.15rem;
    }
    @media (min-width: 1680px) {
      font-size: 1.2rem;
    }
  }
`;

import styled from "styled-components";

export const FontsMain = styled.main`
  @import url("https://fonts.googleapis.com/css?family=Dancing+Script|Raleway");

  * {
    font-family: "Raleway", sans-serif;
  }
  h1 {
    font-family: "Dancing Script", cursive;
    font-size: 6.5rem;
    @media screen and (min-width: 768px) {
      font-size: 7rem;
    }
    @media (min-width: 1280px) {
      font-size: 8rem;
    }
    @media (min-width: 1680px) {
      font-size: 9rem;
    }
  }
  h2 {
    font-weight: 300;
    font-size: 1.5rem;
    @media screen and (min-width: 768px) {
      font-size: 1.6rem;
    }
    @media (min-width: 1280px) {
      font-size: 1.8rem;
    }
    @media (min-width: 1680px) {
      font-size: 2rem;
    }
  }
  h3 {
    font-weight: 300;
    font-size: 1.2rem;
    @media screen and (min-width: 768px) {
      font-size: 1.3rem;
    }
    @media (min-width: 1280px) {
      font-size: 1.4rem;
    }
    @media (min-width: 1680px) {
      font-size: 1.5rem;
    }
  }
  h4 {
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 1.5em;
  }
  p {
    color: #797979;
    font-weight: 300;
    line-height: 1.5em;
    @media (max-width: 1680px) {
      font-size: 0.9rem;
    }
  }
`;

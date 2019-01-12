import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import Video from "./../../assets/transitive/banner.mp4";
import Image from "./../../assets/transitive/banner.jpg";

export default () => (
  <Header>
    <MediaQuery query="(min-width: 480px)">
      <Content />
    </MediaQuery>
    <MediaQuery query="(min-width: 1280px)">
      <FullScreenVideoWrap>
        <video src={Video} autoPlay={true} loop={true} />
      </FullScreenVideoWrap>
      <HeaderOverlay />
      <Content />
    </MediaQuery>
  </Header>
);

const Content = () => (
  <Div>
    <p id="title">Transitive</p>
    <p id="body">
      A full responsive, business-oriented HTML5/CSS3 template built by
      Templated and released under the Creative Commons.
    </p>
    <button id="btn">GET STARTED</button>
  </Div>
);

const Div = styled.div`
  z-index: 2;
  padding: 5em 2em;
  #title {
    font-weight: 900;
    font-size: 2.2rem;
  }
  #body {
    padding-top: 1.5em;
    padding-bottom: 2em;
    color: #9f9f97;
    font-size: 1.2rem;
  }
  #btn {
    width: 100%
    padding: 0.6em;
    background-color: #3498db;
    color: white;
    border-radius: 5px;
    font-weight: 900;
    font-size: 1rem;
    &:hover {
      background-color: #003a58;
      color: #3498db;
      border-color: #003a58;
    }
  }
  @media screen and (min-width: 768px) {
    width: 750px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    #title {
      font-size: 3.5rem;
    }
    #body {
      padding-top: 1em;
      padding-bottom: 1.5em;
      font-size: 1.5rem;
    }
    #btn {
      width: 10em;
    }
  }
  @media screen and (min-width: 1680px) {
    width: 960px;
    #title {
      font-size: 4rem;
    }
    #body {
      font-size: 1.8rem;
    }
    #btn {
      font-size: 1.2em;
    }
  }
`;

const Header = styled.header`
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  @media screen and (min-width: 768px) {
    height: 100vh;
    position: relative;
  }
`;

const FullScreenVideoWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  video {
    min-width: 100%;
    min-height: 100%;
  }
`;

const HeaderOverlay = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  z-index: 1;
  opacity: 0.5;
`;

import styled from "styled-components";

import Image from "./../../assets/zipper/image-01.jpg";

export const Header = styled.header`
  text-align: center;
  height: ${props => props.heightMobile};
  color: white;
  background: ${props => props.theme.bg};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${props => props.bgPosition};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    height: ${props => props.height};
  }
`;

Header.defaultProps = {
  heightMobile: "50vh",
  bgPosition: "center",
  theme: {
    bg: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${Image})`
  },
  height: "100vh"
};

import styled from "styled-components";

const btn = `
  border-style: solid;
  border-width: 2px;
  border-radius: 30px;
  font-weight: 900;
`;

export const TealBtn = styled.button`
  ${btn}
  border-color: #51baa4;
  color: white;
  background-color: #51baa4;
`;

export const TealBorderBtn = styled.button`
  ${btn}
  color: #51baa4;
  background-color: transparent;
`;

export const WhiteBorderBtn = styled.button`
  ${btn}
  color: white;
  background-color: transparent;
`;

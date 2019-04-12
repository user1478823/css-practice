import styled from "styled-components";

export const PrimaryColor = `#f05f40`;

const ButtonTemplate = `
  border-style: solid;
  border-width: 2px;
  border-radius: 30px;
  font-weight: 900;
  padding: 0.8em 1.8em;
  font-size: 1rem;
`;

export const OrangeButton = styled.button`
  ${ButtonTemplate}
  border-color: ${PrimaryColor};
  color: white;
  background-color: ${PrimaryColor};
`;

export const WhiteButton = styled.button`
  ${ButtonTemplate}
  border-color: white;
  color: black;
  background-color: white;
`;

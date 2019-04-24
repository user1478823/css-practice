import styled from "styled-components";

export const PrimaryColor = `#72a411`;
export const PrimaryDark = `#407500`;

export const Hr = styled.hr`
  width: 15%;
  height: 1px;
  margin-top: 1em;
  margin-bottom: 2em;
  border: none; //remove default style
  border-bottom: 1px solid; //apply style
  background: ${PrimaryColor};
  border-color: ${PrimaryColor};
`;

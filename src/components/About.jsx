import React, { Component } from "react";
import styled from "styled-components";

export default class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Grid>
          <img src="https://picsum.photos/500/300" alt="" />
          <img src="https://picsum.photos/500/300" alt="" />
          <img src="https://picsum.photos/500/300" alt="" />
          <img src="https://picsum.photos/500/300" alt="" />
          <img src="https://picsum.photos/500/300" alt="" />
          <img src="https://picsum.photos/500/300" alt="" />
        </Grid>
      </React.Fragment>
    );
  }
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
`;

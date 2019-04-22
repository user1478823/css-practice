import React, { Component } from "react";
import styled from "styled-components";

export default class SectionTwo extends Component {
  state = {};
  render() {
    return (
      <this.props.bgSection>
        <Grid>
          <Content>
            <p id="title">TEMPUS FEUGIAT</p>
            <p id="body">
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
              magna a ullamcorper laoreet, lectus arcu
            </p>
            <Button>LEARN MORE</Button>
          </Content>
          <Border>
            <Content>
              <p id="title">ALIQUAM NULLA</p>
              <p id="body">
                Ut convallis, sem sit amet interdum consectetuer, odio augue
                aliquam leo, nec dapibus tortor nibh sed
              </p>
              <Button>LEARN MORE</Button>
            </Content>
          </Border>
          <Content>
            <p id="title">SED MAGNA</p>
            <p id="body">
              Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a
              diam sit amet mi ullamcorper vehicula
            </p>
            <Button>LEARN MORE</Button>
          </Content>
        </Grid>
      </this.props.bgSection>
    );
  }
}

const Grid = styled.div`
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1680px) {
    padding-top: 3em;
    padding-bottom: 3em;
  }
`;

const Content = styled.div`
  padding: 2em 0;
  #title {
    color: #fff;
    font-weight: 900;
    font-size: 1.5em;
  }
  #body {
    color: #9f9f97;
    padding: 2em 0;
  }
  @media (min-width: 1000px) {
    padding: 0 2em;
  }
`;

const Border = styled.div`
  border-top: 1px solid #484848;
  border-bottom: 1px solid #484848;
  @media (min-width: 1000px) {
    border-top: none;
    border-bottom: none;
    border-left: 1px solid #484848;
    border-right: 1px solid #484848;
  }
`;

const Button = styled.button`
  width: 10em;
  padding: 0.7em;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  border: 2px solid #484848;
  font-weight: 900;
  font-size: 0.9rem;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  @media (min-width: 1680px) {
    font-size: 1.1rem;
  }
`;

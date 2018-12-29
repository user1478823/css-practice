import React, { Component } from "react";
import styled from "styled-components";

class GridPractice extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Grid>
          <Item>01</Item>
          <Item>auto</Item>
          <Item>03</Item>
          <Item>04</Item>
          <Item>auto</Item>
          <Item>06</Item>
        </Grid>
        <Grid2>
          <Item>200px</Item>
          <Item>200px</Item>
          <Item>Fr - fills rest of space</Item>
          <Item>200px</Item>
          <Item>200px</Item>
          <Item>Fr - fills rest of space</Item>
        </Grid2>
        <Grid3>
          <Item>auto - wraps around content</Item>
          <Item>Fr - fills rest of space</Item>
        </Grid3>
        <Grid4>
          <Item>Fr - fills rest of space</Item>
          <Item>auto - wraps around content</Item>
        </Grid4>
        <Grid5>
          <Item>
            grid-auto-rows: 100px - all cells will implicitly have 100px height
          </Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item>5</Item>
          <Item>6</Item>
          <Item>7</Item>
          <Item>8</Item>
          <Item style={{ gridColumn: "span 2" }}>gridColumn: span 2</Item>
          <Item>10</Item>
          <Item>11</Item>
          <Item>12</Item>
          <Item style={{ gridColumn: "span 3" }}>
            gridColumn: span 3 - moves into next row because no room
          </Item>
          <Item>14</Item>
          <Item>15</Item>
          <Item style={{ gridColumn: "span 2", gridRow: "span 2" }}>
            gridColumn: span 2 and gridRow: span 2
          </Item>
          <Item>17</Item>
          <Item>18</Item>
          <Item>19</Item>
          <Item style={{ gridColumnStart: "2", gridColumnEnd: "5" }}>
            gridColumnStart: 2 and gridColumnEnd: 5 | gridColumn: 2 / 5 is same
            thing
          </Item>
          <Item>21</Item>
          <Item style={{ gridColumn: "1 / span 2" }}>
            gridColumn: 1 / span 2 - starts at track 1 and spans to column 2
          </Item>
          <Item>23</Item>
          <Item>24</Item>
          <Item>25</Item>
          <Item style={{ gridColumn: "1 / -1" }}>
            gridColumn: 1 / -1 - you can use this as width 100% if you want to
            span a cell across entire width of the grid but it won't work for
            rows unless you specifically have defined gridTemplateRows
          </Item>
          <Item>27</Item>
          <Item>28</Item>
          <Item>29</Item>
          <Item>30</Item>
        </Grid5>
      </React.Fragment>
    );
  }
}

export default GridPractice;

const Grid = styled.div`
  margin: 50px;
  display: grid;
  grid-template-columns: 100px auto 500px;
  grid-template-rows: 50px 100px;
  grid-gap: 20px;
`;

const Grid2 = styled.div`
  margin: 50px;
  display: grid;
  grid-template-columns: 200px 200px 1fr;
  grid-template-rows: 50px 100px;
  grid-gap: 20px;
`;

const Grid3 = styled.div`
  margin-top: 50px;
  margin-bottom: 0;
  margin-left: 50px;
  margin-right: 50px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 50px 100px;
  grid-gap: 20px;
`;

const Grid4 = styled.div`
  margin-top: -100px;
  margin-bottom: 0;
  margin-left: 50px;
  margin-right: 50px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 50px 100px;
  grid-gap: 20px;
`;

const Grid5 = styled.div`
  margin-top: -50px;
  margin-bottom: 0;
  margin-left: 50px;
  margin-right: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 100px;
  grid-gap: 20px;
`;

const Item = styled.div`
  text-align: center;
  font-weight: 900;
  background-color: yellow;
  border-style: solid;
  border-width: 5px;
  border-color: red;
`;

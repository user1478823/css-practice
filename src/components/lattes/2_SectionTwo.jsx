import React from "react";
import styled from "styled-components";

const bars = [
  { name: "WEB DESIGN", percentage: "90%" },
  { name: "DEVELOPMENT", percentage: "80%" },
  { name: "PHOTOGRAPHY", percentage: "85%" },
  { name: "MARKETING", percentage: "70%" }
];

export default () => (
  <Section>
    <div>
      <h3 className="title">WE`RE CREATIVE</h3>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
        <br />
        <br />
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur?
      </p>
    </div>
    <div>
      {bars.map(bar => {
        return (
          <BarBg>
            <Description>{bar.name}</Description>
            <Bar style={{ width: bar.percentage }} />
            <PercentageBg>
              <P>{bar.percentage}</P>
            </PercentageBg>
          </BarBg>
        );
      })}
    </div>
  </Section>
);

const Section = styled.section`
  padding: 4em 2em;
  color: black;
  background-color: white;
  display: grid;
  grid-gap: 4em;
  justify-content: center;
  grid-template-columns: 350px;

  * {
    justify-self: center;
  }
  .title {
    margin-bottom: 1.5em;
  }

  @media (min-width: 576px) {
    grid-template-columns: 400px;
  }
  @media (min-width: 768px) {
    grid-template-columns: 600px;
  }
  @media (min-width: 980px) {
    grid-template-columns: 350px 350px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: 550px 550px;
  }
  @media (min-width: 1680px) {
    grid-template-columns: 600px 600px;
  }
`;

const BarBg = styled.div`
  position: relative;
  margin-top: 48px;
  margin-bottom: 80px;
  width: 550px;
  height: 2px;
  background-color: #eee;
  width: 350px;

  @media (min-width: 576px) {
    width: 400px;
  }
  @media (min-width: 768px) {
    width: 600px;
  }
  @media (min-width: 980px) {
    width: 300px;
  }
  @media (min-width: 1280px) {
    width: 500px;
  }
`;

const Description = styled.p`
  position: absolute;
  top: -35px;
  left: 10px;
`;

const Bar = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  background-color: #000;
`;

const P = styled.p`
  color: #000 !important;
`;

const PercentageBg = styled.div`
  width: 50px;
  height: 50px;
  background-color: #eee;

  position: absolute;
  top: -48px;
  right: -50px;

  display: grid;
  text-align: center;
  align-items: center;
`;

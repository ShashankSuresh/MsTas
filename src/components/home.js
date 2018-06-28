import React from "react";
import styled from "styled-components";
import Particle from '../components/particles';
import Typing from '../components/type';
import Social from '../components/social';

const colorWhite = "#fff";
const colorBlue = "#00b4d9";
const colorLightGrey = "#9a9a9a";

const Container = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  text-align: right;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 4em;
  overflow: hidden;
`;

const H1 = styled.h1`
  font-size: 140px;
  font-weight: 900;
  letter-spacing: -4px;
  line-height: 125px;
`

const TitleWhite = H1.extend`
  color: ${colorWhite};
`

const TitleBlue = H1.extend`
  color: ${colorBlue};
`

const H3 = styled.h3`
    font-size: 40px;
    color: ${colorLightGrey};
    margin-top: 1em;
`;

const BannerContainer = () => (
  <Container>
    <TitleWhite>Styled</TitleWhite>
    <TitleBlue>Components</TitleBlue>
    <H3>We are bla bla bla bla bla bla
      <span>    </span>
      <Typing data={["we do this", "we do that", "we do everything"]} />
    </H3>
    <Particle />
    <Social position={"absolute"} left={"33px"} display={"block"} footerFlag={false}/>
  </Container>
);

export default BannerContainer;
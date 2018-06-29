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

  @media (min-width: 320px) and (max-width: 768px) {
    margin-right: 0;
    padding: 20px;
  }
`;

const H1 = styled.h1`
  font-size: 140px;
  font-weight: 900;
  letter-spacing: -4px;
  line-height: 125px;
  
  @media (min-width: 320px) and (max-width: 768px) { 
    line-height: 80px;
  }
`

const TitleWhite = H1.extend`
  color: ${colorWhite};

  @media (min-width: 320px) and (max-width: 768px) { 
    font-size: 4em;
  }
`

const TitleBlue = H1.extend`
  color: ${colorBlue};

  @media (min-width: 320px) and (max-width: 768px) { 
    font-size: 3.2em;
  }
`

const H3 = styled.h3`
    font-size: 40px;
    color: ${colorLightGrey};
    margin-top: 1em;

    @media (min-width: 320px) and (max-width: 768px) { 
      margin-top: 10px;
      font-size: 28px;
    }
`;

const SocialMediaContainer = styled.div`
    @media (min-width: 320px) and (max-width: 768px) {
        display: none;
    }
`

const BannerContainer = () => (
  <Container>
    <Particle />
    <TitleWhite>Styled</TitleWhite>
    <TitleBlue>Components</TitleBlue>
    <H3>We are bla bla bla bla bla bla
      <span>    </span>
      <Typing />
    </H3>
    <SocialMediaContainer>
      <Social position={"absolute"} left={"33px"} display={"block"} footerFlag={false}/>
    </SocialMediaContainer>
  </Container>
);

export default BannerContainer;
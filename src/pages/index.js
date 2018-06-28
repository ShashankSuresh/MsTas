import React from 'react'
import styled from 'styled-components'
import Navigation from '../components/navigation'
import BannerContainer from '../components/home'
import About from '../components/about'
import Services from '../components/services'
import Contact from '../components/contact'
import Footer from '../components/footer'

import { injectGlobal } from 'styled-components';
import reset from 'styled-reset'

const colorBlack = "#1f1f1f";

injectGlobal`
  ${reset}
  @font-face {
    font-family: 'Montserrat', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Montserrat');
  }

  html {
    overflow-x: hidden;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: ${colorBlack};
  }
`;

const Main = styled.main`
  position: relative;
`

const IndexPage = () => (
  <Main>
    <Navigation />
    <BannerContainer />
    <About />
    <Services />
    <Contact />
    <Footer />
  </Main>
)

export default IndexPage

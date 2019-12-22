import React from 'react'
import { Header } from './components/header';
import { UserProfile } from './components/body';
import { createGlobalStyle } from 'styled-components';
import { pageTitle } from './profile.json';
import { mobileScreenSize } from './styleguide/breakpoints';

const GlobalStyle = createGlobalStyle`
  :root {
    --header-height: 300px;

    @media screen and (max-width: ${mobileScreenSize}) {
      --header-height: 200px;
    }
  }

  body, html, #app {
  font-family: 'Montserrat';
  padding:0;
  margin:0;
  height: 100%;
}
`
document.title = pageTitle || 'Minimalist';

export const App = () => (

  <React.Fragment>
    <GlobalStyle />
    <Header />
    <UserProfile />
  </React.Fragment>
)

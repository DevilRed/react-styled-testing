import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Header from './components/Header';
import Profile from './components/Profile.js';
import GlobalStyle from './theme/globalStyle';
import theme from 'styled-theming';
// import $ from 'jquery';// if using effects?
// import 'foundation-sites';
import 'foundation-sites/dist/css/foundation.min.css';

const boxBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
});
const Box = styled.div`
  background-color: ${boxBackgroundColor};
`;

function App() {
  useEffect(() => {
    // $(document).foundation();// uncomment if using effect from foundation
  }, [])

  return (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <>
    <GlobalStyle />
    <Box>
      <Header />
      <Profile />
    </Box>
    </>
  </ThemeProvider>
  );
}

export default App;

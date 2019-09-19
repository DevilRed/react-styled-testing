import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Header from './components/Header';
import Profile from './components/Profile.js';
// import GlobalStyle from './theme/globalStyle';
import theme from 'styled-theming';

const boxBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
});
const Box = styled.div`
  background-color: ${boxBackgroundColor};
`;

function App() {
  return (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <Box>
      <Header />
      <Profile />
    </Box>
  </ThemeProvider>
  );
}

export default App;

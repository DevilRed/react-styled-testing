import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Header from './components/Header';
import Profile from './components/Profile.js';
import GlobalStyle from './theme/globalStyle';
import theme from 'styled-theming';

import Grid from '@material-ui/core/Grid';
// import { createMuiTheme } from '@material-ui/styles';

const boxBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
});
const Box = styled.div`
  background-color: ${boxBackgroundColor};
  width: 100%;
`;

function App() {
  return (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <Grid container direction="row" spacing={2}>
      <GlobalStyle />
      <Box>
        <Header />
        <Profile />
      </Box>
    </Grid>
  </ThemeProvider>
  );
}

export default App;

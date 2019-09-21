import React, { useContext, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Header from './components/Header';
import Profile from './components/Profile.js';
import GlobalStyle from './theme/globalStyle';
import theme from 'styled-theming';
import { ThemeContext } from './context/ThemeContext';

const boxBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
});
const Box = styled.div`
  background-color: ${boxBackgroundColor};
`;

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if(isDarkMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [isDarkMode]);

  return (
  <ThemeProvider theme={{ mode: theme }}>
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

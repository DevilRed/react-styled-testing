import React from 'react';
import styled from 'styled-components'
import Header from './components/Header';
import Profile from './components/Profile.js';
import GlobalStyle from './theme/globalStyle';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div>
        <Header />
        <Profile />
      </div>
    </React.Fragment>
  );
}

export default App;

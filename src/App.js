import './App.css';
import HeadingComponent from './components/HeadingComponent';
import HomePageComponent from './components/HomePageComponent';
import { ThemeProvider } from '@emotion/react';
import { mainTheme } from './themes/MainTheme';
import React from 'react';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
    <div className="App">
        <HeadingComponent></HeadingComponent>
        <HomePageComponent></HomePageComponent>
    </div>
    </ThemeProvider>
  );
}

export default App;

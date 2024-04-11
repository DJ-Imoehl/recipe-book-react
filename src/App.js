import logo from './logo.svg';
import './App.css';
import CategoryComponent from './components/CategoryComponent';
import HeadingComponent from './components/HeadingComponent';
import { ThemeProvider } from '@emotion/react';
import { mainTheme } from './themes/MainTheme';
import React from 'react';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
    <div className="App">
        <HeadingComponent></HeadingComponent>
        <CategoryComponent category={{name: "Breakfast", picture: null}}></CategoryComponent>
    </div>
    </ThemeProvider>
  );
}

export default App;

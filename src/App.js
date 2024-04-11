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
        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
          <CategoryComponent category={{name: "Breakfast", picture: null}}></CategoryComponent>
          <CategoryComponent category={{name: "Quick Meals", picture: null}}></CategoryComponent>
          <CategoryComponent category={{name: "Healthy", picture: null}}></CategoryComponent>
          <CategoryComponent category={{name: "Salads", picture: null}}></CategoryComponent>
        </div>
    </div>
    </ThemeProvider>
  );
}

export default App;

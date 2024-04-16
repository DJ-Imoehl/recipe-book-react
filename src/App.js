import './App.css';
import HeadingComponent from './components/HeadingComponent';
import HomePageComponent from './components/HomePageComponent';
import Layout from './pages/Layout';
import AboutPage from './pages/AboutPage';
import { ThemeProvider } from '@emotion/react';
import { mainTheme } from './themes/MainTheme';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipePage from './pages/RecipePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePageComponent/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/recipes" element={<HomePageComponent/>}></Route>
          <Route path="/recipes/:recipeId" element={<RecipePage/>}></Route>
          <Route path="*" element={<HomePageComponent/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

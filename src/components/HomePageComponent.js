import React from "react"
import CategoryComponent from './CategoryComponent';
import './HomePageComponent.css'
import { useState, useEffect, setPosts } from "react";

const HomePageComponent = () => {
    const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false);
    const [isRecentRecipesLoaded, setIsRecentRecipesLoaded] = useState(false);
    const [categories, setCategories] = useState([]);
    const [recentRecipes, setRecentRecipes] = useState([]);
    const [error, setError] = useState(null);

    //TODO: Load Category List here
    useEffect(() => {
        fetch('http://localhost:8080/recipes')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setIsCategoriesLoaded(true);
              setCategories(data);
           }).catch(err => {
            console.log(err);
            setError(err);
           });
     }, []);

     useEffect(() => {
        fetch('http://localhost:8080/recipes')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setIsRecentRecipesLoaded(true);
              setRecentRecipes(data._embedded.recipeList);
           }).catch(err => {
            console.log(err);
            setError(err);
           });
     }, []);

     
     const listedRecipes = [];
     for(const recipe of recentRecipes) {
        console.log("Recipe name: " + recipe.name);
        console.log(recipe);
        listedRecipes.push(<CategoryComponent category={{name: recipe.name, picture: null}}></CategoryComponent>);
     }

    return (<div><div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
    <CategoryComponent category={{name: "Breakfast", picture: null}}></CategoryComponent>
    <CategoryComponent category={{name: "Quick Meals", picture: null}}></CategoryComponent>
    <CategoryComponent category={{name: "Healthy", picture: null}}></CategoryComponent>
    <CategoryComponent category={{name: "Salads", picture: null}}></CategoryComponent>
  </div>
  <div className='divider'></div>
  <h2 className='subtitle'>Most Recent Recipes</h2>
  <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
    {listedRecipes}
  </div></div>);
}

export default HomePageComponent;
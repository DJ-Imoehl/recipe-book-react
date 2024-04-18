import React from "react"
import CategoryComponent from './CategoryComponent';
import './HomePageComponent.css'
import { useState, useEffect, setPosts } from "react";
import { Link } from "react-router-dom";

const HomePageComponent = () => {
    const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false);
    const [isRecentRecipesLoaded, setIsRecentRecipesLoaded] = useState(false);
    const [categories, setCategories] = useState([]);
    const [recentRecipes, setRecentRecipes] = useState([]);
    const [error, setError] = useState(null);

    //TODO: Load Category List here
    useEffect(() => {
        fetch('http://localhost:8080/categories/featured')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setIsCategoriesLoaded(true);
              setCategories(data._embedded.categoryList);
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
        listedRecipes.push(<Link to={"/recipes/" + recipe.id}><CategoryComponent category={{name: recipe.name, picture: null}}></CategoryComponent></Link>);
     }
     const listedCategories = [];
     for(const cat of categories) {
      console.log("Category: " + cat.name);
      listedCategories.push(<CategoryComponent category={cat}></CategoryComponent>)
     }

    return (<div><div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
    {listedCategories}
  </div>
  <div className='divider'></div>
  <h2 className='subtitle'>Most Recent Recipes</h2>
  <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
    {listedRecipes}
  </div></div>);
}

export default HomePageComponent;
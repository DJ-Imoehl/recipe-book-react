import { useEffect, useState } from 'react';
import './RecipePage.css';
import { useParams } from 'react-router-dom';
import { Chip, Stack } from '@mui/material';

const RecipePage = () => {
    const {recipeId} = useParams();
    const [isRecipeLoaded, setIsRecipeLoaded] = useState(false);
    const [isCategoryLoaded, setIsCategoryLoaded] = useState(false);
    const [recipe, setRecipe] = useState({});
    const [categories, setCategories] = useState({});
    const [error, setError] = useState(null);

    let categoryChips = [];
    let ingredients = [];
    let instructions = [];
    let quickStats = [];
    const getCategories = (loadedRecipe) => {
        fetch(loadedRecipe._links?.categories.href)
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setIsCategoryLoaded(true);
              setCategories(data._embedded.categoryList);
        }).catch(err => {
            console.log(err);
            setError(err);
        });
    }
    useEffect(() => {
        fetch('http://localhost:8080/recipes/' + recipeId)
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setIsRecipeLoaded(true);
              setRecipe(data);
              getCategories(data);
           }).catch(err => {
            console.log(err);
            setError(err);
           });
     }, []);

     if(isRecipeLoaded) {
        //Load Ingredient list items
         for(const ingredient of recipe.ingredientList) {
            ingredients.push(<li><p>{ingredient.name} {ingredient.amount ? <i> - {ingredient.amount} {ingredient.unit}</i> : null} {ingredient.optional ? <i>- Optional</i> : null}</p></li>)
        }

        //Load instruction list items
        for (const instruction of recipe.directions) {
            instructions.push(<li>{instruction}</li>)
        }

        //Load Quick Stats
        quickStats = (
            <div className='quick-stats-box'>
                    <h3>Quick Stats</h3>
                    <ul>
                        <li>Servings: 1</li>
                        <li>Calories/Serving: 300</li>
                        <li>{recipe.ingredientList.length} Ingredients</li>
                        <li>Prep Time: 5 min</li>
                        <li>Cook Time: 3 min</li>
                        <li>Total Time: 8 min</li>
                    </ul>
                </div>
        )
     }
     

    if(isCategoryLoaded) {
        for(const category of categories) {
            categoryChips.push(<Chip label={category.name} color="primary"></Chip>);
        }
    }

    return (
        <div className="flex">
            <div className="flex-auto w-64">
                <h2 className='recipe-title-text'>{recipe.name}</h2>
                <p className='recipe-description'>{recipe.story}</p>
                <img className='recipe-main-image' src="/resources/breakfast.jpg"></img>
                <div className='tags'>
                    <Stack direction="row" spacing={1}>
                        {categoryChips}
                    </Stack>
                </div>
                <div className="ingredients-instructions">
                    <h2 className='recipe-sub-title-text'>{recipe.name}</h2>
                    <div className='ingredients'>
                        <h3>Ingredients</h3>
                        <ul>
                            {ingredients}
                        </ul>
                    </div>
                    <div className='instructions'>
                        <ol>{instructions}</ol>
                    </div>
                </div>
            </div>
            <div className="flex-initial w-64 quick-stats-left-line">
                {quickStats}
            </div>
        </div>

    )
}

export default RecipePage;
import { useEffect, useState } from 'react';
import './RecipeListCardComponent.css';
import { Chip, Stack } from '@mui/material';
import { Link } from "react-router-dom";

/**
 * 
 * @param {Recipe} recipe 
 * @returns 
 */
const RecipeListCardComponent = ({recipe}) => {
    const [categories, setCategories] = useState([]);
    const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(recipe._links?.categories.href)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setCategories(data._embedded.categoryList);
            setIsCategoriesLoaded(true);
        })
        .catch((error) => {
            console.log(error);
            setError(error);
        })
    }, []);

    let categoryChips = [];
    if(isCategoriesLoaded) {
        for(let i = 0; i < Math.min(categories.length, 4); i++) {
            const category = categories[i];
            console.log("In category loop, on category: " + category.name);
            categoryChips.push(<Chip label={category.name} color="primary"></Chip>)
        }
    }
    console.log(recipe);
    console.log(categoryChips);
    return (
    <Link to={"/recipes/" + recipe.id}>
        <div className="flex card centered">
            <div className="flex-auto w-64">
                <h2 className='recipe-title'>{recipe.name}</h2>
                <div className="extra-info">
                    <Stack direction="row" spacing={1}>
                        {categoryChips}
                        <p>XX minutes</p>
                        <p>{recipe.ingredientList.length} Ingredients</p>
                    </Stack>
                </div>
            </div>
            <div className='recipe-image-container flex-initial w-32'>
                <img className='recipe-image' src="/resources/breakfast.jpg"></img>
            </div>
        </div>
    </Link>)
}

export default RecipeListCardComponent;
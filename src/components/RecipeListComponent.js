import RecipeListCardComponent from "./RecipeListCardComponent";
import "./RecipeListComponent.css"
import Stack from '@mui/material/Stack'

/**
 * 
 * @param {Recipe[]} recipes 
 */
//TODO: Add Pagination
const RecipeListComponent = ({recipes}) => {
    console.log(recipes);
    const recipeComponents = [];
    if(recipes != null) {
        for(const recipe of recipes) {
            recipeComponents.push(<RecipeListCardComponent recipe={recipe}></RecipeListCardComponent>);
        }
    }
    

    return (
        <div className="recipe-list">
            <Stack spacing={2} justifyContent="center">
                {recipeComponents}
            </Stack>
        </div>
    )
}

export default RecipeListComponent;
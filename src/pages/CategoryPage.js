import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import RecipeListComponent from "../components/RecipeListComponent";
import './CategoryPage.css';

const CategoryPage = () => {
    const {categoryId} = useParams();
    const [category, setCategory] = useState({});
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    const getRecipes = (loadedCategory) => {
        fetch(loadedCategory._links?.recipes.href)
            .then((response) => response.json())
            .then((data) => {
                if(data == null || data._embedded == null || data._embedded.recipeList == null) {
                    console.log("No recipes to load");
                } else {
                    console.log(data._embedded.recipeList);
                    setRecipes(data._embedded.recipeList);
                }
            })
            .catch((e) => {
                setError(e);
                console.log(e);
            })
    }
    
    useEffect(() => {
        fetch('http://localhost:8080/categories/' + categoryId)
            .then((response) => response.json())
            .then((data) => {
                if(data == null) {
                    console.log("No category to load.");
                    console.log(data);
                } else {
                    console.log(data);
                    setCategory(data);
                    getRecipes(data);
                }
            })
            .catch((e) => {
                setError(e);
                console.log(e);
            })
    }, []);

    return (
        <div className="category-page">
            <h2 className="category-title">{category.name}</h2>
            <RecipeListComponent recipes={recipes}></RecipeListComponent>
        </div>
    )

}

export default CategoryPage;
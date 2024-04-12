import React from "react"
import "./CategoryComponent.css"

const CategoryComponent = ({category}) => {

    return (<div className="category-component">
        <img src="/resources/breakfast.jpg" alt="breakfast image"></img>
        <div className="category-text"><h3>{category.name}</h3></div>
    </div>);
}

export default CategoryComponent;
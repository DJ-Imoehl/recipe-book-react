import React from "react"
import "./CategoryComponent.css"

const CategoryComponent = ({category}) => {

    return (<div className="categoryComponent">
        <div></div>
        <div className="category-text"><h3>{category.name}</h3></div>
    </div>);
}

export default CategoryComponent;
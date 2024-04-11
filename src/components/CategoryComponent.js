import React from "react"

const CategoryComponent = ({category}) => {

    return <h1 className="bg-blue-500 text-white p-4">THIS IS THE CATEGORY IS {category.name}</h1>;
}

export default CategoryComponent;
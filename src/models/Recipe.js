
class Recipe {

    constructor(id, name, story, ingredientList, directions, categoryList){
        this.id = id;
        this.name = name;
        this.story = story;
        this.ingredientList = ingredientList;
        this.directions = directions;
        this.categoryList = categoryList;
        this._links = {};
    }


}

export default Recipe;
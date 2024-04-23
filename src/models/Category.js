
class Category {
    constructor(name, photo, description) {
        this.name = name;
        this.photo = photo;
        this.description = description;
        this._links = {};
    }
}

export default Category;
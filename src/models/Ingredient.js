
class Ingredient {
    constructor(id, name, unit, amount, optional) {
        this.id = id;
        this.name = name;
        this.unit = unit;
        this.amount = amount;
        this.optional = optional;
        this._links = {};
    }
}

export default Ingredient;
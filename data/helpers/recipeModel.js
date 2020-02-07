const db = require('../dbConfig.js');

/*
- `getRecipes()`: should return a list of all recipes in the database.
- `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
- `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe
*/

module.exports = {
    getRecipes,
    getByRecipeId,
    getShoppingList,
    getInstructions, 
};

function getRecipes() {
    return db('recipes');
}

function getByRecipeId(recipe_id) {
    return db('recipes').where({ recipe_id}).first();
}

function getShoppingList(recipe_id) {
    return db('recipes').where({ recipe_id }).first();
}

function getInstructions(recipe_id) {
    return db('recipes').where({ recipe_id }).first();
}
